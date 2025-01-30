import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, copyArrayItem } from '@angular/cdk/drag-drop';
import { ReportData } from '../../model/report.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FwbDetailCardComponent } from '../detail-cards/fwb-detail-card/fwb-detail-card.component';
import { AgentDetailCardComponent } from '../detail-cards/agent-detail-card/agent-detail-card.component';
import { ConsigneeDetailCardComponent } from '../detail-cards/consignee-detail-card/consignee-detail-card.component';
import { ShipperDetailCardComponent } from '../detail-cards/shipper-detail-card/shipper-detail-card.component';

@Component({
  selector: 'app-saved-reports',
  imports: [
    CdkDrag,
    CdkDropList,
    MatExpansionModule,
    CdkAccordionModule,
    FwbDetailCardComponent,
    AgentDetailCardComponent,
    ConsigneeDetailCardComponent,
    ShipperDetailCardComponent,
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

  protected drop(event: CdkDragDrop<ReportData[]>) {
    if (event.previousContainer !== event.container) {
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
