import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { REPORT_FIELDS_CONFIG } from '../../../config/report-fields.config';
import { ListItem } from '../../../../shared/model/list-item';
import { CardWithListComponent } from '../../../../shared/component/card-with-list/card-with-list.component';
import { FwbData } from '../../../model/report.model';

@Component({
  selector: 'app-shipper-detail-card',
  imports: [CardWithListComponent],
  templateUrl: './shipper-detail-card.component.html',
  styleUrl: './shipper-detail-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipperDetailCardComponent {
  private shipperDetailsConfig = REPORT_FIELDS_CONFIG.shipperDetails;
  public shipperDetails = input<FwbData['shipper_Details']>();

  /**
   * Данные для карточки
   * На основе shipperDetails и конфига отображения имени полей из shipperDetails
   * строится карточка с <отображаемое имя поля> - <данные в поле>
   * @protected
   */
  protected cardData = computed<ListItem[]>(() => {
    const shipperDetails = this.shipperDetails();
    return [
      { name: this.shipperDetailsConfig.accountNumber, value: shipperDetails?.Account_Number || 'None' },
      { name: this.shipperDetailsConfig.name, value: shipperDetails?.Names || 'None' },
      { name: this.shipperDetailsConfig.address, value: shipperDetails?.Addresses || 'None' },
      { name: this.shipperDetailsConfig.place, value: shipperDetails?.Place || 'None' },
      { name: this.shipperDetailsConfig.state, value: shipperDetails?.State ?? 'None' },
      { name: this.shipperDetailsConfig.countryCode, value: shipperDetails?.Country_Code ?? 'None' },
      { name: this.shipperDetailsConfig.postCode, value: shipperDetails?.Post_Code || 'None' },
    ];
  });
}
