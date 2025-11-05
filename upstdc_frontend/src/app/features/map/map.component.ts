import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * PUBLIC_INTERFACE
 * Leaflet Map component for geo-tagged progress, initializes only on client.
 */
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true
})
export class MapComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    // Client-only: use global Leaflet provided via CDN script (see index.html)
    // eslint-disable-next-line no-undef
    const L: any = (typeof window !== 'undefined' && (window as any).L) ? (window as any).L : null;
    if (!L) {
      console.warn('Leaflet global not found; map not initialized.');
      return;
    }

    const map = L.map('map', { center: [26.8467, 80.9462], zoom: 6 });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Example markers (to be fetched from backend later)
    const markers: Array<{lat: number; lng: number; label: string}> = [
      { lat: 26.8467, lng: 80.9462, label: 'Lucknow Project' },
      { lat: 25.3176, lng: 82.9739, label: 'Varanasi Project' },
      { lat: 26.7999, lng: 82.2043, label: 'Ayodhya Project' }
    ];

    markers.forEach(m => {
      L.marker([m.lat, m.lng]).addTo(map).bindPopup(m.label);
    });
  }
}
