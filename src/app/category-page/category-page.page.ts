import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { BookmarksPage } from '../bookmarks/bookmarks.page';
import { AlertController,ToastController  } from '@ionic/angular';
import {LocationsData} from '../data/locations-data';


@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.page.html',
  styleUrls: ['./category-page.page.scss'],
})
export class CategoryPagePage implements OnInit {

  libs:any = [ {'number':6, "img": '/assets/imgs/langsonLib.png', "name": 'Langson Library', "address": '23 W Peltason Dr, Irvine CA 92670',"dist":320,"bookmark": false}
,{'number':7, "img": '/assets/imgs/gscpic.png', "name": 'Grunigen Medical Library', "address": '101 The City Dr S, Orange, CA 92868',"dist":54330, "bookmark": false}
,{'number':8, "img": '/assets/imgs/scilibpic.png', "name": 'Science Library', "address": ' Loading Deck, Irvine CA 92617',"dist":2640, "bookmark": false}
,{'number':9, "img": '/assets/imgs/Lawlib.png', "name": 'Law Library', "address": '401 E Peltason Dr #2000, Irvine CA 92697',"dist":3230,"bookmark": false}];
  
searchResults:any;
inputVal="";
show=false; 
resLen=0;
sortOP="2";

constructor(public popoverController: PopoverController,public alertController: AlertController,public toastController: ToastController, public locationsData: LocationsData) { }

  ngOnInit() {
    this.libs = this.locationsData.getBookmarkedLocations();
    this.getResults();
    this.changeSort();

    // console.log(this.libs);
  }

  
  onClick(event: Event){
    let e = event.target as HTMLButtonElement;
    if (this.libs[e.id].bookmark== true){
      //this.libs[e.id].bookmark = false;
      this.presentRemoveAlert(this.libs[e.id].name,e);
     
    }
    else{
      this.libs[e.id].bookmark = true;
      //this.presentAlert(this.libs[e.id].name);
      this.presentToast(this.libs[e.id].name);
      // console.log(this.libs[e.id]);
      this.locationsData.addToBookmarked(this.libs[e.id].number);      
      // console.log(this.locationsData.getBookmarkedLocations());
    }
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
    // console.log('onDidDismiss resolved with role', role);
  }

  filterItems(val) {
    return this.libs.filter(item => {
      this.resLen+=1
      return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
    });
  }
  getResults(){
    if(this.inputVal==""){
      this.show=false;
    }
    else{
      this.show=true
    }
     this.searchResults=this.filterItems(this.inputVal);
      if(Object.keys(this.searchResults).length<1){
        this.searchResults=[{"place":"No Results Found"}]
      }
    //  console.log("INput value:",this.inputVal)
    //  console.log(this.searchResults);
    //  console.log("LEN",Object.keys(this.searchResults).length);
    
  }

  changeSort()
  {
    // console.log("entered change sort")
    if(this.sortOP=="2"){

      this.libs=this.libs.sort((obj1, obj2) => {
        if (obj1.dist > obj2.dist) {
            return 1;
        }
    
        if (obj1.dist < obj2.dist) {
            return -1;
        }
    
        return 0;
    });
    }
    else{
     this.libs=this.libs.sort((obj1, obj2) => {
      if (obj1.name > obj2.name) {
          return 1;
      }
  
      if (obj1.name < obj2.name) {
          return -1;
      }
  
      return 0;
  });
    // console.log("after sort",this.libs);
  }


    /** this.sample.data.sort(function(first, second) {
                return (first.tedad - second.tedad);
            });
            console.log(this.sample); */

  }

  getLib(place: String){
    this.locationsData.setServiceOnSearch();
    this.locationsData.setChosenService(place);
    this.locationsData.setChosenServicename();
    // console.log(this.locationsData.getChosenService());
    // console.log(this.locationsData.getServiceName());
    // console.log(this.locationsData.getServiceOnSearch());
    
  }


  async presentAlert(place : String) {
    const alert = await this.alertController.create({
      header: 'Success ',
      message: place + ' added to bookmarks',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentToast(place:string) {
    const toast = await this.toastController.create({
      header: 'Success',
      message: place+' was added to your bookmarks',
      position: 'top',
      color:"dark",
      buttons: [
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }







  async presentRemoveAlert(place : String,e) {
    const alert = await this.alertController.create({
      header: 'Are you sure? ',
      message: place + ' will deleted from your bookmarks',
      buttons: [{
        text: 'Yes',
        cssClass: 'primary',
        handler: () => {
          console.log('Confirm Ok');
          this.libs[e.id].bookmark = false;

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


