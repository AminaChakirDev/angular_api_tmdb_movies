import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
export class FavoritesPageComponent {
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
