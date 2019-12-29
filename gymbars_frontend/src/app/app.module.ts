import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { Page404Component } from './components/page404/page404.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { NgbdModalComponent, NgbdModalContent } from './components/modals/modal-component';
import { NgbdModalBasic } from './components/modals/modal-basic';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { InfoComponent } from './components/info/info.component';
import { LocationComponent } from './components/location/location.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    Page404Component,
    ProgramsComponent,
    EquipmentComponent,
    ScheduleComponent,
    NgbdModalComponent,
    NgbdModalContent,
    NgbdModalBasic,
    FooterComponent,
    ContactComponent,
    InfoComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgxPageScrollCoreModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
