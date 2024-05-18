import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { profileGuard } from './guards/profile.guard';

const routes: Routes = [
{ path: '', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) }, 
{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
{ path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
{ path: 'profile', canActivate: [profileGuard],  loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
