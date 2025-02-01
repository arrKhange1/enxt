import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AgentDetailCardComponent } from '../../component/detail-cards/agent-detail-card/agent-detail-card.component';
import { ConsigneeDetailCardComponent } from '../../component/detail-cards/consignee-detail-card/consignee-detail-card.component';
import { FwbDetailCardComponent } from '../../component/detail-cards/fwb-detail-card/fwb-detail-card.component';
import { ShipperDetailCardComponent } from '../../component/detail-cards/shipper-detail-card/shipper-detail-card.component';
import { FwbData } from '../../model/report.model';

@Component({
  selector: 'app-detail-cards-container',
  imports: [AgentDetailCardComponent, ConsigneeDetailCardComponent, FwbDetailCardComponent, ShipperDetailCardComponent],
  templateUrl: './detail-cards-container.component.html',
  styleUrl: './detail-cards-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailCardsContainerComponent {
  public fwbRow = input<FwbData>();
  public gridColumns = input<number>(2);
}
