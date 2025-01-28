import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReportUrlParamsBuilderService } from '../../service/report-url-params-builder.service';

@Component({
  selector: 'app-reports-table',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    CommonModule,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
  ],
  templateUrl: './reports-table.component.html',
  styleUrl: './reports-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsTableComponent {
  private reportParamsBuilderService = inject(ReportUrlParamsBuilderService);
  public reportData = toSignal(this.reportParamsBuilderService.getParameterizedFwbData(), { initialValue: [] });
  public columnsToDisplay = ['prefix', 'serial', 'origin', 'destination', 'weight', 'unit'];
}
