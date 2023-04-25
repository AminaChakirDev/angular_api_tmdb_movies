import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPopularMovies = () => {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/popular?api_key=b57985ea6074227451ffbe0942972344&language=fr-FR&page=1`
    );
  };

  getNowPlayingMovies = () => {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=b57985ea6074227451ffbe0942972344&language=fr-FR&page=1&region=FR`
    );
  };

  getTopRatedMovies = () => {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=b57985ea6074227451ffbe0942972344&language=fr-FR&page=1`
    );
  };

  getUpcomingMovies = () => {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=b57985ea6074227451ffbe0942972344&language=fr-FR&page=1&region=FR`
    );
  };

  getMovieById(movieId: number) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/
        ${movieId}
        ?api_key=b57985ea6074227451ffbe0942972344&language=fr-FR`
    );
  }

  getActorById(actorId: number) {
    return this.http.get<any>(
      `
      https://api.themoviedb.org/3/person/${actorId}?api_key=b57985ea6074227451ffbe0942972344&language=fr-FR`
    );
  }

  getMoviesByActorId(actorId: number) {
    return this.http.get<any>(
      `
      https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=b57985ea6074227451ffbe0942972344&language=fr-FR`
    );
  }

  search(input: string) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/search/movie?api_key=b57985ea6074227451ffbe0942972344&language=fr-FR&query=${input}&page=1&include_adult=false&region=FR`
    );
  }

  getCredits(movieId: number) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b57985ea6074227451ffbe0942972344&language=fr-FR`
    );
  }

  getImages(movieId: number) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=b57985ea6074227451ffbe0942972344&language=fr-FR&include_image_language=null`
    );
  }
}
