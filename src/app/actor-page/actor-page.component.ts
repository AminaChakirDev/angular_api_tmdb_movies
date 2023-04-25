import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Movie } from '../models/movie.model';
import { SlugifyPipe } from '../slugify.pipe';

@Component({
  selector: 'app-actor-page',
  templateUrl: './actor-page.component.html',
  styleUrls: ['./actor-page.component.css'],
})
export class ActorPageComponent {
  actorId?: number;
  actor?: any;
  movies?: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private slugifyPipe: SlugifyPipe,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let slug = params['actor-slug'];
      this.actorId = parseInt(slug.split('-').at(-1));
      this.apiService.getActorById(this.actorId).subscribe((data) => {
        this.actor = data;
      });
      this.apiService.getMoviesByActorId(this.actorId).subscribe((movies) => {
        this.movies = movies.cast;
      });
    });
  }

  navigateWithSlug(movieTitle: string, movieId: number) {
    const slugTitle = this.slugifyPipe.transform(movieTitle, movieId);
    this.router.navigate(['/movies', slugTitle]);
  }
}
