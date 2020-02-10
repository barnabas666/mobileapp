import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeItem } from 'src/app/home/recipeItem';
import { BookmarksService } from 'src/app/storage/bookmarks.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  public recipeName: string="prazdne";
  public recipe: RecipeItem = {strDrink: "", strDrinkThumb: "", idDrink: "", strInstructions: "",
  strIngredient1: "", strIngredient2: "", strIngredient3: "", strIngredient4: "", strIngredient5: "",
  strIngredient6: "", strIngredient7: "", strIngredient8: "", strIngredient9: "", strIngredient10: "",
  strIngredient11: "", strIngredient12: "", strIngredient13: "", strIngredient14: "", strIngredient15: ""};
  
  public id: string;
  public isSaved: boolean = false;

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private bookmarks:BookmarksService) {
   }

  ngOnInit() {  
    this.ionViewWillEnter();  
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
    });
    this.isBookmark(this.id);
    console.log(this.isSaved);
  }
  public addBookmark(): void {
    this.bookmarks.addBookmark(this.id);    
  } 
  public deleteBookmark(): void {
    this.bookmarks.deleteBookmark(this.id);    
  }
  public isBookmark(id: string): void {
    let isBookmarkSaved = false;
    this.bookmarks.loadBookmarks().then((data)=>{      
      for (let dataId of data) {        
        if(id == dataId) {
          isBookmarkSaved = true;
        }
        console.log(isBookmarkSaved);
      }      
    },(error)=>{
      console.log(error);
    })  
    this.isSaved = isBookmarkSaved;
  }
  public bookmarkClicked(): void {
    this.isSaved = !this.isSaved;
    if(this.isSaved) {
      this.deleteBookmark();      
    } else {
      this.addBookmark();
    }
  }
}
