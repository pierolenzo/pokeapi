import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { PokemonModuleComponent } from './pokemon-module.component';

const routes: Routes = [
  { path: '', component: PokemonModuleComponent },
  { path: 'details/:type/:id', component: PokemonDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonModuleRoutingModule { }
