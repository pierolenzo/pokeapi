import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PokemonDataService } from 'src/app/core/services/pokemon-data.service';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-pokemon-rifiutati',
  templateUrl: './pokemon-rifiutati.component.html',
  styleUrls: ['./pokemon-rifiutati.component.sass']
})
export class PokemonRifiutatiComponent implements OnInit {
  private subscription!: Subscription;
  public pokemon!: Pokemon[];
  public TYPE: number;

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
