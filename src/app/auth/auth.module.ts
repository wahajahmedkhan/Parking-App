import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'register',
    component: SignUpComponent
  },
  {
    path: 'admin',
    component: AdminLoginComponent
  },
];


@NgModule({
  declarations: [
    AuthComponent,
    AdminLoginComponent,
    SignUpComponent,
    SignInComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthModule {
}
