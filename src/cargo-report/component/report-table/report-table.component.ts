import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReportUrlParamsBuilderService } from '../../service/report-url-params-builder.service';
import { MatSortModule, Sort } from '@angular/material/sort';
import { ReportSortService } from '../../service/report-sort.service';
import { ReportSortUrlParams } from '../../model/report.model';

@Component({
  selector: 'app-report-table',
  imports: [MatTableModule, MatSortModule],
  templateUrl: './report-table.component.html',
  styleUrl: './report-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportTableComponent {
  private reportSortService = inject(ReportSortService);
  private reportParamsBuilderService = inject(ReportUrlParamsBuilderService);
  public reportData = toSignal(this.reportParamsBuilderService.getParameterizedFwbData(), { initialValue: [] });
  public columnsToDisplay = ['prefix', 'serial', 'origin', 'destination', 'act_weight', 'unit'];

  protected sortChange({ active, direction }: Sort): void {
    const changedSortOrder = direction === '' ? null : direction;
    const changedSortName = active as ReportSortUrlParams['sortName'];
    this.reportSortService.sortReport({ sortName: changedSortName, sortOrder: changedSortOrder });
  }
}
