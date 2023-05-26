import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'cats', loadComponent: () => import('./pages/cats/cats.component') },
  { path: 'dogs', loadComponent: () => import('./pages/dogs/dogs.component') },
  { path: 'first', loadComponent: () => import('./pages/my-first-standalone/my-first-standalone.component')},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
