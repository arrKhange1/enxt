import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-collapse-button',
  imports: [MatButton, MatIcon],
  templateUrl: './collapse-button.component.html',
  styleUrl: './collapse-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapseButtonComponent {
  public isCollapsed = input(true);
  public collapseEvent = output<boolean>();
}
