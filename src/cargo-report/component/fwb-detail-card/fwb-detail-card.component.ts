import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { ListItem } from '../../../shared/model/list-item';
import { REPORT_FIELDS_CONFIG } from '../../config/report-fields.config';
import { ReportData } from '../../model/report.model';
import { CardWithListComponent } from '../../../shared/components/card-with-list/card-with-list.component';

@Component({
  selector: 'app-fwb-detail-card',
  imports: [CardWithListComponent],
  templateUrl: './fwb-detail-card.component.html',
  styleUrl: './fwb-detail-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FwbDetailCardComponent implements OnInit {
  public fwbDetails = input<ReportData['fWB_Details']>();
  protected cardData = signal<ListItem[]>([]);
  private reportFields = REPORT_FIELDS_CONFIG;

  public ngOnInit() {
    const fwbDetails = this.fwbDetails();
    this.cardData.set([
      { name: this.reportFields.fwbDetails.prefix, value: fwbDetails?.AWB_Prefix ?? 'None' },
      { name: this.reportFields.fwbDetails.serial, value: fwbDetails?.AWB_Serial ?? 'None' },
      { name: this.reportFields.fwbDetails.origin, value: fwbDetails?.AWB_Origin ?? 'None' },
      { name: this.reportFields.fwbDetails.destination, value: fwbDetails?.AWB_Destination ?? 'None' },
      { name: this.reportFields.fwbDetails.pieces, value: fwbDetails?.Pieces ?? 'None' },
      { name: this.reportFields.fwbDetails.weight, value: fwbDetails?.Weight_Actual ?? 'None' },
      { name: this.reportFields.fwbDetails.weightId, value: fwbDetails?.Weight_Identifier ?? 'None' },
      { name: this.reportFields.fwbDetails.volume, value: fwbDetails?.Volume ?? 'None' },
      { name: this.reportFields.fwbDetails.volumeId, value: fwbDetails?.Volume_Identifier ?? 'None' },
    ]);
  }
}
