import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Footer, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
public login: String | undefined;
public register: String | undefined;
  
  constructor(private router: Router) {}

  
  
  navigateUrl(type:String){
    this.login = type;
    this.router.navigate([this.login]);
    this.register = type;
    this.router.navigate([this.register]);
    // this.router.navigate([URL]);
  }

  isLoggedIn(): boolean {
    // Example: Check localStorage/session/token — adjust as needed
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  
  handlePlayClick() {
    if (this.isLoggedIn()) {
      this.router.navigate(['music-play']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
