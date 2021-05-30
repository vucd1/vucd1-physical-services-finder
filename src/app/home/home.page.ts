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
  allResults = [
    {"place":"Mesa Court Gym","category":"Gym","dist":"2.69 mi"},
    {"place":"Anteater Rec Center","category":"Gym","dist":"5 mi"},
    {"place":"Langson Library","category":"Library","dist":"6 mi"}];
  searchResults: any;
  inputVal="";
  show=false;
  resLen=0;

  constructor(public popoverController: PopoverController) {}
  ngOnInit() {

    this.getResults();
  }

  filterItems(val) {
    return this.allResults.filter(item => {
      this.resLen+=1
      return item.category.toLowerCase().indexOf(val.toLowerCase()) > -1;
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
     console.log("INput value:",this.inputVal)
     console.log(this.searchResults);
     console.log("LEN",Object.keys(this.searchResults).length);
    

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
