import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmPasswordResetComponent } from './containers/confirm-password-reset/confirm-password-reset.component';
import { EmailActionComponent } from './containers/email-action/email-action.component';
import { ForgetPasswordComponent } from './containers/forget-password/forget-password.component';
import { LoginComponent } from './containers/login/login.component';
const routes: Routes = [
  {
    path: 'login',
    children: [{ path: '', component: LoginComponent }],
    title: 'Login',
  },
  {
    path: 'forgot-password',
    children: [{ path: '', component: ForgetPasswordComponent }],
    title: 'Forgot password',
  },
  {
    path: 'email/action',
    children: [{ path: '', component: EmailActionComponent }],
  },
  {
    path: 'reset-password',
    component: ConfirmPasswordResetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
