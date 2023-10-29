import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css']
})
export class CocktailDetailComponent {
  cocktail: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
  ) { }

  ngOnInit() {
    const cocktailId = this.route.snapshot.paramMap.get('id') || '';
    this.api.searchById(cocktailId).subscribe((data: any) => {
      console.log(data);
      this.cocktail = data.drinks[0];
    });
  }
}
