import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-delete-button',
  imports: [MatIcon, MatIconButton],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteButtonComponent {
  public deleteEvent = output<MouseEvent>();
}
