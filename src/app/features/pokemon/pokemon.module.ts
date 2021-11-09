import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './components/pokemon-content/pokemon.component';
import { PokemonRifiutatiComponent } from './components/pokemon-rifiutati/pokemon-rifiutati.component';
import { PokemonCatturatiComponent } from './components/pokemon-catturati/pokemon-catturati.component';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';


@NgModule({
  declarations: [
    PokemonComponent,
    PokemonRifiutatiComponent,
    PokemonCatturatiComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
