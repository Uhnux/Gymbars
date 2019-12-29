import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', redirectTo: '/home', pathMatch: 'full' },
  /*{ path: 'programs', redirectTo: '/programs', pathMatch: 'full' },
  { path: 'equipment', redirectTo: '/equipment', pathMatch: 'full' },
  { path: 'schedule', redirectTo: '/schedule', pathMatch: 'full' },
  { path: 'contact', redirectTo: '/contact', pathMatch: 'full' },*/
  { path: 'home', component: HomeComponent },
  /*{ path: 'programs', component: ProgramsComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'contact', component: ContactComponent },*/
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64] // [x, y]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
