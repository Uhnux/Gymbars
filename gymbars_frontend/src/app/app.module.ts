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
import { NgbdModalBasic } from './components/modals/modal-basic/modal-basic';
import { ModalCarouselComponent } from './components/modals/modal-carousel/modal-carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { InfoComponent } from './components/info/info.component';
import { LocationComponent } from './components/location/location.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxImageZoomModule } from 'ngx-image-zoom';

//Firebase
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule, StorageBucket } from "@angular/fire/storage";
import { AngularFireModule } from "@angular/fire";
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    Page404Component,
    ProgramsComponent,
    EquipmentComponent,
    ScheduleComponent,
    NgbdModalBasic,
    FooterComponent,
    ContactComponent,
    InfoComponent,
    LocationComponent,
    ModalCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFirestoreModule,
    FormsModule,
    NgbModule,
    NgxPageScrollCoreModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    NgxImageZoomModule.forRoot()
  ],
  providers: [
    {provide: StorageBucket, useValue: 'gs://gymbarsgt.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
