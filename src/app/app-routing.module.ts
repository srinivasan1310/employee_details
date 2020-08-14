import { EmpForgotpasswordComponent } from './emp-forgotpassword/emp-forgotpassword.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpSignupComponent } from './emp-signup/emp-signup.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpHomepageComponent } from './emp-homepage/emp-homepage.component';


const routes: Routes = [
  {path: '', redirectTo: '/emp-login', pathMatch: 'full'},
  {path: 'emp-homepage', component: EmpHomepageComponent},
  {path: 'emp-signup', component: EmpSignupComponent},
  {path: 'emp-login', component: EmpLoginComponent},
  {path: 'emp-forgotpassword', component: EmpForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
