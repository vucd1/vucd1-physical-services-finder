import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.page.html',
  styleUrls: ['./category-page.page.scss'],
})
export class CategoryPagePage implements OnInit {

  libs:any = [ {"img": '/assets/imgs/langsonLib.png', "name": 'Langson Library', "address": '23 W Peltason Dr, Irvine CA 92670',"dist":"320 ft","bookmark": true}
,{"img": '/assets/imgs/gscpic.png', "name": 'Gateway Study Center', "address": '23 W Peltason Dr, Irvine CA 92670',"dist":"330 ft", "bookmark": false}
,{"img": '/assets/imgs/scilibpic.png', "name": 'Science Library', "address": ' Loading Deck, Irvine CA 92617',"dist":"2640ft", "bookmark": false}
,{"img": '/assets/imgs/Lawlib.png', "name": 'Law Library', "address": '401 E Peltason Dr #2000, Irvine CA 92697',"dist":"3230 ft","bookmark": false}];
  
searchResults:any;
inputVal="";
show=false; 
resLen=0;

constructor(public popoverController: PopoverController) { }


  ngOnInit() {
    this.getResults();

    console.log(this.libs);
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
     console.log("INput value:",this.inputVal)
     console.log(this.searchResults);
     console.log("LEN",Object.keys(this.searchResults).length);
    

  }

}


