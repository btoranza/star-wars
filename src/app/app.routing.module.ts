import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { FilmsComponent } from './components/films/films.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/films',
    pathMatch: 'full',
  },
  { path: 'films', component: FilmsComponent },
  {
    path: 'characters',
    component: CharactersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
