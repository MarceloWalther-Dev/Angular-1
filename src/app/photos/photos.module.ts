import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [ PhotoComponent, PhotoListComponent ],  // tudo que esta dentro de declarations está privado
  imports: [
    HttpClientModule,
    CommonModule // é uma boa pratica que todos os modulos tenha o import do commonModule
   ]
})
export class PhotosModule{}
