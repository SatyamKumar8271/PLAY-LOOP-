import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upgrade',
  imports: [],
  templateUrl: './upgrade.html',
  styleUrl: './upgrade.css'
})
export class Upgrade{
saveForm() {
throw new Error('Method not implemented.');
}
samosaCollection: any;
detail: any;
  constructor(private router: Router) { }

  public navigateUrl(url: string) {
    this.router.navigate([url]);
  }

}