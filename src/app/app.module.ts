import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app.routing.module';
import { FilmsComponent } from './components/films/films.component';
import { CharactersComponent } from './components/characters/characters.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { CrawlModalComponent } from './components/crawl-modal/crawl-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FilmsComponent,
    CharactersComponent,
    FilmItemComponent,
    CharacterItemComponent,
    CrawlModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
