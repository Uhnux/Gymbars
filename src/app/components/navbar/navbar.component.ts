import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  public app_name = "Gymbars";
  public home = "Inicio";
  public programs = "Programas";
  public equipment = "Equipamiento";
  public schedule = "Horario";
  public contact = "Contacto";
  ngOnInit() {
  }

}
