import {GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, GoogleMapsMapTypeId, Marker, Environment} from '@ionic-native/google-maps';
import {Component} from '@angular/core';
// import {IONIC_DIRECTIVES, NavController, ViewController} from 'ionic-angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public map: GoogleMap;

  constructor() {}
  ionViewDidEnter() {
    this.loadMap();
  }
  loadMap() {
    // This code is necessary for browser
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyDTFtE9ZrBy4ZINlSgO2gl9ipOG8iJNdKw',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyDTFtE9ZrBy4ZINlSgO2gl9ipOG8iJNdKw',
    });

    let mapOptions: GoogleMapOptions = {
      mapType: GoogleMapsMapTypeId.ROADMAP,
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      },
      preferences: {
        zoom: {
          minZoom: 15,
          maxZoom: 16
        },
        padding: {
          left: 10,
          top: 10,
          bottom: 10,
          right: 10
        },
    
        building: true
      }

      
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802,
      },
    });
    let marker2: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.8809802,
      },
    });
    marker2.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      // alert('clicked');
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      // alert('clicked');
    });
  }
}
