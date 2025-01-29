import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { REPORT_FIELDS_CONFIG } from '../../../config/report-fields.config';
import { ReportData } from '../../../model/report.model';
import { ListItem } from '../../../../shared/model/list-item';
import { CardWithListComponent } from '../../../../shared/components/card-with-list/card-with-list.component';

@Component({
  selector: 'app-consignee-detail-card',
  imports: [CardWithListComponent],
  templateUrl: './consignee-detail-card.component.html',
  styleUrl: './consignee-detail-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsigneeDetailCardComponent {
  private consigneeDetailConfig = REPORT_FIELDS_CONFIG.consigneeDetails;
  public consigneeDetails = input<ReportData['consignee_Details']>();
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
