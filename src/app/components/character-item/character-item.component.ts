import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, Film } from 'src/app/shared/app.models';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss'],
})
export class CharacterItemComponent implements OnInit {
  @Input() character!: Character;

  films!: Observable<Film>[];

  constructor(protected appSvc: AppService) {}

  getFilm(filmUrl: string) {
    return this.appSvc.getFilm(filmUrl);
  }

  openDialogFilm(film: Observable<Film>) {
    film.subscribe((film) => this.appSvc.openDialog(film.opening_crawl));
  }

  ngOnInit(): void {
    this.films = this.character.films.map((f) => this.getFilm(f));
  }
}
