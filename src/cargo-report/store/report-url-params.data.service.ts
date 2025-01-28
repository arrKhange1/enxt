import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReportPageUrlParams, ReportUrlParams } from '../model/report.model';

@Injectable()
export class ReportUrlParamsDataService {
  private _reportUrlParams$ = new BehaviorSubject<ReportUrlParams>({
    sortOrder: null,
    sortName: null,
    pageNumber: 1,
    pageSize: 100,
    from: null,
    until: null,
  });

  public reportUrlParams$ = this._reportUrlParams$.asObservable();

  public changePageParams(pageParams: ReportPageUrlParams): void {
    this._reportUrlParams$.next({ ...this._reportUrlParams$.getValue(), ...pageParams });
  }
}
