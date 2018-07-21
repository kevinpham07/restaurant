import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { ReviewComponent } from './review/review.component';
import { EditComponent } from './edit/edit.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { DeleteComponent } from './delete/delete.component';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';

const routes: Routes = [
	{ path: 'restaurants', component: RestaurantComponent },
	{ path: 'restaurants/new', component: NewRestaurantComponent },
	{ path: 'restaurants/:id', component: ReviewComponent },
	{ path: 'restaurants/:id/edit', component: EditComponent },
	{ path: 'restaurants/:id/new', component: NewReviewComponent },
	{ path: 'restaurants/:id/delete', component: DeleteComponent },

	{ path: '', pathMatch: 'full', redirectTo: '/restaurants' },	

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
