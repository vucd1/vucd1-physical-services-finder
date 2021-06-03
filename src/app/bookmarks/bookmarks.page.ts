import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { PopoverComponent } from '../popover/popover.component';
import { AlertController, } from '@ionic/angular';
import {LocationsData} from '../data/locations-data';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {
  bookmarked:any
  bookmarkedcopy:any
  noneBookmarked:boolean;


  
  constructor(public popoverController: PopoverController,public alertController: AlertController, locationsData: LocationsData) { 
    this.bookmarked = locationsData.getBookmarkedLocations();
    this.bookmarkedcopy = [];
    for (let i in this.bookmarked){
      console.log(this.bookmarked[i]);
      if (this.bookmarked[i].bookmark == true){
        this.bookmarkedcopy.push(this.bookmarked[i])
      }
    }
    console.log(this.bookmarkedcopy);
  }

  ngOnInit() {
    
  }

  onClick(event: Event){
    let e = event.target as HTMLButtonElement;
    this.presentRemoveAlert(e)
    // this.bookmarked[e.id].bookmark = false;
    // this.bookmarkedcopy.pop((this.bookmarked)[e.id]);
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
  }


  async presentRemoveAlert(e) {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: this.bookmarked[e.id].name + ' will deleted from your bookmarks',
      buttons: [{
        text: 'Yes',
        handler: () => {
          console.log('Confirm Ok');
          this.bookmarked[e.id].bookmark = false;
          
          this.bookmarkedcopy.pop((this.bookmarked)[e.id]);
          console.log(this.bookmarkedcopy);
          
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
  }
}

