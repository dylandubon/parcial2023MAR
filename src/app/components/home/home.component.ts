import { Component, NgModule, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Albums } from '../../interfaces/albums';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  productos: any[] = [
    {'NAME': 'MOUSE GAMER', 'PRICE': 'Q75.00', 'DESC': 'MOUSE GAMER', 'IMAGE': 'http://www.romitech.com.gt/web/image/product.product/76/image_1024/%5BXTM-610%5D%20Mouse%20Gamer%20XTECH%20XTM-610%206%20Botones%203200dpi%20Negro?unique=03f8d46', 'TOTAL': '1000', 'URL': 'https://www.google.com/search?q=MOUSE GAMER'},
    {'NAME': 'TV LED', 'PRICE': 'Q5,500.00', 'DESC': 'TV LED', 'IMAGE': 'https://walmartgt.vtexassets.com/arquivos/ids/295941-800-600?v=637970713860800000&width=800&height=600&aspect=true', 'TOTAL': '500', 'URL': 'https://www.google.com/search?q=TV LED'},
    {'NAME': 'ESCRITORIO', 'PRICE': 'Q3,000.00', 'DESC': 'ESCRITORIO GAMER', 'IMAGE': 'https://www.officedepot.com.gt/medias/40516.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MjM0OTgwfGltYWdlL2pwZWd8aDE2L2g5Ny8xMTA1NTEwMjc1NDg0Ni80MDUxNi5qcGdfMTIwMGZ0d3w0ZjRhZjViZDhmNGMzODczMWRlNTdlZDY1NjYzNTc4Mzc4Mjk2OTMyODA2NmRiY2FhZDZiZGNkMGE4OTA0OGEy', 'TOTAL': '11', 'URL': 'https://www.google.com/search?q=escritorio Gamer'},
    {'NAME': 'LAPTOP', 'PRICE': 'Q9,900.00', 'DESC': 'PC GAMER', 'IMAGE': 'https://www.itsitio.com/wp-content/uploads/2020/07/G531-1-780x405.jpg', 'TOTAL': '5', 'URL': 'https://www.google.com/search?q=laptop gamer'},
    {'NAME': 'SILLA GAMER', 'PRICE': 'Q1,500.00', 'DESC': 'SILLA GAMER', 'IMAGE': 'https://www.officedepot.com.gt/medias/39015.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MzI0MDk0fGltYWdlL2pwZWd8aGI3L2g0ZC8xMDUwNzgzNDAzMjE1OC8zOTAxNS5qcGdfMTIwMGZ0d3wxY2YwZjNlODJkYjA2NzI5YjlhNWNjNjYwZmM3MTNkZjQ5MzdkZGI1ZjRhNTgwYzAzMTE2MjJjZmQ1M2Q0M2Fh', 'TOTAL': '25', 'URL': 'https://www.google.com/search?q=silla gamer'},
   
  ];
  loading: boolean = true;
  error: boolean = false;
  mensajeError: string = "";
  constructor(private spotify: SpotifyService) { 
  
    
  }
  ngOnInit(): void {
  }
  redirectSong(URL: string) {
    document.location.href = URL;

  }

  
}
