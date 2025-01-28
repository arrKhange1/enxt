import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CargoReportComponent } from '../cargo-report/page/cargo-report/cargo-report.component';

@Component({
  selector: 'app-root',
  imports: [CargoReportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'ENXT';
}
