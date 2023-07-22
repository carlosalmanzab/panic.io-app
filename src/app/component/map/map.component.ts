import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild('map', { static: true }) mapRef!: ElementRef<HTMLElement>;
  newMap: GoogleMap | null = null;
  mapInitialized = false;

  ngOnInit() {
    if (!this.mapInitialized) {
      this.createMap();
      this.mapInitialized = true;
    }
  }

  ionViewWillEnter() {
    if (!this.mapInitialized) {
      this.createMap();
      this.mapInitialized = true;
    }
  }

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'mapa-reportes',
      element: this.mapRef.nativeElement,
      apiKey: environment.googleMapsApiKey,
      config: {
        center: {
          lat: 8.7559,
          lng: -75.8883,
        },
        zoom: 13.3,
        styles: environment.googleMapsStyles,
      },
    });
  }

  ngOnDestroy() {
    if (this.newMap) {
      this.newMap.destroy();
    }
  }
}
