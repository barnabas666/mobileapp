import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeItem } from 'src/app/home/recipeItem';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  private recipeName: string="prazdne";
  private recipe: RecipeItem = {strDrink: "", strDrinkThumb: "", idDrink: "", strInstructions: "",
  strIngredient1: "", strIngredient2: "", strIngredient3: "", strIngredient4: "", strIngredient5: "",
  strIngredient6: "", strIngredient7: "", strIngredient8: "", strIngredient9: "", strIngredient10: "",
  strIngredient11: "", strIngredient12: "", strIngredient13: "", strIngredient14: "", strIngredient15: ""};
  
  private id: string;

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {

   }

  ngOnInit() {  
  //  this.ionViewWillEnter();  
  }

  public clickedBack():void {
    this.router.navigate([""]);
  }

  ionViewWillEnter() {    
    this.id = this.route.snapshot.paramMap.get('id');    
    this.apiService.getRecipeById(this.id).toPromise().then((data)=>{
      let dataReceive: any = {};
      dataReceive = data;
      this.recipe=dataReceive.drinks[0];
      console.log(this.recipe);
    })
  }

}
