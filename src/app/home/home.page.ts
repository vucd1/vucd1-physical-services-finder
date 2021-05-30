import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  categories = ['Study Spaces', 'Computer Labs', 'Parking Structures', 'Parking Lots', 'Lecture Halls', 'Bike Ramps', 'Water Refill Stations']
  constructor(public popoverController: PopoverController) {}
  ngOnInit() {
  }
  
  async presentPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: event,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
