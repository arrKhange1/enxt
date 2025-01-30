import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, copyArrayItem } from '@angular/cdk/drag-drop';
import { ReportData } from '../../model/report.model';

@Component({
  selector: 'app-saved-reports',
  imports: [CdkDrag, CdkDropList],
  templateUrl: './saved-reports.component.html',
  styleUrl: './saved-reports.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavedReportsComponent {
  protected savedReports: ReportData[] = [];
  protected savedReportsEntered: (dragEvent: CdkDrag<ReportData>) => boolean = (dragEvent) => {
    return !this.savedReports.includes(dragEvent.data);
  };

  drop(event: CdkDragDrop<ReportData[]>) {
    if (event.previousContainer !== event.container) {
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
