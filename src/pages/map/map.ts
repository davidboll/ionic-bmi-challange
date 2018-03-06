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
      'desc': 'Framåt stolta AIK',
      'lat': '59.3727031',
      'lng': '18.000231100000065'
    },
    {
      'name': 'Home',
      'desc': 'Home sweet home',
      'lat': '59.3156866',
      'lng': '18.03843219999999'
    },
    {
      'name': 'Craft Academy, Stockholm',
      'desc': 'Don\'t commit while drunk',
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
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
    for (let place of this.myPlaces) {
      this.addMarker(place, place['name'], place['desc']);
      //this.addMarker(place, place['desc']);
    }
  }

  addMarker(posInfo, info, desc) {
    let postition = new google.maps.LatLng(posInfo['lat'], posInfo['lng']);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: postition
    });
    let markerInfo = '<div style="text-align: center;"><b>' + info + '</b> <br> <i>"' + desc + '"</i></div>';
    this.addInfoWindow(marker, markerInfo);
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

}