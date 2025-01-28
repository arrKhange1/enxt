import { Component } from '@angular/core';
import { ReportsTableComponent } from '../../component/reports-table/reports-table.component';
import { MatInput } from '@angular/material/input';
import { ReportUrlParamsDataService } from '../../store/report-url-params.data.service';
import { ReportUrlParamsBuilderService } from '../../service/report-url-params-builder.service';

@Component({
  selector: 'app-cargo-report',
  imports: [ReportsTableComponent, MatInput],
  templateUrl: './cargo-report.component.html',
  styleUrl: './cargo-report.component.scss',
  providers: [ReportUrlParamsDataService, ReportUrlParamsBuilderService],
})
export class CargoReportComponent {}
