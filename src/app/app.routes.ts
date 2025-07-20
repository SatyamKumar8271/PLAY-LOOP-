import { Routes } from '@angular/router';
import { login } from './login/login';
import { Register } from './register/register';
import { Home } from './home/home';
import { Explore } from './explore/explore';
import { Upgrade } from './upgrade/upgrade';
import { Library } from './library/library';
import { MusicPlay } from './music-play/music-play';
import { Artist } from './artist/artist';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'home',component:Home},
    {path:'login',component:login},
    {path:'register',component:Register},
    {path:'explore',component:Explore},
    {path:'upgrade',component:Upgrade},
    {path:'library',component:Library},
    {path:'music-play',component:MusicPlay},
    {path:'artist',component:Artist}
];

export class AppRoutingModule {}