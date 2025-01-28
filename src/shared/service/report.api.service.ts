import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { ReportResponse } from '../../cargo-report/model/report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportApiService {
  private baseUrl = 'https://enxtlinux.enxt.solutions:8013/api/Messages/FWBReports';
  private http = inject(HttpClient);

  public getReport(params: HttpParams): Observable<ReportResponse> {
    console.log(params.keys());
    return this.http
      .get<ReportResponse>(`${this.baseUrl}`, { params })
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }
}
