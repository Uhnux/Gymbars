import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  title = 'Ubicación';
  description = '';

  constructor() { }

  ngOnInit() {
    this.description += '<p class="font-weight-bold">1ra. Avenida 7-35 zona 3</p>';
    this.description += '<p>Palín - Escuintla</p>';
    this.description += '<p class="font-italic">A una cuadra del calvario</p>';
  }

}
