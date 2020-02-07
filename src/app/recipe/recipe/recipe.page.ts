import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  private recipeName: string="prazdne";

  constructor(private apiService: ApiService) {

   }

  ngOnInit() {
  }

  public getRecipe():void {
    this.apiService.getRecipeByName("").subscribe((data)=>{
      let receiveData: any = {};
      receiveData=data;
      this.recipeName=receiveData.drinks[0].strDrink});
  }

}
