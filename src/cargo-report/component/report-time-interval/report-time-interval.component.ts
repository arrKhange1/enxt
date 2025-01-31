import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { ReportUrlParamsDataService } from '../../store/report-url-params.data.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-report-time-interval',
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButton,
    MatTooltip,
    AsyncPipe,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './report-time-interval.component.html',
  styleUrl: './report-time-interval.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportTimeIntervalComponent {
  private reportUrlParamsDataService = inject(ReportUrlParamsDataService);

  protected timeIntervalForm = new FormGroup({
    from: new FormControl<Date | null>(null),
    until: new FormControl<Date | null>(null),
  });

  protected submitInterval() {
    const { from, until } = this.timeIntervalForm.value;
    this.reportUrlParamsDataService.changeTimeInterval({
      from: from?.toISOString() ?? null,
      until: until?.toISOString() ?? null,
    });
  }
}
