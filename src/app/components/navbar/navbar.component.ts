import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Scroll, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loc: Location, private router: Router) {
    router.events
      .pipe(filter(e => e instanceof Scroll || e instanceof NavigationEnd))
      .subscribe(e => {
        console.log(e);
      });
  }
  
  public app_name = "Gymbars";
  public home = "Inicio";
  public programs = "Programas";
  public equipment = "Equipamiento";
  public schedule = "Horario";
  public contact = "Contacto";

  ngOnInit() {
  }

  scrollToElement(element: any): void {
    console.log(element);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  irAContacto(): void{
    this.router.navigate(['/programs'], { fragment: 'contact_div' });
  }

  locationBack() {
    window.history.back();
  }

  locationBackAngular() {
    this.loc.back();
  }

}
