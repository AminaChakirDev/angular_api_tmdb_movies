import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorPageComponent } from './actor-page/actor-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'movies/:title-slug',
    component: MoviePageComponent,
  },
  {
    path: 'actors/:actor-slug',
    component: ActorPageComponent,
  },
  {
    path: 'favorites',
    component: FavoritesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
