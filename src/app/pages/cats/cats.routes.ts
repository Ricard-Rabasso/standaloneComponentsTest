import { Routes } from "@angular/router";

export const CATS_ROUTES: Routes = [
  { path: '' ,
    children: [
      { path: '', loadComponent: () => import('./cats.component'), pathMatch: "full"},
      { path: 'cat1', loadComponent: () => import('./pages/cat1/cat1.component')},
      { path: 'cat2', loadComponent: () => import('./pages/cat2/cat2.component')},
    ],
  },
];
