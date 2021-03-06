import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotosFormComponent } from './photos/photos-form/photos-form.component';




const routes: Routes = [

  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
  },
  {
     path:'user/:userName',
     component: PhotoListComponent,
     resolve: {
      photos: PhotoListResolver
    }
  },
  {
    path:'p/add',
    component: PhotosFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'p/:photoId',
    component: PhotoDetailsComponent,
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{}
