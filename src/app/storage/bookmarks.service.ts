import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  constructor(private storage: NativeStorage) {
    //this.storage.setItem('token', token);
   }
}
