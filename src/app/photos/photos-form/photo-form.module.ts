import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from 'src/app/shared/vmessage/vmessage/vmessage.module';
import { PhotosFormComponent } from './photos-form.component';

@NgModule({
  declarations: [PhotosFormComponent],
  imports: [
    CommonModule,   // para ele funcionar preciso do CommonModule
    ReactiveFormsModule,
    FormsModule,
    VmessageModule,

  ],
})
export class PhotoFormModule{

}
