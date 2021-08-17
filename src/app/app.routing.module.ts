import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotosFormComponent } from './photos/photos-form/photos-form.component';



const routes: Routes = [
  { path:'', component: PhotoListComponent },
  { path:'user/:userName', component: PhotoListComponent },
  { path:'p/add', component: PhotosFormComponent },
  { path:'**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{}
