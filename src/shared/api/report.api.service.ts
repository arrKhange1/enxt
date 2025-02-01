import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ReportResponse } from '../../cargo-report/model/report.model';
import { AbstractResponseService, ServerResponse } from '../helper/response';

@Injectable({
  providedIn: 'root',
})
export class ReportApiService extends AbstractResponseService {
  private baseUrl = 'https://enxtlinux.enxt.solutions:8013/api/Messages/FWBReports';
  private http = inject(HttpClient);

  public getReport(params: HttpParams): Observable<ServerResponse<ReportResponse>> {
    return this.http.get<ReportResponse>(`${this.baseUrl}`, { params }).pipe(
      map((res: ReportResponse) => this.buildReadyValue(res)),
      this.startWithLoading(),
      this.catchLoadingError(),
    );
  }
}
