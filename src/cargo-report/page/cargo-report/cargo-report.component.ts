import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReportTableComponent } from '../../component/report-table/report-table.component';
import { MatInput } from '@angular/material/input';
import { ReportUrlParamsDataService } from '../../store/report-url-params.data.service';
import { ReportUrlParamsBuilderService } from '../../service/report-url-params-builder.service';
import { ReportPaginatorComponent } from '../../component/report-paginator/report-paginator.component';
import { ReportTimeIntervalComponent } from '../../component/report-time-interval/report-time-interval.component';

@Component({
  selector: 'app-cargo-report',
  imports: [ReportTableComponent, MatInput, ReportPaginatorComponent, ReportTimeIntervalComponent],
  templateUrl: './cargo-report.component.html',
  styleUrl: './cargo-report.component.scss',
  providers: [ReportUrlParamsDataService, ReportUrlParamsBuilderService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CargoReportComponent {}
