import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-tests-components',
  templateUrl: './content-tests-components.component.html',
  styleUrls: ['./content-tests-components.component.scss']
})
export class ContentTestsComponentsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
};
zoom = 4;
markerOptions: google.maps.MarkerOptions = {
    draggable: false
};
markerPositions: google.maps.LatLngLiteral[] = [];
addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
}
}
