import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

/**
 * PUBLIC_INTERFACE
 * Dashboard landing showing quick stats and list preview.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [SharedModule]
})
export class DashboardComponent {
  stats = [
    { label: 'Active Projects', value: 24 },
    { label: 'Milestones Due', value: 12 },
    { label: 'Pending Payments', value: 8 },
    { label: 'Inspections Scheduled', value: 5 },
  ];

  columns = [
    { key: 'name', header: 'Project' },
    { key: 'status', header: 'Status' },
    { key: 'progress', header: 'Progress' },
  ];

  data = [
    { name: 'Heritage Walk Ayodhya', status: 'In Progress', progress: '60%' },
    { name: 'Varanasi Ghat Beautification', status: 'In Progress', progress: '45%' },
    { name: 'Lucknow Museum Upgrade', status: 'Planning', progress: '10%' },
  ];
}
