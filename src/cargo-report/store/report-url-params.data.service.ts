import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReportUrlParams } from '../model/report.model';

@Injectable()
export class ReportUrlParamsDataService {
  public reportUrlParams$ = new BehaviorSubject<ReportUrlParams>({
    pageNumber: 1,
    pageSize: 100,
    from: '',
    until: '',
  });
}
