import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: HomeComponent, pathMatch: 'full'}
];
