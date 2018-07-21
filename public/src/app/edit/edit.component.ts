import { Component, OnInit } from '@angular/core';

import { RestService } from './../rest.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	id: any;
	errors: any;
	Restaurant: any;
  constructor(
  	private _httpService: RestService,
  	private _route: ActivatedRoute,
    private _router: Router
  	) { }

  ngOnInit() {
  	    this._route.params.subscribe((params: Params) => this.id = (params['id']));
  	    this.getShowFromService();

  	    
  }
  getShowFromService() {
  	this._httpService.getShow(this.id).subscribe( (data:any) => {
  		if(data.errors) {
  			this.errors = data;
  		}
  		else {
  			this.Restaurant = data;
  		}
  	})
  }
  onEditFromService() {
  	this._httpService.onEdit(this.Restaurant).subscribe( (data: any) => {
  		if(data.errors) {
  			this.errors = data;
  		}
  		else {
  			this._router.navigate(['/restaurants']);
  		}
  	})
  }

}
