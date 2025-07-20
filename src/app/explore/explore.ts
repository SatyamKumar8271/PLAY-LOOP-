import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  imports: [],
  templateUrl: './explore.html',
  styleUrl: './explore.css'
})
export class Explore {
song: any;
teacher: any;

constructor(private router: Router) { }

public navigateUrl(url: string) {
  this.router.navigate([url]);
}
 trendingSongs = [
    { title: 'Calm Down', artist: 'Rema', img: 'https://i.imgur.com/Bn8fNnm.jpg' },
    { title: 'On My Way', artist: 'Alan Walker', img: 'https://i.imgur.com/Fg9hATU.jpg' },
    { title: 'Kesariya', artist: 'Arijit Singh', img: 'https://i.imgur.com/vRO1wBo.jpg' },
    { title: 'Shape of You', artist: 'Ed Sheeran', img: 'https://i.imgur.com/Fhe1RzW.jpg' },
    { title: 'Believer', artist: 'Imagine Dragons', img: 'https://i.imgur.com/03KgE7x.jpg' },

  ];

  genres = ['Pop', 'Bollywood', 'Workout', 'Love', 'Lo-Fi', 'Rock', 'Hip Hop', 'Instrumental'];
}

