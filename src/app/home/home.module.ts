import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/vmessage/vmessage/vmessage.module';
import { SingupComponent } from './singup/singup.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';



@NgModule({
  declarations: [ SignInComponent, SingupComponent, HomeComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VmessageModule,
    HomeRoutingModule,
    RouterModule,
  ]
})
export class HomeModule { }
