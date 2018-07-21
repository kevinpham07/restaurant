import { Component, OnInit } from '@angular/core';

import { RestService } from './../rest.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
	errors: any;
	id: any;
	reviews: any = [];
  constructor(
  	private _httpService: RestService,
  	private _route: ActivatedRoute,
  	private _router: Router

  	) { }

  ngOnInit() {
  	this._route.params.subscribe((params: Params) => this.id = (params['id']));
  	this.getShowFromService()
  }
  getShowFromService() {
  	this._httpService.getShow(this.id).subscribe((data:any) => {
  		this.reviews = data.reviews;
  	}) 
  }
}
