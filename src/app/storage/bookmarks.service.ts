import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  constructor(private storage: Storage) {
    
   }

   public loadBookmarks(): Promise<any> {
    return new Promise((resolve) => {
      this.storage.keys().then(
         (data) => {
          resolve(data);
         },
         (error) => {
            console.log(error);
         },  
      );
   });
   }

   public addBookmark(id: string): void {
    this.storage.set(id, id);
  }

  public deleteBookmark(id: string): void {
    this.storage.remove(id);
  }
}
