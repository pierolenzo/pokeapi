import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Pokemon } from 'src/app/features/pokemon/models/Pokemon';
import { PokemonDataService } from 'src/app/core/services/pokemon-data.service';

@Component({
  selector: 'app-pokemon-rejected',
  templateUrl: './pokemon-rejected.component.html',
  styleUrls: ['./pokemon-rejected.component.sass']
})
export class PokemonRifiutatiComponent implements OnInit {
  public pokemon!: Pokemon[];
  public TYPE: number;
  private subscription!: Subscription;

  constructor(private pokemonDataService: PokemonDataService) {
    this.TYPE = 0;
   }

  ngOnInit(): void {
    this.subscription = this.pokemonDataService.pokemonRifiutati$
      .subscribe(data => this.pokemon = data)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
