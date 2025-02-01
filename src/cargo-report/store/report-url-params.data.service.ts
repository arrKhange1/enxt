import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReportUrlParams } from '../model/report.model';

@Injectable()
export class ReportUrlParamsDataService {
  /**
   * Поле с URL параметрами, которые принимает сервер для фильтрации/обработки данных
   * @private
   */
  private _reportUrlParams$ = new BehaviorSubject<ReportUrlParams>({
    sortOrder: null,
    sortName: null,
    pageNumber: 0,
    pageSize: 100,
    from: null,
    until: null,
  });

  public reportUrlParams$ = this._reportUrlParams$.asObservable();

  /**
   * Метод, изменяющий только переданные URL параметры
   * @param urlParams - Поле с URL параметрами, которые нужно изменить
   */
  public patchUrlParams(urlParams: Partial<ReportUrlParams>) {
    this._reportUrlParams$.next({ ...this._reportUrlParams$.getValue(), ...urlParams });
  }
}
