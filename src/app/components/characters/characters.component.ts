import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Film } from 'src/app/shared/app.models';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  constructor(private appSvc: AppService) {}

  allCharacters!: Observable<any>;
  allFilms!: Observable<Film[]>;

  ngOnInit() {
    this.getCharacters(1);
    this.allFilms = this.getFilms();
  }

  getCharacters(page: number) {
    this.allCharacters = this.appSvc.getAllCharacters(page);
  }

  getFilms(): Observable<Film[]> {
    return this.appSvc.getAllFilms();
  }

  handlePageEvent(event: PageEvent) {
    const pageIndex: number = event.pageIndex + 1;
    return this.getCharacters(pageIndex);
  }
}
