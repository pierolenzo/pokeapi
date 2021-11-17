import {  Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Pokemon } from 'src/app/features/pokemon/models/Pokemon';
import { PokemonDataService } from 'src/app/core/services/pokemon-data.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit, OnDestroy {
  public numberPokemon: number;
  public pokemon!: Pokemon;
  public pokemons: Pokemon[];

  private subscribePokemon!: Subscription;
  private subscribePokemons!: Subscription;

  constructor(private pokemonDataService: PokemonDataService) {
    this.numberPokemon = 1;
    this.pokemons = [];
   }

  ngOnInit(): void {
    this.numberPokemon = this.pokemonDataService.generateRndom();
    this.subscribePokemons = this.pokemonDataService.catchedPokemon$
                              .subscribe(data => this.pokemons = data);
    this.getPokemon();
  }

  /**
   * getPokemon()
   */
  public getPokemon() {
    this.subscribePokemon = this.pokemonDataService.get().subscribe(data => this.pokemon = data);
  }

  /**
   * catturaPokemon()
   */
  public catturaPokemon(pokemon: Pokemon) {
    this.pokemonDataService.catturaPokemon(pokemon);
    console.log('click catturaPokemon', pokemon);
    this.getPokemon();
  }

  /**
   * rifiutaPokemon()
   */
  public rifiutaPokemon(pokemon: Pokemon) {
    this.pokemonDataService.rifiutaPokemon(pokemon);
    console.log('click rifiutaPokemon', pokemon);
    this.getPokemon();
  }

  ngOnDestroy(): void {
    this.subscribePokemon.unsubscribe();
    this.subscribePokemons.unsubscribe();
  }

}
