import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor( private _http: HttpClient ) {  
  }
  onCreate(restaurant) {
  	return this._http.post('/restaurant', restaurant)
  }
  getAll() {
  	return this._http.get('/restaurant')
  }
  getShow(id) {
  	return this._http.get('/restaurant/' + id)
  }
  onEdit(restaurant){
  	return this._http.put('/restaurant/' + restaurant._id +'/edit', restaurant)
  }
  onReview(review, id) {
    return this._http.post('/restaurant/' + id, review )
  }
  getDelete(id) {
    return this._http.delete('/restaurant/' + id +'/delete')
  }
}
