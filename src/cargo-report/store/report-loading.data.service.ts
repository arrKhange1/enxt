import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ReportLoadingDataService {
  private _isReportLoading$ = new BehaviorSubject<boolean>(false);
  public isReportLoading$ = this._isReportLoading$.asObservable();

  public setLoading(loadingStatus: boolean) {
    this._isReportLoading$.next(loadingStatus);
  }
}
