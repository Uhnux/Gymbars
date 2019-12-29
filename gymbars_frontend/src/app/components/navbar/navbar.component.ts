import { Component, OnInit, ElementRef, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Scroll, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loc: Location, private router: Router, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
  }

  // Text
  public app_name = "Gymbars";
  public nav_home = "Inicio";
  public nav_schedule = "Horario";
  public nav_info = "Información";
  public nav_contact = "Contacto";
  public nav_location = "Ubicación";
  public nav_more = "Más";
  public nav_programs = "Programas";
  public nav_equipment = "Equipamiento";

  // Navbar
  public div_home = "#divHome";
  public div_info = "#divInfo";
  public div_location = "#divLocation";
  public div_programs = "#divPrograms";

  //current_nav = "";

  ngOnInit() {
  }

  scrollToElement(element: any): void {
    //this.current_nav = element.id;
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: element,
    });
    /*let navElement1 = document.getElementById('nav_home');
    let navElement2 = document.getElementById('nav_info');
    let navElement3 = document.getElementById('nav_location');
    let navElement4 = document.getElementById('nav_programs');
    switch(this.current_nav){
      case this.div_home:
        navElement1.className = 'active';
        navElement2.className = '';
        navElement3.className = '';
        navElement4.className = '';
        break;
      case this.div_info:
        navElement1.className = '';
        navElement2.className = 'active';
        navElement3.className = '';
        navElement4.className = '';
        break;
      case this.div_location:
        navElement1.className = '';
        navElement2.className = '';
        navElement3.className = 'active';
        navElement4.className = '';
        break;
      case this.div_programs:
        navElement1.className = '';
        navElement2.className = '';
        navElement3.className = '';
        navElement4.className = 'active';
        break;
    }*/
  }

}
