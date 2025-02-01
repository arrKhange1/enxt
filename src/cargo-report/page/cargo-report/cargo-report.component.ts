import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReportTableComponent } from '../../component/report-table/report-table.component';
import { ReportUrlParamsDataService } from '../../store/report-url-params.data.service';
import { ParameterizedReportService } from '../../service/parameterized-report.service';
import { ReportPaginatorComponent } from '../../component/report-paginator/report-paginator.component';
import { ReportTimeIntervalComponent } from '../../component/report-time-interval/report-time-interval.component';
import { ReportSortService } from '../../service/report-sort.service';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { SavedReportsComponent } from '../../component/saved-reports/saved-reports.component';
import { NgClass } from '@angular/common';
import { CollapseButtonComponent } from '../../../shared/component/collapse-button/collapse-button.component';

@Component({
  selector: 'app-cargo-report',
  imports: [
    ReportTableComponent,
    ReportPaginatorComponent,
    ReportTimeIntervalComponent,
    CdkDropListGroup,
    SavedReportsComponent,
    NgClass,
    CollapseButtonComponent,
  ],
  templateUrl: './cargo-report.component.html',
  styleUrl: './cargo-report.component.scss',
  providers: [ReportUrlParamsDataService, ParameterizedReportService, ReportSortService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CargoReportComponent {
  protected areSavedReportsVisible = signal(false);
}
