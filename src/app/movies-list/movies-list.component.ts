import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';
import { SlugifyPipe } from '../slugify.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {

  @Input() title?: string;
  @Input() movies?: Movie[];
  @Input() favorites?: Movie[];

  constructor(private slugifyPipe: SlugifyPipe, private router: Router) {}

  navigateWithSlug(movieTitle: string, movieId: number) {
    const slugTitle = this.slugifyPipe.transform(movieTitle, movieId);
    this.router.navigate(['/movies', slugTitle]);
  }


}
