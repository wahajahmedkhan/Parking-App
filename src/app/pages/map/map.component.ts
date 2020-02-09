import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ToastService} from "@shared/toast/toast-service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  @ViewChild('dangerTpl', {static: false}) danger;

  markers = [];
  map: google.maps.Map;

  lat = 24.8547;
  lng = 67.0435;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 12,
  };

  places = [
    {
      pid: 1,
      name: 'Bahadurabad',
      description: 'Parking Around the Charminar',
      lat: '24.8823',
      long: '67.0673',
    },
    {
      pid: 2,
      name: 'Dolmen mall clifton',
      description: 'Parking Outside the Mall',
      lat: '24.802505',
      long: '67.029456'
    },
    {
      pid: 3,
      name: 'Burns Road',
      description: 'Parking around the famous food street',
      lat: '24.8554',
      long: '67.0174'
    }
  ];

  slots = [
    {
      sid: 1,
      pid: 1,
      name: 'slot 1',
      lat: '24.8823',
      long: '67.0673',
      available: true

    },
    {
      sid: 2,
      pid: 1,
      name: 'slot 2',
      lat: '24.8817',
      long: '67.0667',
    },
    {
      sid: 3,
      pid: 1,
      name: 'slot 3',
      lat: '24.8829',
      long: '67.0679',
    },
    {
      sid: 4,
      pid: 2,
      name: 'slot 1',
      lat: '24.802505',
      long: '67.029456'
    },
    {
      sid: 5,
      pid: 3,
      name: 'slot 1',
      lat: '24.8554',
      long: '67.0174'
    }
  ];


  constructor(private notification: ToastService) {
  }

  ngOnInit() {
  }


  ngOnDestroy() {
    this.markers = [];
  }


  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.slots.forEach(item => {
      this.placeMarker(item);
    })

  }

  ngAfterViewInit() {
    this.mapInitializer()
  }

  placeMarker(location) {


    const color = location.available ? 'green' : 'red';

    const marker = new google.maps.Marker({
      position: {lat: Number(location.lat), lng: Number(location.long)},
      map: this.map,
      title: location.name,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/" + color + "-dot.png",
      },
    });

    marker.setMap(this.map);

    this.markers.push(marker.addListener('click', (e) => {
      this.markerClicked(e);
    }));
  }

  viewArea(area) {
    this.map.setZoom(13);
    setTimeout(() => {
      const point = new google.maps.LatLng(area.lat, area.long);
      this.map.panTo(point);
      setTimeout(() => {
        this.map.setZoom(16)
      }, 500);
    }, 700);

  }

  checkActive() {

  }

  markerClicked(event) {
    const location: any = this.slots.find(x => {
      if (x.lat === String(event.latLng.lat()) && x.long === String(event.latLng.lng())) {
        return true;
      }
    });
    if (location.available) {
      console.log(location);

    } else {
      console.log('danger');
      this.showDanger();

    }
  }

  showDanger() {
    this.notification.show(this.danger, {classname: 'bg-danger text-light', delay: 5000});
  }

}
