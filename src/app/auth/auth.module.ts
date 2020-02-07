import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AdminLoginComponent,
    SignUpComponent,
    SignInComponent
  ]
})
export class AuthModule {
}
