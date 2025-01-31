import { inject, Injectable } from '@angular/core';
import { ReportUrlParamsDataService } from '../store/report-url-params.data.service';
import { ReportSortUrlParams } from '../model/report.model';

@Injectable()
export class ReportSortService {
  private reportUrlDataService = inject(ReportUrlParamsDataService);

  public sortReport({ sortOrder, sortName }: ReportSortUrlParams): void {
    if (!sortOrder) {
      this.reportUrlDataService.patchUrlParams({
        sortOrder: null,
        sortName: null,
      });
    } else {
      this.reportUrlDataService.patchUrlParams({
        sortOrder,
        sortName,
      });
    }
  }
}
