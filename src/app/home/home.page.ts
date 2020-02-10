import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeItem } from './recipeItem';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public recipeItemArray: Array<RecipeItem>// = [{strDrink: "recipe", strDrinkThumb: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wpxpvu1439905379.jpg"}, {strDrink: "recipe2", strDrinkThumb: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wpxpvu1439905379.jpg"}]

  constructor(private router:Router, private apiService: ApiService) {}

  public recipe(recipe:RecipeItem):void{
    this.router.navigate(["recipe", recipe.idDrink]);
  }

  public searchByName(name: string):void {
    this.apiService.getRecipeByName(name).toPromise().then((data)=>{
      let receiveData: any = {};
      receiveData=data;
      
      this.recipeItemArray=receiveData.drinks});
  }
  openBookmarks() {
    this.router.navigate(["bookmarks"]);  
  }
}
