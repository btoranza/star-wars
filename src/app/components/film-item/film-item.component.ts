import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Film } from 'src/app/shared/app.models';
import { AppService } from 'src/app/shared/app.service';
import { CrawlModalComponent } from '../crawl-modal/crawl-modal.component';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss'],
})
export class FilmItemComponent implements OnInit {
  @Input() film!: Film;

  constructor(protected appSvc: AppService) {}

  ngOnInit(): void {}
}
