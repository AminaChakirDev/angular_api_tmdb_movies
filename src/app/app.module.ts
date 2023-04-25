import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SlugifyPipe } from './slugify.pipe';
import { SearchInputComponent } from './search-input/search-input.component';
import { ActorPageComponent } from './actor-page/actor-page.component';
import { MovieComponent } from './movie/movie.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviePageComponent,
    MoviesListComponent,
    HomePageComponent,
    SlugifyPipe,
    SearchInputComponent,
    ActorPageComponent,
    MovieComponent,
    FavoritesPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [SlugifyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
