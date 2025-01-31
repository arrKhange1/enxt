import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ReportResponse } from '../../cargo-report/model/report.model';
import { LoadedValue, WithLoading } from '../helper/response';

@Injectable({
  providedIn: 'root',
})
export class ReportApiService extends WithLoading {
  private baseUrl = 'https://enxtlinux.enxt.solutions:8013/api/Messages/FWBReports';
  private http = inject(HttpClient);

  public getReport(params: HttpParams): Observable<LoadedValue<ReportResponse>> {
    return this.http.get<ReportResponse>(`${this.baseUrl}`, { params }).pipe(
      map((res: ReportResponse) => this.buildReadyValue(res)),
      this.startWithLoading(),
      this.catchLoadingError(),
    );
  }
}
