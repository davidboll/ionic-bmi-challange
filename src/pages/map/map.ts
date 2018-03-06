import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google; //tricking typescript =)

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  myPlaces = [
    {
      'name': 'Friends Arena',
      'lat': '59.3727031',
      'lng': '18.000231100000065'
    },
    {
      'name': 'Home',
      'lat': '59.3156866',
      'lng': '18.03843219999999'
    },
    {
      'name': 'Craft Academy, Stockholm',
      'lat': '59.34980649999999',
      'lng': '18.070664599999986'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let latLng = new google.maps.LatLng('59.3156866', '18.03843219999999');
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
    for (let place of this.myPlaces) {
      this.addMarker(place, place['name'])
    }
  }

  addMarker(posInfo, info) {
    let postition = new google.maps.LatLng(posInfo['lat'], posInfo['lng']);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: postition
    });
  }

}