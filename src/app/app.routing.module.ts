import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'cocktails', component: CocktailListComponent  }, // redirect to `first-component`
  { path: 'cocktails/:id', component: CocktailDetailComponent },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }