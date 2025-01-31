import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReportTableComponent } from '../../component/report-table/report-table.component';
import { ReportUrlParamsDataService } from '../../store/report-url-params.data.service';
import { ReportUrlParamsBuilderService } from '../../service/report-url-params-builder.service';
import { ReportPaginatorComponent } from '../../component/report-paginator/report-paginator.component';
import { ReportTimeIntervalComponent } from '../../component/report-time-interval/report-time-interval.component';
import { ReportSortService } from '../../service/report-sort.service';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { SavedReportsComponent } from '../../component/saved-reports/saved-reports.component';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cargo-report',
  imports: [
    ReportTableComponent,
    ReportPaginatorComponent,
    ReportTimeIntervalComponent,
    CdkDropListGroup,
    SavedReportsComponent,
    MatButton,
    MatIcon,
    NgClass,
  ],
  templateUrl: './cargo-report.component.html',
  styleUrl: './cargo-report.component.scss',
  providers: [ReportUrlParamsDataService, ReportUrlParamsBuilderService, ReportSortService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CargoReportComponent {
  protected areSavedReportsVisible = signal(false);
}
