import { Component, ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  categories = ['Study Spaces', 'Computer Labs', 'Parking Structures', 'Parking Lots', 'Lecture Halls', 'Bike Ramps', 'Water Refill Stations']
  constructor() {}
  ngOnInit() {
  }
}
