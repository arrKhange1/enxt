import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReportTableComponent } from '../../component/report-table/report-table.component';
import { ReportUrlParamsDataService } from '../../store/report-url-params.data.service';
import { ReportUrlParamsBuilderService } from '../../service/report-url-params-builder.service';
import { ReportPaginatorComponent } from '../../component/report-paginator/report-paginator.component';
import { ReportTimeIntervalComponent } from '../../component/report-time-interval/report-time-interval.component';
import { ReportSortService } from '../../service/report-sort.service';
import { ReportData } from '../../model/report.model';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cargo-report',
  imports: [
    ReportTableComponent,
    ReportPaginatorComponent,
    ReportTimeIntervalComponent,
    CdkDropList,
    CdkDropListGroup,
    CdkDrag,
  ],
  templateUrl: './cargo-report.component.html',
  styleUrl: './cargo-report.component.scss',
  providers: [ReportUrlParamsDataService, ReportUrlParamsBuilderService, ReportSortService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CargoReportComponent {
  protected savedReports: ReportData[] = [];

  drop(event: CdkDragDrop<ReportData[]>) {
    if (event.previousContainer !== event.container) {
      console.log(event.previousIndex, event.currentIndex);
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
