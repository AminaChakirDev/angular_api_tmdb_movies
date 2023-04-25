import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent {
  input: string = '';
  moviesSearched: Movie[] = [];
  noResult: boolean = false;

  @Input() favorites: any = [];

  constructor(private apiService: ApiService) {}

  search(input: string) {
    this.apiService.search(input).subscribe((data) => {
      this.moviesSearched = data.results;

      if (data.results.length == 0) {
        this.noResult = true;
      }
    });
  }
}
