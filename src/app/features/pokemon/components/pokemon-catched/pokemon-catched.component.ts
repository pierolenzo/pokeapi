import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Pokemon } from 'src/app/features/pokemon/models/Pokemon';
import { PokemonDataService } from 'src/app/core/services/pokemon-data.service';

@Component({
  selector: 'app-pokemon-catched',
  templateUrl: './pokemon-catched.component.html',
  styleUrls: ['./pokemon-catched.component.sass']
})
export class PokemonCatchedComponent implements OnInit, OnDestroy {
  public pokemon!: Pokemon[];
  public TYPE: number;
  private subscription!: Subscription;

  constructor(private pokemonDataService: PokemonDataService, private route: Router) {
    this.TYPE = 1;
   }

  ngOnInit(): void {
    this.subscription = this.pokemonDataService.pokemonCatturati$
      .subscribe(data => this.pokemon = data)
  }

  /**
   * selectPokemon()
   */
  public selectPokemon(pokemonSelected: Pokemon) {
    this.route.navigate(['/pokemon-details', pokemonSelected.id])
    console.log(pokemonSelected.id)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
