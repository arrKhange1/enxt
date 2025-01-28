import { Component, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ReportUrlParamsBuilderService } from '../../service/report-url-params-builder.service';
import { ReportUrlParamsDataService } from '../../store/report-url-params.data.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-reports-paginator',
  imports: [MatPaginator, AsyncPipe],
  templateUrl: './reports-paginator.component.html',
  styleUrl: './reports-paginator.component.scss',
})
export class ReportsPaginatorComponent {
  protected reportUrlParamsDataService = inject(ReportUrlParamsDataService);
  protected totalRecords$ = inject(ReportUrlParamsBuilderService).getParameterizedTotalRecords();
}
