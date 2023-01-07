import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

const routes:Routes = [
  
  {path:'', component:DashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},


]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthRoutingModule { }
