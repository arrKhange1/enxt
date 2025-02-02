import { inject, Injectable } from '@angular/core';
import { ReportUrlParamsDataService } from '../store/report-url-params.data.service';
import { filter, map, Observable, shareReplay, switchMap } from 'rxjs';
import { FwbData, FwbReport } from '../model/report.model';
import { ReportApiService } from '../../shared/api/report.api.service';
import { debounceTimeAfter } from '../../shared/operator-function/debounceTimeAfter';
import { buildUrlParams } from '../../shared/helper/build-url-params';

@Injectable()
export class ParameterizedReportService {
  private urlParamsDataService = inject(ReportUrlParamsDataService);
  private reportApiService = inject(ReportApiService);

  /**
   * Поле, в котором подписываемся на URL параметры в памяти,
   * делаем запрос на сервер за данными с этими параметрами,
   * делимся параметризированными данными со всеми подписчиками
   * @private
   */
  private parameterizedReport$ = this.urlParamsDataService.reportUrlParams$.pipe(
    debounceTimeAfter(1, 250),
    map((reportUrlParams) => buildUrlParams({ ...reportUrlParams })),
    switchMap((params) => this.reportApiService.getReport(params)),
    shareReplay({ bufferSize: 1, refCount: true }),
  );

  /**
   * Возвращает поток с данными для таблицы
   */
  public getParameterizedFwbData(): Observable<FwbData[]> {
    return this.parameterizedReport$.pipe(
      map((response) => response.data?.fwb_data),
      filter((data) => data !== undefined),
    );
  }

  /**
   * Возвращает поток с количеством строк данных
   */
  public getParameterizedTotalRecords(): Observable<FwbReport['totalRecords']> {
    return this.parameterizedReport$.pipe(
      map((response) => response.data?.totalRecords),
      filter((totalRecords) => totalRecords !== undefined),
    );
  }

  /**
   * Возвращает поток со статусом загрузки данных с сервера
   * Если в потоке true - данные еще идут с сервера, false - данные пришли
   */
  public getReportLoadingState(): Observable<boolean> {
    return this.parameterizedReport$.pipe(map((response) => response.isLoading));
  }
}
