import { Component } from '@angular/core';
import { ReportsTableComponent } from '../../component/reports-table/reports-table.component';
import { MatInput } from '@angular/material/input';
import { ReportUrlParamsDataService } from '../../store/report-url-params.data.service';
import { ReportUrlParamsBuilderService } from '../../service/report-url-params-builder.service';
import { ReportsPaginatorComponent } from '../../component/reports-paginator/reports-paginator.component';
import { ReportsTimeIntervalComponent } from '../../component/reports-time-interval/reports-time-interval.component';

@Component({
  selector: 'app-cargo-report',
  imports: [ReportsTableComponent, MatInput, ReportsPaginatorComponent, ReportsTimeIntervalComponent],
  templateUrl: './cargo-report.component.html',
  styleUrl: './cargo-report.component.scss',
  providers: [ReportUrlParamsDataService, ReportUrlParamsBuilderService],
})
export class CargoReportComponent {}
