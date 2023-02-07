import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutModule } from './components/auth-layout/auth-layout.module';
import { ForgetPasswordComponent } from './containers/forget-password/forget-password.component';
import { EmailActionComponent } from './containers/email-action/email-action.component';
import { ConfirmPasswordResetComponent } from './containers/confirm-password-reset/confirm-password-reset.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonHelper } from '@dkaccess/share-utils';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
    EmailActionComponent,
    ConfirmPasswordResetComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    AuthLayoutModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [AuthLayoutModule],
  providers: [AuthService, CommonHelper],
})
export class AuthModule {}
