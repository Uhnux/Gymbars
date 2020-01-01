import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScheduleI } from '../../shared/models/schedule.interface'

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private afs: AngularFirestore) { }

  public getSchedule(): Observable<ScheduleI[]>{
    return this.afs.collection('schedule')
    .snapshotChanges()
    .pipe(
      map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as ScheduleI;
            const id = a.payload.doc.id;
            return { id, ... data };
          })
        )
    )
  }
}
