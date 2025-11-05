import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

/**
 PUBLIC_INTERFACE
 Dashboard layout with sidebar navigation and topbar.
*/
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css'],
  standalone: true,
  imports: [RouterLink, RouterOutlet]
})
export class DashboardLayoutComponent {}
