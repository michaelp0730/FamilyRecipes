import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipes-section',
  templateUrl: './recipes-section.component.html',
  styleUrls: ['./recipes-section.component.css']
})
export class RecipesSectionComponent implements OnInit {
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
