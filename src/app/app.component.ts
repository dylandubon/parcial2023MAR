import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
  limit: number = 10;
  extensor: number = 1;
  constructor( public router: Router ) {

  }

  ngOnInit(): void {

    
  }
  changePage(id: Number) {
    if(id === 1) {
      this.router.navigate(['vision']);


    } else if(id === 2) {
      this.router.navigate(['mision']);

    } else {
      this.router.navigate(['home']);

    }

  }
}

