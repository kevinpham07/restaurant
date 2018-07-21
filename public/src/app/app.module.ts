import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { FormsModule } from '@angular/forms';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { ReviewComponent } from './review/review.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { DeleteComponent } from './delete/delete.component';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    ReviewComponent,
    NewReviewComponent,
    DeleteComponent,
    NewRestaurantComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
