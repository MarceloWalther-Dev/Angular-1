import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [PhotoComponent],
  exports:[PhotoComponent]
})
export class PhotoModule{}
