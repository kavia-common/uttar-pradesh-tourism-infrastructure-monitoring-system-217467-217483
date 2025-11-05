import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

/**
 * PUBLIC_INTERFACE
 * AuthModule declares login and provides shared form modules.
 */
@NgModule({
  imports: [SharedModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class AuthModule {}
