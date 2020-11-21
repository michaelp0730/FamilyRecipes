import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  breakfastRecipes = {};
  saladRecipes = {};
  soupRecipes = {};
  entreeRecipes = {};
  sidesRecipes = {};
  dessertRecipes = {};

  constructor(
    private recipesService: RecipesService,
  ) { }

  ngOnInit(): void {
    this.breakfastRecipes = this.recipesService.getRecipesByType('breakfast');
    this.saladRecipes = this.recipesService.getRecipesByType('salads');
    this.soupRecipes = this.recipesService.getRecipesByType('soups');
    this.entreeRecipes = this.recipesService.getRecipesByType('entrees');
    this.sidesRecipes = this.recipesService.getRecipesByType('sides');
    this.dessertRecipes = this.recipesService.getRecipesByType('desserts');
  }
}
