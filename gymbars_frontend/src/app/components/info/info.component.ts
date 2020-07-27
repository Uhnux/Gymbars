import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScheduleI } from 'src/app/shared/models/schedule.interface';
import { Observable } from 'rxjs/internal/Observable';
import { ScheduleService } from './schedule.service';
import { window } from 'rxjs/operators';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public schedule$: Observable<ScheduleI[]>;
  scheduleText = 'Horario';
  weekdays = 'Lunes a Viernes';
  saturday = 'Sábado';
  sunday = 'Domingo';
  contact = 'Contacto';
  social_media = 'Redes Sociales';
  phone = 'Teléfono';
  phone_number = '4799-3217';
  facebook = 'GYMBARS';
  messenger = 'Messenger';
  instagram = 'g_y_m_b_a_r_s';
  whatsapp = 'Whatsapp';

  constructor(private scheduleSvc: ScheduleService) { }

  ngOnInit() {
    this.schedule$ = this.scheduleSvc.getSchedule();

  }

}
