import { Component, inject, OnInit, signal } from '@angular/core';
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
import { ReportApiService } from '../../../shared/service/report.api.service';
import { from, map, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-reports-table',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    CommonModule,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
  ],
  templateUrl: './reports-table.component.html',
  styleUrl: './reports-table.component.scss',
})
export class ReportsTableComponent implements OnInit {
  private reportApiService = inject(ReportApiService);
  public reportData = toSignal(
    this.reportApiService.getReport().pipe(map((report) => report.fwb_data.map((record) => record.fWB_Details))),
    { initialValue: [] },
  );
  public columnsToDisplay = ['prefix', 'serial', 'origin', 'destination', 'weight', 'unit'];
  public ngOnInit() {}
}
