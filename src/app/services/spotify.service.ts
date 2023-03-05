import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Albums, AlbumsClass, Artist, Track } from '../interfaces/albums';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  TOKENSPOTIFY: string = '';
  
  constructor(private http: HttpClient) {
     
    
  }

  getToken() {
    const url = `https://accounts.spotify.com/api/token`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });  
    let options = {headers: headers};
    let body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', '1805b3b6abdd4a8696f6d77a403a786e');
    body.set('client_secret', '7553fd63581c44aaadd0d4856f479a8d');
    return this.http.post(url, body, options).pipe(map(
      response => (response)
    ));
  }
  getQuery( query : string){
    this.getToken();
   
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({'Authorization':'Bearer ' + this.TOKENSPOTIFY});
    return this.http.get(url,{headers})
  }

  // HTTP Hyper text transfer protocol
  // Aplicacion
  // clientes que http
  getReleases(token: any){
   
    const headers = new HttpHeaders({'Authorization':'Bearer '  + token});
    return this.http.get<AlbumsClass>("https://api.spotify.com/v1/browse/new-releases?limit=30",{headers})
    .pipe(map(
      response => ({
        items : response
      })
    ))

  }

  getArtistas(query : string){
    try {
      return this.getQuery(`search?q=${query}&type=artist&limit=30`).pipe(map( data => data));
    }
    catch{

    }
    return []
  }

  getArtist(id : string, token: any){

    
      const headers = new HttpHeaders({'Authorization':'Bearer '  + token});
      return this.http.get<Artist>('https://api.spotify.com/v1/artists/' +id,{headers})
      .pipe(map(
        response => (
            response
        )
      ))
  }
  //  GET https://api.spotify.com/v1/artists/{id}/top-tracks

  getTopTracks(id : string, token: any){

    
    const headers = new HttpHeaders({'Authorization':'Bearer '  + token});
    return this.http.get<Track>("https://api.spotify.com/v1/"+`artists/${id}/top-tracks?market=ES`,{headers})
    .pipe(map(
      response => (response)
    ))
  }

  getCategories(){
    try {
      return this.getQuery('browse/categories?limit=100').pipe(map( data => data ));
    }
    catch{
      console.log('Error en metodo categories')
    }
    return []
  }
}
