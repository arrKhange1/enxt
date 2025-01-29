import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReportUrlParamsBuilderService } from '../../service/report-url-params-builder.service';
import { MatSortModule, Sort } from '@angular/material/sort';
import { ReportUrlParamsDataService } from '../../store/report-url-params.data.service';
import { ReportSortUrlParams } from '../../model/report.model';

@Component({
  selector: 'app-reports-table',
  imports: [MatTableModule, MatSortModule],
  templateUrl: './reports-table.component.html',
  styleUrl: './reports-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsTableComponent {
  private reportParamsBuilderService = inject(ReportUrlParamsBuilderService);
  public reportData = toSignal(this.reportParamsBuilderService.getParameterizedFwbData(), { initialValue: [] });
  public columnsToDisplay = ['prefix', 'serial', 'origin', 'destination', 'act_weight', 'unit'];

  private reportUrlDataService = inject(ReportUrlParamsDataService);
  sortChange({ active, direction }: Sort) {
    console.log(active, direction);
    if (!direction) {
      this.reportUrlDataService.changeSortParams({
        sortOrder: null,
        sortName: null,
      });
    } else {
      this.reportUrlDataService.changeSortParams({
        sortOrder: direction,
        sortName: active as ReportSortUrlParams['sortName'],
      });
    }
  }
}
