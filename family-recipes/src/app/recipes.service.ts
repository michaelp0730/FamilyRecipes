import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private http: HttpClient
  ) { }

  getRecipesByType(type: string): {} {
    return this.http.get(`/assets/${type}.json`);
  }
}
