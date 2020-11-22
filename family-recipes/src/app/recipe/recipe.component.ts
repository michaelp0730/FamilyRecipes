import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() type: string;
  recipes: any = [];

  constructor(
    private httpClient: HttpClient,
  ) {
    this.type = '';
  }

  ngOnInit(): void {
    this.httpClient.get(`assets/${this.type}.json`).subscribe(data => {
      this.recipes = data;
      this.sortRecipes(this.recipes);
    });
  }

  sortRecipes(recipesCollection: any[]): void {
    recipesCollection.sort((a, b) => a.title > b.title ? 1 : -1);
  }
}
