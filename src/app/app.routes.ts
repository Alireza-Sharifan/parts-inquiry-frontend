/*import { Routes } from '@angular/router';
import{HomePage}from'./topic07-routing/home-page'
import{AboutPage}from'./topic07-routing/about-page'
import{ContactPage}from'./topic07-routing/contact-page'
export const routes: Routes = [
    {path:'home',component:HomePage},
    {path:'about',component:AboutPage},
    {path:'contact',component:ContactPage},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];*/


import { Routes } from '@angular/router';
import { Topic22FinalRoutedWebsite } from './topic22-final-routed-website/topic22-final-routed-website';
import { HomePage } from './topic22-final-routed-website/home-page';
import { AboutPage } from './topic22-final-routed-website/about-page';
import { ContactPage } from './topic22-final-routed-website/contact-page';
import { Topic22ProductsPage } from './topic22-products-page/topic22-products-page';

export const routes: Routes = [
  {
    path: '',
    component: Topic22FinalRoutedWebsite,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePage },
      { path: 'about', component: AboutPage },
      { path: 'contact', component: ContactPage },
      { path: 'products', component: Topic22ProductsPage }
    ]
  }
];