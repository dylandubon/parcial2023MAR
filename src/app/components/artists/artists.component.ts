import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artista: any = {};
  topTracks: any = [];
  imagenURL : any = '';
  urlProfile : any = '';
  url : any = 'https://p.scdn.co/mp3-preview/a24ea47d20ac1f711faa0785bcc652db71a99e02?cid=af45800cf23549a7a9b8e31c855ca2d8';

  loadingArtists: boolean = false;
  constructor(private router: ActivatedRoute, private spotify : SpotifyService,
    private sanitizer: DomSanitizer) {
      
    this.loadingArtists = true;
    this.router.params.subscribe( params => {
      this.getArtista(params["id"])
    })
  }
  ngOnInit(): void {
  }

  getArtista(id: string){
    this.spotify.getToken().subscribe((data:any) => {
      this.spotify.getArtist(id, data.access_token).subscribe((artista : any)=>{
        this.artista = artista;
        //console.log(this.artista);
        this.imagenURL = this.artista.images[1];
        this.loadingArtists = false;
        this.urlProfile =this.artista.external_urls.spotify; //this.safePipe.transform(this.artista.external_urls.spotify);
        
        this.getTopTracks(id);
      },(errorServicio) => {
        this.loadingArtists = false;
        console.log(errorServicio);
      }
      )
    });
   
  }
  getTopTracks(id: string){
    this.spotify.getToken().subscribe((data:any) => {
      this.spotify.getTopTracks(id, data.access_token).subscribe(topTracks =>{
        this.topTracks = topTracks;
        //this.url = this.safePipe.transform(this.topTracks.tracks[0].preview_url);
        //this.url = this.sanitizer.bypassSecurityTrustUrl(this.topTracks.tracks[0].preview_url);

      })

    });
  }
  redirect() {
    document.location.href = this.urlProfile;

  }
  redirectSong(url: any) {
    document.location.href = url.spotify;

  }
}
