import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AbstractResponseService, ServerResponse } from '../helper/response';
import { FwbReport } from '../../cargo-report/model/report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportApiService extends AbstractResponseService {
  private baseUrl = 'https://enxtlinux.enxt.solutions:8013/api/Messages/FWBReports';
  private http = inject(HttpClient);

  public getReport(params: HttpParams): Observable<ServerResponse<FwbReport>> {
    return this.http.get<FwbReport>(`${this.baseUrl}`, { params }).pipe(
      map((res: FwbReport) => this.buildReadyValue(res)),
      this.startWithLoading(),
      this.catchLoadingError(),
    );
  }
}
