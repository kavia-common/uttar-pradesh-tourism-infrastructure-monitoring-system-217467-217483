import { Component, Input } from '@angular/core';

/**
 * PUBLIC_INTERFACE
 * Minimal reusable data table for listing entities.
 */
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  standalone: false
})
export class DataTableComponent {
  @Input() columns: { key: string; header: string }[] = [];
  @Input() data: any[] = [];
}
