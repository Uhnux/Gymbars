import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProgramI } from '../../shared/models/program.interface';
import { ItemI } from 'src/app/shared/models/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private afs: AngularFirestore) { }

  public getPrograms(): Observable<ItemI[]>{
    let items: Observable<ItemI[]>;
    return this.afs.collection('programs')
    .snapshotChanges()
    .pipe(
      map(actions =>
          actions.map(a => {
            let item: ItemI = {id: '', title: '', description: '<h4>Ejercicios</h4><li>', img: ''};
            const data = a.payload.doc.data() as ProgramI;
            const id = a.payload.doc.id;
            item.id = data.id;
            item.title = data.title;
            item.img = data.img;
            let exercises: Array<string> = data.exercises;
            let instructions: Array<string> = data.instructions;
            let str1 = exercises.join('</li><li>');
            str1 += '</li>';
            let str2 = instructions.join('</li><li>');
            str2 += '</li>';
            item.description += str1;
            item.description += '</br><h4>Instrucciones</h4><li>'
            item.description += str2;
            return { id, ... item};
            /*
            const data = a.payload.doc.data() as ItemI;
            const id = a.payload.doc.id;
            return {id, ... data}
            */
          })
        )
    )
  }
}
