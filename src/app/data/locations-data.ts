import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
   
export class LocationsData {
    bookmarkedLocations:any
    constructor() {
        this.bookmarkedLocations = [
        {img: '/assets/imgs/fillingStation.png', name: 'Water Filling Station ', address: 'Rowland Hall, Near First Floor Elevator', bookmark: true}, 
        {img: '/assets/imgs/restroom.png', name: 'Restroom ', address: 'Anteater Recreation Center	Room #104', bookmark: true}, 
        {img: '/assets/imgs/PhoenixFoodCourt.png', name: 'Phoenix Food Court', address: 'Ring Rd, Irvine, CA 92697', bookmark: true},
        {img: '/assets/imgs/bikeParking.png', name: 'Bike Parking', address: 'Engineering Tower, Irvine, CA 92697',  bookmark: true},
        {img: '/assets/imgs/computerLab.png', name: 'Computer Lab', address: 'ET 201, Plaza Level Engineering Tower',  bookmark: true}]
	}

    public addToBookmarked(service:any){
        this.bookmarkedLocations.push(service);
    }

    public getBookmarkedLocations(){
        return this.bookmarkedLocations;
    }
}
