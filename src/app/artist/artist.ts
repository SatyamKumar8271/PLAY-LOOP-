import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  imports: [],
  templateUrl: './artist.html',
  styleUrl: './artist.css'
})
export class Artist {
  constructor(private router: Router) { }

  public navigateUrl(url: string) {
    this.router.navigate([url]);
  }
  
}