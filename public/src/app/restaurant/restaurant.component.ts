import { Component, OnInit } from '@angular/core';

import { RestService } from './../rest.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
	errors: any;
	restaurants: any = [];
  constructor(private _httpService: RestService) { }

  ngOnInit() {
  	this.getAllRestaurantsFromService();
  }
  getAllRestaurantsFromService() {
  	this._httpService.getAll().subscribe( data => {
  		this.restaurants = data
  	})
  }
}
