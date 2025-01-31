import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, copyArrayItem } from '@angular/cdk/drag-drop';
import { ReportData } from '../../model/report.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DetailCardsContainerComponent } from '../../container/detail-cards-container/detail-cards-container.component';
import { REPORT_FIELDS_CONFIG } from '../../config/report-fields.config';
import { MatIcon } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-saved-reports',
  imports: [
    CdkDrag,
    CdkDropList,
    MatExpansionModule,
    CdkAccordionModule,
    DetailCardsContainerComponent,
    MatIcon,
    AsyncPipe,
  ],
  templateUrl: './saved-reports.component.html',
  styleUrl: './saved-reports.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavedReportsComponent {
  protected savedReports: ReportData[] = [];
  protected savedReportsEnteredPredicate: (dragEvent: CdkDrag<ReportData>) => boolean = (dragEvent) => {
    return !this.savedReports.includes(dragEvent.data);
  };
  protected fwbDetailsConfig = REPORT_FIELDS_CONFIG.fwbDetails;
  protected dragEntered = signal<boolean>(false);

  protected drop(event: CdkDragDrop<ReportData[]>) {
    if (event.previousContainer !== event.container) {
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
