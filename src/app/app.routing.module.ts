import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotosFormComponent } from './photos/photos-form/photos-form.component';



const routes: Routes = [
  { path:'user/flavio', component: PhotoListComponent },
  { path:'p/add', component: PhotosFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{}
