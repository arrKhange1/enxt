import { inject, Injectable } from '@angular/core';
import { ReportUrlParamsDataService } from '../store/report-url-params.data.service';
import { filter, map, Observable, shareReplay, switchMap } from 'rxjs';
import { ReportData, ReportResponse, ReportUrlParams } from '../model/report.model';
import { HttpParams } from '@angular/common/http';
import { ReportApiService } from '../../shared/api/report.api.service';
import { debounceTimeAfter } from '../../shared/operator-function/debounceTimeAfter';

@Injectable()
export class ReportUrlParamsBuilderService {
  private urlParamsDataService = inject(ReportUrlParamsDataService);
  private reportApiService = inject(ReportApiService);
  private parameterizedReport$ = this.urlParamsDataService.reportUrlParams$.pipe(
    debounceTimeAfter(1, 500),
    map((reportUrlParams) => this.buildUrlParams(reportUrlParams)),
    switchMap((params) => this.reportApiService.getReport(params)),
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

  public getParameterizedFwbData(): Observable<ReportData[]> {
    return this.parameterizedReport$.pipe(
      map((response) => response.data?.fwb_data),
      filter((data) => data !== undefined),
    );
  }

  public getParameterizedTotalRecords(): Observable<ReportResponse['totalRecords']> {
    return this.parameterizedReport$.pipe(
      map((response) => response.data?.totalRecords),
      filter((totalRecords) => totalRecords !== undefined),
    );
  }

  public getReportLoadingState(): Observable<boolean> {
    return this.parameterizedReport$.pipe(map((response) => response.isLoading));
  }
}
