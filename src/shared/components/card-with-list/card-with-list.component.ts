import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatList, MatListItem, MatListModule } from '@angular/material/list';
import { ListItem } from '../../model/list-item';

@Component({
  selector: 'app-card-with-list',
  imports: [MatListModule, MatCardModule],
  templateUrl: './card-with-list.component.html',
  styleUrl: './card-with-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardWithListComponent {
  public data = input<ListItem[]>([]);
}
