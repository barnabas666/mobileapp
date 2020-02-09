import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookmarksService } from 'src/app/storage/bookmarks.service';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public clickedBack():void {
    this.router.navigate([""]);
  }

  ionViewWillEnter() {      
    /*this.apiService.getRecipeById(this.id).toPromise().then((data)=>{
      let dataReceive: any = {};
      dataReceive = data;
      this.recipe=dataReceive.drinks[0];
      console.log(this.recipe.strIngredient1);
    })*/
    //console.log(this.storage.keys());
    /*this.bookmarks.loadBookmarks().then((data)=>{
      console.log(data);
    },(error)=>{
      console.log(error);
    })*/
  }
}
