import { Pokemon } from './../../models/Pokemon';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonDataService } from 'src/app/core/services/pokemon-data.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-module',
  templateUrl: './pokemon-module.component.html',
  styleUrls: ['./pokemon-module.component.sass']
})
export class PokemonModuleComponent implements OnInit, OnDestroy {
  private subscribe!: Subscription;
  public numberPokemon: number;
  public pokemon!: Pokemon;

  constructor(private pokemonDataService: PokemonDataService) {
    this.numberPokemon = 1;
   }

  ngOnInit(): void {
    this.numberPokemon = this.pokemonDataService.generateRndom();
    this.getPokemon();
  }

  /**
   * getPokemon()
   */
  public getPokemon() {
    this.subscribe = this.pokemonDataService.get().subscribe(data => this.pokemon = data)
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
    this.subscribe.unsubscribe()
  }

}
