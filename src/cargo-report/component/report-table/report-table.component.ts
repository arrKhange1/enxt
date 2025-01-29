import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReportUrlParamsBuilderService } from '../../service/report-url-params-builder.service';
import { MatSortModule, Sort } from '@angular/material/sort';
import { ReportSortService } from '../../service/report-sort.service';
import { ReportData, ReportSortUrlParams } from '../../model/report.model';
import { NgTemplateOutlet } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-report-table',
  imports: [MatTableModule, MatSortModule, NgTemplateOutlet, MatCardModule, MatListModule, MatRipple],
  templateUrl: './report-table.component.html',
  styleUrl: './report-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportTableComponent {
  private cdr = inject(ChangeDetectorRef);
  private reportSortService = inject(ReportSortService);
  private reportParamsBuilderService = inject(ReportUrlParamsBuilderService);
  protected reportData = toSignal(this.reportParamsBuilderService.getParameterizedFwbData(), { initialValue: [] });
  protected columnsToDisplay = ['prefix', 'serial', 'origin', 'destination', 'act_weight', 'unit'];
  protected expandedRow: ReportData | null = null;

  protected expandRowContent(row: ReportData) {
    if (row !== this.expandedRow) {
      console.log('row !== expandedRow');
      this.expandedRow = row;
    } else {
      this.expandedRow = null;
    }
    this.cdr.markForCheck();
  }

  protected sortChange({ active, direction }: Sort): void {
    const changedSortOrder = direction === '' ? null : direction;
    const changedSortName = active as ReportSortUrlParams['sortName'];
    this.reportSortService.sortReport({ sortName: changedSortName, sortOrder: changedSortOrder });
  }
}
