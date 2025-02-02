import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { REPORT_FIELDS_CONFIG } from '../../../config/report-fields.config';
import { ListItem } from '../../../../shared/model/list-item';
import { CardWithListComponent } from '../../../../shared/component/card-with-list/card-with-list.component';
import { FwbData } from '../../../model/report.model';

@Component({
  selector: 'app-consignee-detail-card',
  imports: [CardWithListComponent],
  templateUrl: './consignee-detail-card.component.html',
  styleUrl: './consignee-detail-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsigneeDetailCardComponent {
  private consigneeDetailConfig = REPORT_FIELDS_CONFIG.consigneeDetails;
  public consigneeDetails = input<FwbData['consignee_Details']>();

  /**
   * Данные для карточки
   * На основе consigneeDetails и конфига отображения имени полей из consigneeDetails
   * строится карточка с <отображаемое имя поля> - <данные в поле>
   * @protected
   */
  protected cardData = computed<ListItem[]>(() => {
    const consigneeDetails = this.consigneeDetails();
    return [
      { name: this.consigneeDetailConfig.accountNumber, value: consigneeDetails?.Account_Number || 'None' },
      { name: this.consigneeDetailConfig.name, value: consigneeDetails?.Names || 'None' },
      { name: this.consigneeDetailConfig.address, value: consigneeDetails?.Addresses || 'None' },
      { name: this.consigneeDetailConfig.place, value: consigneeDetails?.Place || 'None' },
      { name: this.consigneeDetailConfig.state, value: consigneeDetails?.State ?? 'None' },
      { name: this.consigneeDetailConfig.countryCode, value: consigneeDetails?.Country_Code ?? 'None' },
      { name: this.consigneeDetailConfig.postCode, value: consigneeDetails?.Post_Code || 'None' },
    ];
  });
}
