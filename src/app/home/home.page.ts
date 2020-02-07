import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeItem } from './recipeItem';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public recipeItemArray: Array<RecipeItem> = [{name: "recipe", imageUrl: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wpxpvu1439905379.jpg"}, {name: "recipe2", imageUrl: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wpxpvu1439905379.jpg"}]

  constructor(private router:Router) {}

  private recipe():void{this.router.navigate(["recipe"])}

}
