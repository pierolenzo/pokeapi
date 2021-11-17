import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Pokemon } from 'src/app/features/pokemon/models/Pokemon';
import { PokemonDataService } from 'src/app/core/services/pokemon-data.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.sass']
})
export class PokemonDetailsComponent implements OnInit {
  public pokemons!: Pokemon[];
  public pokemon!: Pokemon;
  public params!: Params;

  constructor(private pokemonDataService: PokemonDataService,
              private activatedRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => this.params = data)

    if (this.params.type == 1) {
      this.pokemonDataService.catchedPokemon$.subscribe(data => this.pokemons = data)
      const _pokemon = this.pokemons.find(item => item.id == this.params.id);
      if (_pokemon) {
        this.pokemon = _pokemon;
      }
    } else {
      this.pokemonDataService.rejectedPokemon$.subscribe(data => this.pokemons = data)
      const _pokemon = this.pokemons.find(item => item.id == this.params.id);
      if (_pokemon) {
        this.pokemon = _pokemon;
      }
    }

  }

  public goBack(): void {
    this.location.back();
  }

}
