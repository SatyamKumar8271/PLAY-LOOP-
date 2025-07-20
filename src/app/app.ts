
import { Component, NgModule } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Home } from "./home/home";
// import { login } from "./login/login";
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { Register } from './register/register';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'PlayLoop';
  public login: String | undefined;
  public register: String | undefined;

  constructor(private router: Router) {}


  navigateUrl(type:String){
    this.login = type;
    this.router.navigate([this.login]);
    this.register = type;
    this.router.navigate([this.register]);
    this.router.navigate([URL]);
  }
  
}
