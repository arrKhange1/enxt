import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ParameterizedReportService } from '../../service/parameterized-report.service';
import { ReportUrlParamsDataService } from '../../store/report-url-params.data.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-report-paginator',
  imports: [MatPaginator, AsyncPipe],
  templateUrl: './report-paginator.component.html',
  styleUrl: './report-paginator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportPaginatorComponent {
  private reportUrlParamsBuilderService = inject(ParameterizedReportService);
  protected reportUrlParamsDataService = inject(ReportUrlParamsDataService);
  protected totalRecords$ = this.reportUrlParamsBuilderService.getParameterizedTotalRecords();

  protected onPaginationChange({ pageIndex, pageSize }: PageEvent) {
    this.reportUrlParamsDataService.patchUrlParams({ pageSize, pageNumber: pageIndex });
  }
}
