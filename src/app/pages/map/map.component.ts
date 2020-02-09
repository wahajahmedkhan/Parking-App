import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  map: google.maps.Map;

  lat = 24.8607;
  lng = 67.0011;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 12,
  };

  places = [
    {
      id: 1,
      name: 'Bahadurabad',
      description: 'Parking Around the Charminar',
      lat: '24.8823',
      long: '67.0673'
    },
    {
      id: 2,
      name: 'Dolmen mall clifton',
      description: 'Parking Outside the Mall',
      lat: '24.802505',
      long: '67.029456'
    },
    {
      id: 3,
      name: 'Burns Road',
      description: 'Parking around the famous food street',
      lat: '24.8554',
      long: '67.0174'
    }
  ];


  constructor() {
  }

  ngOnInit() {
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
  }


  ngAfterViewInit() {
    this.mapInitializer()
  }

  viewArea(area) {
    const point = new google.maps.LatLng(area.lat, area.long);
    this.map.setCenter(point);
    this.map.setZoom(16)
  }

}
