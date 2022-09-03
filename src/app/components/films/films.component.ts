import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Film } from 'src/app/shared/app.models';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  constructor(private appSvc: AppService) {}

  allFilms!: Observable<Film[]>;

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this.allFilms = this.appSvc.getAllFilms();
  }
}
