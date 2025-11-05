import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

/**
 * PUBLIC_INTERFACE
 * Reports page showing placeholder data to be replaced with real analytics.
 */
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  standalone: true,
  imports: [SharedModule]
})
export class ReportsComponent {
  columns = [
    { key: 'name', header: 'Report' },
    { key: 'generatedOn', header: 'Generated On' }
  ];

  data = [
    { name: 'Monthly Progress', generatedOn: '2025-03-01' },
    { name: 'Budget Utilization', generatedOn: '2025-03-15' }
  ];
}
