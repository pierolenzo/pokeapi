import { PokemonDataService } from 'src/app/core/services/pokemon-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Pokemon } from 'src/app/models/Pokemon';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.sass']
})
export class PokemonDetailsComponent implements OnInit {
  public pokemons!: Pokemon[];
  public pokemon!: Pokemon;
  public params!: Params;

  constructor(private pokemonDataService: PokemonDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => this.params = data)

    if (this.params.type == 1) {
      this.pokemonDataService.pokemonCatturati$.subscribe(data => this.pokemons = data)
      const _pokemon = this.pokemons.find(item => item.id == this.params.id);
      if (_pokemon) {
        this.pokemon = _pokemon;
      }
    } else {
      this.pokemonDataService.pokemonRifiutati$.subscribe(data => this.pokemons = data)
      const _pokemon = this.pokemons.find(item => item.id == this.params.id);
      if (_pokemon) {
        this.pokemon = _pokemon;
      }
    }

  }

}
