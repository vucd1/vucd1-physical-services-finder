import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
   
export class LocationsData {
    bookmarkedLocations:any
    noBookmarks:boolean
    constructor() {
        this.bookmarkedLocations = [
        {number:1, img: '/assets/imgs/fillingStation.png', name: 'Water Filling Station ', address: 'Rowland Hall, Near First Floor Elevator', bookmark: true}, 
        {number:2, img: '/assets/imgs/restroom.png', name: 'Restroom ', address: 'Anteater Recreation Center	Room #104', bookmark: true}, 
        {number:3, img: '/assets/imgs/PhoenixFoodCourt.png', name: 'Phoenix Food Court', address: 'Ring Rd, Irvine, CA 92697', bookmark: true},
        {number:4, img: '/assets/imgs/bikeParking.png', name: 'Bike Parking', address: 'Engineering Tower, Irvine, CA 92697',  bookmark: true},
        {number:5, img: '/assets/imgs/computerLab.png', name: 'Computer Lab', address: 'ET 201, Plaza Level Engineering Tower',  bookmark: true},
        {number:6, category:'lib', "img": '/assets/imgs/langsonLib.png', "name": 'Langson Library', "address": '23 W Peltason Dr, Irvine CA 92670',"dist":320,"bookmark": false},
        {number:7, category:'lib',"img": '/assets/imgs/gscpic.png', "name": 'Grunigen Medical Library', "address": '101 The City Dr S, Orange, CA 92868',"dist":54330, "bookmark": false},
        {number:8, category:'lib',"img": '/assets/imgs/scilibpic.png', "name": 'Science Library', "address": ' Loading Deck, Irvine CA 92617',"dist":2640, "bookmark": false},
        {number:9, category:'lib',"img": '/assets/imgs/Lawlib.png', "name": 'Law Library', "address": '401 E Peltason Dr #2000, Irvine CA 92697',"dist":3230,"bookmark": false}
        ];
        this.noBookmarks = true;
	}

    public addToBookmarked(index:number){
        // console.log(this.bookmarkedLocations);
        this.bookmarkedLocations.forEach(element => {
            // console.log(element.number);
            if (element.number == index){
                element.bookmark=true;
            }
        });
        
    }

    public noneBookmarked(){
        for (var i in this.bookmarkedLocations) {
            if (this.bookmarkedLocations[i].bookmark === true) {
                this.noBookmarks = false;
                break;
            }
        }
        return this.noBookmarks;
    }
    public getBookmarkedLocations(){
        return this.bookmarkedLocations;
    }
}
