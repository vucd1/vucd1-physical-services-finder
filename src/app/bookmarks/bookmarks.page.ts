import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { PopoverComponent } from '../popover/popover.component';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {
  bookmarked:any = [{img: '/assets/imgs/fillingStation.png', name: 'Water Filling Station ', address: 'Rowland Hall, Near First Floor Elevator', bookmark: true}, 
  {img: '/assets/imgs/restroom.png', name: 'Restroom ', address: 'Anteater Recreation Center	Room #104', bookmark: true}, 
  {img: '/assets/imgs/langsonLib.png', name: 'Langson Library', address: '23 W Peltason Dr, Irvine CA 92670', bookmark: true},
  {img: '/assets/imgs/PhoenixFoodCourt.png', name: 'Phoenix Food Court', address: 'Ring Rd, Irvine, CA 92697', bookmark: true},
  {img: '/assets/imgs/bikeParking.png', name: 'Bike Parking', address: 'Engineering Tower, Irvine, CA 92697',  bookmark: true}]
  bookmarkedcopy = this.bookmarked.slice()

  constructor(public popoverController: PopoverController,public alertController: AlertController) { 
    
  }
  

  ngOnInit() {
    
  }

  onClick(event: Event){
    let e = event.target as HTMLButtonElement;
    this.presentRemoveAlert(e)
    //this.bookmarked[e.id].bookmark = false;
    //this.bookmarkedcopy.pop((this.bookmarked)[e.id]);
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


  async presentRemoveAlert(e) {
    const alert = await this.alertController.create({
      header: 'Are you sure ',
      message: this.bookmarked[e.id].name + ' will deleted from your bookmarks',
      buttons: [{
        text: 'Yes',
        handler: () => {
          console.log('Confirm Ok');
          this.bookmarked[e.id].bookmark = false;
          this.bookmarkedcopy.pop((this.bookmarked)[e.id]);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }
    ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
