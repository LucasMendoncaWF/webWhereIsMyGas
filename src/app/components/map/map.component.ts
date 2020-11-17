import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: any;
  private maxZoom = 18;
  private minZoom = 8;
  private initialZoom = 12;
  private initialBounds: Array<Array<number>> = [
    [-23.304424, -47.000574],
    [-23.251441, -46.390426],
    [-23.883326, -46.437149],
    [-24.070907, -46.843506]
  ];
  private navWidth = -300;

  constructor(
    private requestService: RequestsService
  ) { }

  ngOnInit() {
    this.map = L.map('map', {
      zoom: this.initialZoom,
      maxZoom: this.maxZoom,
      minZoom: this.minZoom,
      zoomControl: false
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    this.map.fitBounds(this.initialBounds, { paddingTopLeft: [this.navWidth, 0] });

    this.getPoints();
  }

  async getPoints() {
    const markers =  await this.requestService.getInfoFromApi('posto').toPromise();
    for (const marker of markers['content']) {
      L.marker([marker.latitudePosto, marker.longitudePosto]).addTo(this.map);
    }
  }

}
