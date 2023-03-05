import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SharedComponent } from './components/shared/shared.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { NoImagePipe } from './pipes/no-image.pipe';
import { SafePipe } from './pipes/SafePipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { VisionComponent } from './components/vision/vision.component';
import { MisionComponent } from './components/mision/mision.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    HomeComponent,
    SearchComponent,
    TarjetasComponent,
    SharedComponent,
    NoImagePipe,
    DomSeguroPipe,
    SafePipe ,
    VisionComponent,
    MisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
