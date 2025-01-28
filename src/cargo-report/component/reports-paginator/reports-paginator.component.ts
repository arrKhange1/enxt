import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ReportUrlParamsBuilderService } from '../../service/report-url-params-builder.service';
import { ReportUrlParamsDataService } from '../../store/report-url-params.data.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-reports-paginator',
  imports: [MatPaginator, AsyncPipe],
  templateUrl: './reports-paginator.component.html',
  styleUrl: './reports-paginator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsPaginatorComponent {
  protected reportUrlParamsDataService = inject(ReportUrlParamsDataService);
  protected totalRecords$ = inject(ReportUrlParamsBuilderService).getParameterizedTotalRecords();

  protected onPaginationChange({ pageIndex, pageSize }: PageEvent) {
    this.reportUrlParamsDataService.changePageParams({ pageSize, pageNumber: pageIndex });
  }
}
