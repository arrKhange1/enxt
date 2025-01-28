import { Component } from '@angular/core';
import { ReportsTableComponent } from '../../component/reports-table/reports-table.component';
import { MatFormField, MatInput } from '@angular/material/input';
import { ReportUrlParamsDataService } from '../../store/report-url-params.data.service';

@Component({
  selector: 'app-cargo-report',
  imports: [ReportsTableComponent, MatInput, MatFormField],
  templateUrl: './cargo-report.component.html',
  styleUrl: './cargo-report.component.scss',
  providers: [ReportUrlParamsDataService],
})
export class CargoReportComponent {}
