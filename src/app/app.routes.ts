import { Routes } from '@angular/router';
import {First} from './first/first'
import {Second} from './second/second'
import { HomeComponent } from './home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'first', component: First },
  { path: 'second', component: Second },
  { path: '**', redirectTo: '/first' },
];
