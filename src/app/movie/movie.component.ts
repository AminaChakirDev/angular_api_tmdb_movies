import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SlugifyPipe } from '../slugify.pipe';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  isFavorite: boolean = false;

  @Input() movie: any = {};
  @Input() favorites?: any;

  constructor(private slugifyPipe: SlugifyPipe, private router: Router) {}

  ngOnInit() {
    if (this.favorites.find((movie: any) => this.movie.id === movie.id)) {
      this.isFavorite = true;
    }
  }

  navigateWithSlug(movieTitle: string, movieId: number) {
    const slugTitle = this.slugifyPipe.transform(movieTitle, movieId);
    this.router.navigate(['/movies', slugTitle]);
  }

  handleFavorite(element: any) {
    if (this.favorites.find((movie: any) => element.id === movie.id)) {
      const index = this.favorites.findIndex((x: any) => x.id === this.movie.id);
      this.favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      this.isFavorite = false;
    } else {
      this.favorites.push(element);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      this.isFavorite = true;
    }
  }
}
