import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';
import { VmessageModule } from 'src/app/shared/vmessage/vmessage/vmessage.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotosFormComponent } from './photos-form.component';

@NgModule({
  declarations: [PhotosFormComponent],
  imports: [
    CommonModule,   // para ele funcionar preciso do CommonModule
    ReactiveFormsModule,
    FormsModule,
    VmessageModule,
    RouterModule,
    PhotoModule,
    ImmediateClickModule
  ],
})
export class PhotoFormModule{}
