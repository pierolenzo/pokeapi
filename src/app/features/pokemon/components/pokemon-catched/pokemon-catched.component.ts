import { Subscription } from 'rxjs';
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

  constructor(private pokemonDataService: PokemonDataService) {
    this.TYPE = 1;
   }

  ngOnInit(): void {
    this.subscription = this.pokemonDataService.catchedPokemon$
      .subscribe(data => this.pokemon = data)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
