import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './components/artists/artists.component';
import { HomeComponent } from './components/home/home.component';
import { MisionComponent } from './components/mision/mision.component';
import { SearchComponent } from './components/search/search.component';
import { VisionComponent } from './components/vision/vision.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'search', component:SearchComponent},
  {path: 'vision', component:VisionComponent},
  {path: 'mision', component:MisionComponent},
  {path: 'artist/:id', component:ArtistsComponent},
  {path: '', pathMatch: 'full',redirectTo:'home'},
  {path: '**', pathMatch: 'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
