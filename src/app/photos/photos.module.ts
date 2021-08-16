import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
  declarations: [ PhotoComponent ],  // tudo que esta dentro de declarations está privado
  exports: [ PhotoComponent ]    // tudo que esta dento de exports está publico
})
export class PhotosModule{}
