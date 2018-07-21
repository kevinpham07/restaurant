import { Component, OnInit } from '@angular/core';

import { RestService } from './../rest.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
	id: any;
	error: any;
  	constructor( 
  	
  	private _httpService: RestService,
  	private _route: ActivatedRoute,
  	private _router: Router

  	) {}
  ngOnInit() {
  	this._route.params.subscribe((params: Params) => {
  		this.id = params['id'];
  	});
  	this.getDeleteFromService();
  }
  getDeleteFromService() {
  	this._httpService.getDelete(this.id).subscribe( (data: any) => {
  		if(data.message) {
  			this.error = data
  		}
  		else {
  			this._router.navigate(['/restaurants'])
  		}
  	})
  }
}
