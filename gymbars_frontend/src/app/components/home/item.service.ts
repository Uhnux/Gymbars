import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemI } from '../../shared/models/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private afs: AngularFirestore) { }

  public getCarousel(): Observable<ItemI[]>{
    return this.afs.collection('carousel')
    .snapshotChanges()
    .pipe(
      map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as ItemI;
            const id = a.payload.doc.id;
            return { id, ... data };
          })
        )
    )
  }

  public getFeatures(): Observable<ItemI[]>{
    return this.afs.collection('feature')
    .snapshotChanges()
    .pipe(
      map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as ItemI;
            const id = a.payload.doc.id;
            return { id, ... data };
          })
        )
    )
  }
}
