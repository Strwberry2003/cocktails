import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DrinkService } from '../_services/drink.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
  public cocktails: any = [];
  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
    this.drinkService.getElencoDrinks('a').subscribe((data: any) => {
      console.log(data);
      this.cocktails = data.drinks;
    });
  }
}
