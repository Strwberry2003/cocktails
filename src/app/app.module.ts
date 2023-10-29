import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { ApiService } from './_services/api.service';
import { DrinkService } from './_services/drink.service';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CocktailListComponent,
    CocktailDetailComponent
  ],
  providers: [
    ApiService,
    DrinkService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
