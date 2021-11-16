import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { PokemonComponent } from './pages/pokemon-content/pokemon.component';

const routes: Routes = [
  { path: '', component: PokemonComponent },
  { path: 'details/:type/:id', component: PokemonDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
