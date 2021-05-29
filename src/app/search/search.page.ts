import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


declare var google: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  map: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  infoWindows: any = [];
  markers: any = [
    {
      title: "Social Science Hall (SSH)",
      latitude: "33.646479464261766",
      longitude: "-117.84011195587281"
    },
    {
      title: "Humanities Hall (HH)",
      latitude: "33.64749764421491",
      longitude: "-117.84404943855749"
    },
    {
      title: "McGaugh Hall (MH)",
      latitude: "33.64536302503278",
      longitude: "-117.84472535520361"
    },
    {
      title: "Langson Library",
      latitude: "33.64734581112628",
      longitude: "-117.8411204664242"
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }
  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
                              '<p>Latitude: ' + marker.latitude + '</p>' +
                              '<p>Longitude: ' + marker.longitude + '</p>' +
                            '</div>';
    let infoWindow = new google.maps.infoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  showMap() {
    const location = new google.maps.LatLng(33.64601498874652, -117.84279416485856);
    const options = {
      center: location,
      zoom: 17,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }
}

