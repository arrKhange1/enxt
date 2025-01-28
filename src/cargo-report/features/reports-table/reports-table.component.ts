import { Component, OnInit } from '@angular/core';
import { MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatTable } from '@angular/material/table';

@Component({
  selector: 'app-reports-table',
  imports: [MatTable, MatColumnDef, MatHeaderCell, MatCell, MatCellDef, MatHeaderCellDef],
  templateUrl: './reports-table.component.html',
  styleUrl: './reports-table.component.scss',
})
export class ReportsTableComponent implements OnInit {
  ngOnInit() {}
}
