import { Component, OnInit } from '@angular/core';
import BreakfastJson from '../../assets/breakfast.json';
import SaladsJson from '../../assets/salads.json';
import SoupsJson from '../../assets/soups.json';
import EntreesJson from '../../assets/entrees.json';
import SidesJson from '../../assets/sides.json';
import DessertsJson from '../../assets/desserts.json';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  breakfastRecipes: any[] = [];
  saladRecipes: any[] = [];
  soupRecipes: any[] = [];
  entreeRecipes: any[] = [];
  sidesRecipes: any[] = [];
  dessertRecipes: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.breakfastRecipes = BreakfastJson;
    this.saladRecipes = SaladsJson;
    this.soupRecipes = SoupsJson;
    this.entreeRecipes = EntreesJson;
    this.sidesRecipes = SidesJson;
    this.dessertRecipes = DessertsJson;
  }
}
