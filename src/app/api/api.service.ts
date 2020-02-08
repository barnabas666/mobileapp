import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeItem } from '../home/recipeItem';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 // public recipeItem: RecipeItem = {strDrink: "recipe", strDrinkThumb: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wpxpvu1439905379.jpg"};
 

  constructor(private http: HttpClient) { }


  public getRecipeByName(name: string): Observable<Object> {

    console.log('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name);
     return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name);
  } 

  public getRecipeById(name: string): Observable<Object> {

    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + name);
 }
 
}
