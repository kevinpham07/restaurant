import { Component, OnInit } from '@angular/core';

import { RestService } from './../rest.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
	id: any;
	Review: any;
	errors: any;
  constructor(
  	private _httpService: RestService,
  	private _route: ActivatedRoute,
  	private _router: Router

  	) { }

  ngOnInit() {
  	this._route.params.subscribe((params: Params) => this.id = (params['id']));
  	this.Review = { name: "", stars: "", review: ""};
  }
  onReviewFromService() {
  	this._httpService.onReview(this.Review, this.id).subscribe( (data:any) => {
  		if(data.errors) {
  			this.errors = data
  		}
  		else {
  			this._router.navigate(['/restaurants', this.id]);
  		}
  	})
  }

}
