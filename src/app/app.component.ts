import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReportsTableComponent } from '../cargo-report/features/reports-table/reports-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReportsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ENXT';
}
