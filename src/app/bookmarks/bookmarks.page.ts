import { Component, OnInit } from '@angular/core';

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
  allFalse:boolean = true;
  bookmarkedcopy = this.bookmarked.slice()

  constructor() { 
    
  }
  

  ngOnInit() {
    
  }

  onClick(event: Event){
    let e = event.target as HTMLButtonElement;
    this.bookmarked[e.id].bookmark = false;
    console.log(e.id)
    
    this.bookmarkedcopy.pop((this.bookmarked)[e.id]);
    console.log(this.bookmarkedcopy);
    // this.bookmarked.forEach(bookmark => {
    //   if(bookmark.bookmark == true){
    //     this.allFalse = false;
    //   }
    // });
    // // if (this.allFalse == true){
    // //   console.log('No bookmarks');
    // // }
    // console.log(this.allFalse);
  }
  
  
}
