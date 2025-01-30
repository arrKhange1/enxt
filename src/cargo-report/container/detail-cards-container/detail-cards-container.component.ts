import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { ReportData } from '../../model/report.model';
import { AgentDetailCardComponent } from '../../component/detail-cards/agent-detail-card/agent-detail-card.component';
import { ConsigneeDetailCardComponent } from '../../component/detail-cards/consignee-detail-card/consignee-detail-card.component';
import { FwbDetailCardComponent } from '../../component/detail-cards/fwb-detail-card/fwb-detail-card.component';
import { ShipperDetailCardComponent } from '../../component/detail-cards/shipper-detail-card/shipper-detail-card.component';

@Component({
  selector: 'app-detail-cards-container',
  imports: [AgentDetailCardComponent, ConsigneeDetailCardComponent, FwbDetailCardComponent, ShipperDetailCardComponent],
  templateUrl: './detail-cards-container.component.html',
  styleUrl: './detail-cards-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailCardsContainerComponent {
  public fwbRow = input<ReportData>();
  public gridColumns = input<number>(2);
}
