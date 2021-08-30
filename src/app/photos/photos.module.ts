import { NgModule } from '@angular/core';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photos-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';


@NgModule({                                                  // tudo que esta dentro de declarations está privado
  imports: [
    PhotoModule,
    PhotoDetailsModule,
    PhotoListModule,
    PhotoFormModule
   ]
})
export class PhotosModule{}
