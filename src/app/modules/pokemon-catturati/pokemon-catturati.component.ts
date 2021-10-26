import { Pokemon } from 'src/app/models/Pokemon';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonDataService } from 'src/app/core/services/pokemon-data.service';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-catturati',
  templateUrl: './pokemon-catturati.component.html',
  styleUrls: ['./pokemon-catturati.component.sass']
})
export class PokemonCatturatiComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  public pokemon!: Pokemon[];
  public TYPE: number;

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
