import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Movie } from '../models/movie.model';
import { SlugifyPipe } from '../slugify.pipe';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent {
  movieId?: number;
  movie?: any;
  credits?: any;
  images?: any;
  currentImage: any = {};
  changeBackgroundCounter: number = 0;
  starsCount: number = 0;
  favorites!: any[];
  isFavorite: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private slugifyPipe: SlugifyPipe,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let slug = params['title-slug'];
      this.movieId = parseInt(slug.split('-').at(-1));
      this.apiService.getMovieById(this.movieId).subscribe((data) => {
        this.movie = data;
        this.starsCount = Math.round(data.vote_average);
      });
      this.apiService.getCredits(this.movieId).subscribe((credits) => {
        this.credits = credits;
      });
      this.apiService.getImages(this.movieId).subscribe((images) => {
        this.images = images.posters;
        if (this.images.length > 0) {
          this.currentImage = this.images[0].file_path;
        } else {
          this.currentImage = this.movie.poster_path;
        }
      });
    });
    this.getFromLocalStorage();
  }

  navigateWithSlug(actorName: string, actorId: number) {
    const slugActor = this.slugifyPipe.transform(actorName, actorId);
    this.router.navigate(['/actors', slugActor]);
  }

  getFromLocalStorage() {
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (this.favorites.find((movie: any) => this.movieId === movie.id)) {
      this.isFavorite = true;
    }
  }

  handleFavorite(element: any) {
    if (this.favorites.find((movie: any) => element.id === movie.id)) {
      const index = this.favorites.findIndex(
        (x: any) => x.id === this.movie.id
      );
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
