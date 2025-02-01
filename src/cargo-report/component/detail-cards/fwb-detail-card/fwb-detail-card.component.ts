import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ListItem } from '../../../../shared/model/list-item';
import { REPORT_FIELDS_CONFIG } from '../../../config/report-fields.config';
import { CardWithListComponent } from '../../../../shared/component/card-with-list/card-with-list.component';
import { FwbData } from '../../../model/report.model';

@Component({
  selector: 'app-fwb-detail-card',
  imports: [CardWithListComponent],
  templateUrl: './fwb-detail-card.component.html',
  styleUrl: './fwb-detail-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FwbDetailCardComponent {
  private reportFields = REPORT_FIELDS_CONFIG;
  public fwbDetails = input<FwbData['fWB_Details']>();

  /**
   * Данные для карточки
   * На основе fwbDetails и конфига отображения имени полей из fwbDetails
   * строится карточка с <отображаемое имя поля> - <данные в поле>
   * @protected
   */
  protected cardData = computed<ListItem[]>(() => {
    const fwbDetails = this.fwbDetails();
    return [
      { name: this.reportFields.fwbDetails.prefix, value: fwbDetails?.AWB_Prefix || 'None' },
      { name: this.reportFields.fwbDetails.serial, value: fwbDetails?.AWB_Serial || 'None' },
      { name: this.reportFields.fwbDetails.origin, value: fwbDetails?.AWB_Origin || 'None' },
      { name: this.reportFields.fwbDetails.destination, value: fwbDetails?.AWB_Destination || 'None' },
      { name: this.reportFields.fwbDetails.pieces, value: fwbDetails?.Pieces ?? 'None' },
      { name: this.reportFields.fwbDetails.weight, value: fwbDetails?.Weight_Actual ?? 'None' },
      { name: this.reportFields.fwbDetails.weightId, value: fwbDetails?.Weight_Identifier || 'None' },
      { name: this.reportFields.fwbDetails.volume, value: fwbDetails?.Volume ?? 'None' },
      { name: this.reportFields.fwbDetails.volumeId, value: fwbDetails?.Volume_Identifier || 'None' },
    ];
  });
}
