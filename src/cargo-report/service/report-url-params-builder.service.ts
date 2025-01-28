import { inject, Injectable } from '@angular/core';
import { ReportUrlParamsDataService } from '../store/report-url-params.data.service';
import { map, Observable, shareReplay, switchMap, tap } from 'rxjs';
import { ReportResponse, ReportUrlParams } from '../model/report.model';
import { HttpParams } from '@angular/common/http';
import { ReportApiService } from '../../shared/service/report.api.service';

@Injectable()
export class ReportUrlParamsBuilderService {
  private urlParamsDataService = inject(ReportUrlParamsDataService);
  private reportApiService = inject(ReportApiService);
  private parameterizedReport$ = this.urlParamsDataService.reportUrlParams$.pipe(
    map((reportUrlParams) => this.buildUrlParams(reportUrlParams)),
    switchMap((params) => this.reportApiService.getReport(params)),
    tap((response) => console.log(response.fwb_data.length)),
    shareReplay({ bufferSize: 1, refCount: true }),
  );

  private buildUrlParams(reportUrlParams: ReportUrlParams): HttpParams {
    let httpParams = new HttpParams();
    Object.keys(reportUrlParams).forEach((key) => {
      const value = reportUrlParams[key as keyof ReportUrlParams];
      if (value !== null) httpParams = httpParams.set(key, value);
    });
    return httpParams;
  }

  public getParameterizedFwbData(): Observable<ReportResponse['fwb_data']> {
    return this.parameterizedReport$.pipe(map((res: ReportResponse) => res.fwb_data));
  }

  public getParameterizedTotalRecords(): Observable<ReportResponse['totalRecords']> {
    return this.parameterizedReport$.pipe(map((res: ReportResponse) => res.totalRecords));
  }
}
