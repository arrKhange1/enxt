import { ChangeDetectionStrategy, Component, input, computed } from '@angular/core';
import { ListItem } from '../../../../shared/model/list-item';
import { REPORT_FIELDS_CONFIG } from '../../../config/report-fields.config';
import { CardWithListComponent } from '../../../../shared/component/card-with-list/card-with-list.component';
import { FwbData } from '../../../model/report.model';

@Component({
  selector: 'app-agent-detail-card',
  imports: [CardWithListComponent],
  templateUrl: './agent-detail-card.component.html',
  styleUrl: './agent-detail-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentDetailCardComponent {
  private agentDetailsConfig = REPORT_FIELDS_CONFIG.agentDetails;
  public agentDetails = input<FwbData['agent_Details']>();

  /**
   * Данные для карточки
   * На основе agentDetails и конфига отображения имени полей из agentDetails
   * строится карточка с <отображаемое имя поля> - <данные в поле>
   * @protected
   */
  protected cardData = computed<ListItem[]>(() => {
    const agentDetails = this.agentDetails();
    return [
      { name: this.agentDetailsConfig.accountNumber, value: agentDetails?.Account_Number || 'None' },
      { name: this.agentDetailsConfig.iataCode, value: agentDetails?.IATA_Code || 'None' },
      { name: this.agentDetailsConfig.iataCassAddress, value: agentDetails?.IATA_CASS_Adress || 'None' },
      { name: this.agentDetailsConfig.participantId, value: agentDetails?.Participant_Identifier || 'None' },
      { name: this.agentDetailsConfig.name, value: agentDetails?.Name || 'None' },
      { name: this.agentDetailsConfig.place, value: agentDetails?.Place || 'None' },
    ];
  });
}
