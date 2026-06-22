import { Routes } from '@angular/router';
import{HomePage}from'./topic07-routing/home-page'
import{AboutPage}from'./topic07-routing/about-page'
import{ContactPage}from'./topic07-routing/contact-page'
export const routes: Routes = [
    {path:'home',component:HomePage},
    {path:'about',component:AboutPage},
    {path:'contact',component:ContactPage},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];