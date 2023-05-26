import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full"},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'cats', loadChildren: () => import('./pages/cats/cats.routes').then(r => r.CATS_ROUTES)},
  { path: 'dogs', loadComponent: () => import('./pages/dogs/dogs.component') },
  { path: 'first', loadComponent: () => import('./pages/my-first-standalone/my-first-standalone.component')},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
