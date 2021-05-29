import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {
  bookmarked = [{img: '/assets/imgs/fillingStation.png', name: 'Water Filling Station ', address: 'Rowland Hall, Near First Floor Elevator', bookmark: true}, 
  {img: '/assets/imgs/restroom.png', name: 'Restroom ', address: 'Anteater Recreation Center	Room #104', bookmark: true}, 
  {img: '/assets/imgs/langsonLib.png', name: 'Langson Library', address: '23 W Peltason Dr, Irvine CA 92670', bookmark: true},
  {img: '/assets/imgs/PhoenixFoodCourt.png', name: 'Phoenix Food Court', address: 'Ring Rd, Irvine, CA 92697', bookmark: true},
  {img: '/assets/imgs/bikeParking.png', name: 'Bike Parking', address: 'Engineering Tower, Irvine, CA 92697',  bookmark: true}]
  constructor() { }

  ngOnInit() {
  }

  onClick(event: Event){
    let e = event.target as HTMLButtonElement;
    this.bookmarked[e.id].bookmark = false;
  }

}
