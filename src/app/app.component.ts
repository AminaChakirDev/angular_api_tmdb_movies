import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movies-angular';
  favorites: any[] = [];

  ngOnInit() {
    this.favorites = this.getFromLocalStorage();
  }

  getFromLocalStorage(): any[] {
    const favoritesMovies: any[] = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    return favoritesMovies;
  }
}
