import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  imports: [],
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

  }
}
