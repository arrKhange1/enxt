import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, copyArrayItem } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DetailCardsContainerComponent } from '../../container/detail-cards-container/detail-cards-container.component';
import { REPORT_FIELDS_CONFIG } from '../../config/report-fields.config';
import { MatIcon } from '@angular/material/icon';
import { DeleteButtonComponent } from '../../../shared/component/delete-button/delete-button.component';
import { FwbData } from '../../model/report.model';

@Component({
  selector: 'app-saved-reports',
  imports: [
    CdkDrag,
    CdkDropList,
    MatExpansionModule,
    CdkAccordionModule,
    DetailCardsContainerComponent,
    MatIcon,
    DeleteButtonComponent,
  ],
  templateUrl: './saved-reports.component.html',
  styleUrl: './saved-reports.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavedReportsComponent {
  protected savedReports = signal<FwbData[]>([]);
  protected savedReportsEnteredPredicate: (dragEvent: CdkDrag<FwbData>) => boolean = (dragEvent) => {
    return !this.savedReports().includes(dragEvent.data);
  };
  protected fwbDetailsConfig = REPORT_FIELDS_CONFIG.fwbDetails;
  protected dragEntered = signal<boolean>(false);

  protected drop(event: CdkDragDrop<FwbData[]>) {
    this.dragEntered.set(false);
    if (event.previousContainer !== event.container) {
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  protected deleteSavedReport(deleteEvent: MouseEvent, savedReport: FwbData) {
    deleteEvent.stopPropagation();
    this.savedReports.update((reports) => reports.filter((report) => report !== savedReport));
  }
}
