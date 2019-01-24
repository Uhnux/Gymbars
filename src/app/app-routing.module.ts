import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  //{ path: 'programs', component: ProgramsComponent },
  //{ path: 'equipment', component: EquipmentComponent },
  //{ path: 'schedule', component: ScheduleComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
