import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonModuleRoutingModule } from './pokemon-module-routing.module';
import { PokemonModuleComponent } from './pokemon-module.component';
import { PokemonRifiutatiComponent } from '../pokemon-rifiutati/pokemon-rifiutati.component';
import { PokemonCatturatiComponent } from '../pokemon-catturati/pokemon-catturati.component';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';


@NgModule({
  declarations: [
    PokemonModuleComponent,
    PokemonRifiutatiComponent,
    PokemonCatturatiComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    PokemonModuleRoutingModule
  ]
})
export class PokemonModuleModule { }
