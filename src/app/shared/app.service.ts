import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film, Character } from './app.models';
import { MatDialog } from '@angular/material/dialog';
import { CrawlModalComponent } from '../components/crawl-modal/crawl-modal.component';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  FILMS_URL = 'https://swapi.dev/api/films';
  CHARACTERS_URL = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient, private dialogRef: MatDialog) {}

  getAllFilms(): Observable<Film[]> {
    return this.http.get<any>(this.FILMS_URL).pipe(map((data) => data.results));
  }

  getAllCharacters(page: number): Observable<Character[]> {
    return this.http
      .get<any>(this.CHARACTERS_URL, {
        params: new HttpParams().set('page', page),
      })
      .pipe(map((data) => data.results));
  }

  getFilm(filmUrl: string): Observable<Film> {
    return this.http.get<Film>(filmUrl).pipe(map((data) => data));
  }

  getCharacter(characterUrl: string): Observable<Character> {
    return this.http.get<Character>(characterUrl).pipe(map((data) => data));
  }

  openDialog(opening: string) {
    this.dialogRef.open(CrawlModalComponent, { data: opening });
  }
}
