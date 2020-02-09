import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  constructor(private storage: NativeStorage) {
    
   }

   public loadBookmarks(): Promise<any> {
    return new Promise((resolve) => {
      /*this.storage.keys().then(
         (data) => {
          resolve(data);
         },
         (error) => {
            console.log(error);
         },  
      );  */ resolve("ahoj");    
   });
   }

   public addBookmark(id: string): void {
    this.storage.setItem(id, id);
  }

  public deleteBookmark(id: string): void {
    this.storage.remove(id);
  }
}
