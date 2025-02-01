import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ParameterizedReportService } from '../../service/parameterized-report.service';
import { MatSortModule, Sort } from '@angular/material/sort';
import { ReportSortService } from '../../service/report-sort.service';
import { FwbData, ReportSortUrlParams } from '../../model/report.model';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { REPORT_FIELDS_CONFIG } from '../../config/report-fields.config';
import { CdkDrag, CdkDragPlaceholder, CdkDropList } from '@angular/cdk/drag-drop';
import { DetailCardsContainerComponent } from '../../container/detail-cards-container/detail-cards-container.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-report-table',
  imports: [
    MatTableModule,
    MatSortModule,
    CdkDropList,
    CdkDrag,
    NgTemplateOutlet,
    CdkDragPlaceholder,
    DetailCardsContainerComponent,
    AsyncPipe,
    MatProgressSpinner,
  ],
  templateUrl: './report-table.component.html',
  styleUrl: './report-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportTableComponent {
  private reportSortService = inject(ReportSortService);
  private reportParamsBuilderService = inject(ParameterizedReportService);
  protected reportData$ = this.reportParamsBuilderService.getParameterizedFwbData();
  protected isReportDataLoading$ = inject(ParameterizedReportService).getReportLoadingState();
  protected expandedRow = signal<FwbData | null>(null);
  protected columnsToDisplay = ['prefix', 'serial', 'origin', 'destination', 'act_weight', 'unit'];
  protected reportFieldsConfig = REPORT_FIELDS_CONFIG;

  protected expandRowContent(row: FwbData) {
    if (row !== this.expandedRow()) {
      this.expandedRow.set(row);
    } else {
      this.expandedRow.set(null);
    }
  }

  protected sortChange({ active, direction }: Sort): void {
    const changedSortOrder = direction === '' ? null : direction;
    const changedSortName = active as ReportSortUrlParams['sortName'];
    this.reportSortService.sortReport({ sortName: changedSortName, sortOrder: changedSortOrder });
  }
}
