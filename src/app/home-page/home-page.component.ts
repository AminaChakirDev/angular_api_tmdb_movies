import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {

  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  nowPlayingMovies: Movie[] = [];
  favorites: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getPopularMoviesFromService();
    this.getUpcomingMoviesFromService();
    this.getNowPlayingMoviesFromService();
    this.getTopRatedMoviesFromService();
    this.favorites = this.getFromLocalStorage();
  }

  getPopularMoviesFromService() {
    this.apiService
      .getPopularMovies()
      .subscribe((data) => (this.popularMovies = data.results));
  }
  getUpcomingMoviesFromService() {
    this.apiService
      .getUpcomingMovies()
      .subscribe((data) => (this.upcomingMovies = data.results));
  }
  getNowPlayingMoviesFromService() {
    this.apiService
      .getNowPlayingMovies()
      .subscribe((data) => (this.nowPlayingMovies = data.results));
  }
  getTopRatedMoviesFromService() {
    this.apiService
      .getTopRatedMovies()
      .subscribe((data) => (this.topRatedMovies = data.results));
  }

  getFromLocalStorage(): any[] {
    const favoritesMovies: any[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favoritesMovies;
  }
}
