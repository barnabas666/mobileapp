import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookmarksService } from 'src/app/storage/bookmarks.service';
import { RecipeItem } from 'src/app/home/recipeItem';
import { ApiService } from 'src/app/api/api.service';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {

  public recipeItemArray: Array<RecipeItem>

  constructor(private router:Router, private bookmarks:BookmarksService, private apiService:ApiService) { }

  ngOnInit() {
  }

  public clickedBack():void {
    this.router.navigate([""]);
  }

  ionViewWillEnter() {   
    this.bookmarks.loadBookmarks().then((data)=>{
      let array = [];
      for (let id of data) {        
        this.apiService.getRecipeById(id).toPromise().then((data)=>{
          let dataReceive: any = {};
          dataReceive = data;                
        array.push(dataReceive.drinks[0]);
        })
      }    
    this.recipeItemArray = array;
    },(error)=>{
      console.log(error);
    });
  }
  private recipe(recipe:RecipeItem):void{
    this.router.navigate(["recipe", recipe.idDrink]);
  }
}
