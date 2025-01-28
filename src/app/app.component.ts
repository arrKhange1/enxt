import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReportsTableComponent } from '../cargo-report/component/reports-table/reports-table.component';
import { CargoReportComponent } from '../cargo-report/page/cargo-report/cargo-report.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReportsTableComponent, CargoReportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ENXT';
}
