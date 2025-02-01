import { inject, Injectable } from '@angular/core';
import { ReportUrlParamsDataService } from '../store/report-url-params.data.service';
import { ReportSortUrlParams } from '../model/report.model';

@Injectable()
export class ReportSortService {
  private reportUrlDataService = inject(ReportUrlParamsDataService);

  /**
   * Метод с логикой изменения URL параметров сортировки
   * Если порядок сортировки пустой, то сбрасываем сортировку (обнуляем порядок и поле сортировки)
   * Если порядок не пустой, то применяем новый порядок сортировки для переданного поля
   *
   * @param sortOrder - Порядок сортировки
   * @param sortName - Название поля, по которому сортируем
   */
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
