import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  // { path:"", component: NavBarComponent, pathMatch:'full' },
  { path: 'profile',component: ProfileComponent,canActivate: [AuthGuard] },
  { path: 'cal', component: FullcalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
