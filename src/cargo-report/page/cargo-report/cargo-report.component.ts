import { Component } from '@angular/core';
import { ReportsTableComponent } from '../../component/reports-table/reports-table.component';
import { MatFormField, MatInput } from '@angular/material/input';

@Component({
  selector: 'app-cargo-report',
  imports: [ReportsTableComponent, MatInput, MatFormField],
  templateUrl: './cargo-report.component.html',
  styleUrl: './cargo-report.component.scss',
})
export class CargoReportComponent {}
