import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReportUrlParamsBuilderService } from '../../service/report-url-params-builder.service';
import { MatSortModule, Sort } from '@angular/material/sort';
import { ReportSortService } from '../../service/report-sort.service';
import { ReportData, ReportSortUrlParams } from '../../model/report.model';
import { NgTemplateOutlet } from '@angular/common';
import { REPORT_FIELDS_CONFIG } from '../../config/report-fields.config';
import { FwbDetailCardComponent } from '../detail-cards/fwb-detail-card/fwb-detail-card.component';
import { AgentDetailCardComponent } from '../detail-cards/agent-detail-card/agent-detail-card.component';
import { ShipperDetailCardComponent } from '../detail-cards/shipper-detail-card/shipper-detail-card.component';
import { ConsigneeDetailCardComponent } from '../detail-cards/consignee-detail-card/consignee-detail-card.component';

@Component({
  selector: 'app-report-table',
  imports: [
    MatTableModule,
    MatSortModule,
    NgTemplateOutlet,
    FwbDetailCardComponent,
    AgentDetailCardComponent,
    ShipperDetailCardComponent,
    ConsigneeDetailCardComponent,
  ],
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
  protected reportFieldsConfig = REPORT_FIELDS_CONFIG;
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
