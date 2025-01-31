import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReportUrlParams } from '../model/report.model';

@Injectable()
export class ReportUrlParamsDataService {
  private _reportUrlParams$ = new BehaviorSubject<ReportUrlParams>({
    sortOrder: null,
    sortName: null,
    pageNumber: 0,
    pageSize: 100,
    from: null,
    until: null,
  });

  public reportUrlParams$ = this._reportUrlParams$.asObservable();

  public patchUrlParams(urlParams: Partial<ReportUrlParams>) {
    this._reportUrlParams$.next({ ...this._reportUrlParams$.getValue(), ...urlParams });
  }
}
