import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/vmessage/vmessage/vmessage.module';
import { SingupComponent } from './singup/singup.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ SignInComponent, SingupComponent ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule
  ]
})
export class HomeModule { }
