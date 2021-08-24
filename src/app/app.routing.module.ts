import { SingupComponent } from './home/singup/singup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SignInComponent } from './home/signin/signin/signin.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotosFormComponent } from './photos/photos-form/photos-form.component';



const routes: Routes = [

  {
    path:'',
    component: SignInComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'signup',
    component: SingupComponent,
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
    component: PhotosFormComponent
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
