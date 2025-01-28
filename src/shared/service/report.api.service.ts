import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportResponse } from '../../cargo-report/model/report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportApiService {
  private baseUrl = 'https://enxtlinux.enxt.solutions:8013/api/Messages/FWBReports';
  constructor(private http: HttpClient) {}

  public getReport(): Observable<ReportResponse> {
    return this.http.get<ReportResponse>(`${this.baseUrl}?pageNumber=1&pageSize=100&from=&until=`);
  }
}
