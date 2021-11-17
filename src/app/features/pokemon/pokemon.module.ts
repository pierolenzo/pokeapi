import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pages/pokemon-content/pokemon.component';
import { PokemonRifiutatiComponent } from './components/pokemon-rejected/pokemon-rejected.component';
import { PokemonCatchedComponent } from './components/pokemon-catched/pokemon-catched.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';


@NgModule({
  declarations: [
    PokemonComponent,
    PokemonRifiutatiComponent,
    PokemonCatchedComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
