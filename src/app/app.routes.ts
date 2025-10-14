import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us-page/about-us-page'),
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/contact-us-page/contact-us-page'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
