import { Routes } from '@angular/router';
import { login } from './login/login';
import { Register } from './register/register';
import { Home } from './home/home';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'home',component:Home},
    {path:'login',component:login},
    {path:'register',component:Register}

];

export class AppRoutingModule {}