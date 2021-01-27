import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DasboardComponent} from './dasboard/dasboard.component';
import {ChangepassComponent} from  './changepass/changepass.component';
const routes: Routes = [
  {
    path : '',
    component : DasboardComponent
  },
  {
    path : 'dashboard',
    component : DasboardComponent
  },
  {
    path : 'changepass',
    component : ChangepassComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
