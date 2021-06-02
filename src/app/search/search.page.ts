    import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

    declare var google: any;

    @Component({
      selector: 'app-search',
      templateUrl: './search.page.html',
      styleUrls: ['./search.page.scss'],
    })
    export class SearchPage implements OnInit {
      mapType: String;


      map: any;
      @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
      infoWindows: any = [];
      markers: any = [
        {
          title: "Building1",
          latitude: "33.646479464261766",
          longitude: "-117.84011195587281"
        }
      ];
      constructor() { 
        this.mapType = 'terrain'
      }

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
          disableDefaultUI: true,
          mapTypeId: 'terrain'
        }
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
      }
      changeMap() {
        if (this.mapType == 'terrain')
        {
          console.log('terrain')
          this.map.setMapTypeId('satellite');
          this.mapType = 'satellite';
        }

        else if (this.mapType == 'satellite')
        {
          console.log('satellite')
          this.map.setMapTypeId('terrain');
          this.mapType = 'terrain'

        }




        
      }



      
    }
