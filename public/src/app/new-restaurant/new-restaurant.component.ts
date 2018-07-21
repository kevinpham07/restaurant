import { Component, OnInit } from '@angular/core';

import { RestService } from './../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {
	Restaurant: any;
	errors: any;
  constructor( 
  	private _httpService: RestService,
  	private _router: Router
  ) { }

  ngOnInit() {
  	this.Restaurant = { name: "", cuisine: "" }
  }

  onSubmitFromService() {
  	this._httpService.onCreate(this.Restaurant).subscribe( (data: any) => {
  		if(data.errors) {
  			this.errors = data;
  		}
  		else {
  			this._router.navigate(['/restaurants']);
  		}
  	})
  }
}
