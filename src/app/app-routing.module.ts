import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'cats', loadChildren: () => import('./pages/cats/cats.module').then(m => m.CatsModule) },
  { path: 'dogs', loadChildren: () => import('./pages/dogs/dogs.module').then(m => m.DogsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
