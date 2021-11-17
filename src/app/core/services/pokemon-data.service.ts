import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Pokemon } from 'src/app/features/pokemon/models/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  public catchedPokemon$: Observable<Pokemon[]>;
  public rejectedPokemon$: Observable<Pokemon[]>;
  public catchedPokemons: Pokemon[];
  public rejectedPokemons: Pokemon[];

  private URL: string;
  private MAX_POKEMON: number;
  private POKEMON_CATTURATI_KEY: string = 'pokemonCatturati';
  private POKEMON_RIFIUTATI_KEY: string = 'pokemonRifiutati';
  private catchedPokemonsSubject: BehaviorSubject<Pokemon[]>;
  private rejectPokemonsSubject: BehaviorSubject<Pokemon[]>;

  constructor(private http: HttpClient) {
    this.URL = 'https://pokeapi.co/api/v2/pokemon';
    this.MAX_POKEMON = 898;
    this.catchedPokemons = [];
    this.rejectedPokemons = [];

    this.catchedPokemonsSubject = new BehaviorSubject<Pokemon[]>([]);
    this.rejectPokemonsSubject = new BehaviorSubject<Pokemon[]>([]);
    this.catchedPokemon$ = this.catchedPokemonsSubject.asObservable();
    this.rejectedPokemon$ = this.rejectPokemonsSubject.asObservable();
  }

  /**
   * get() - Get jokes from API
   */
  public get(): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(`${this.URL}/${this.generateRndom()}`)
      .pipe(retry(3), catchError(this.handleError));
  }

  /**
   * catturaPokemon()
   */
  public catturaPokemon(pokemon: Pokemon) {
    if (!this.catchedPokemons.includes(pokemon)) {
      this.catchedPokemons.push(pokemon);
      this.catchedPokemonsSubject.next(this.catchedPokemons);
      console.log('service catturaPokemon', pokemon);
    } else {
      console.error(`Pokemon ${pokemon.name} già presente`);
    }
  }

  /**
   * rifiutaPokemon()
   */
  public rifiutaPokemon(pokemon: Pokemon) {
    if (!this.rejectedPokemons.includes(pokemon)) {
      this.rejectedPokemons.push(pokemon);
      this.rejectPokemonsSubject.next(this.rejectedPokemons);
      console.log('service rifiutaPokemon', pokemon);
    } else {
      console.error(`Pokemon ${pokemon.name} già presente`);
    }
  }

  /**
   * generateRandom()
   */
  public generateRndom() {
    return Math.floor(Math.random() * (this.MAX_POKEMON - 1) + 1);
  }

  /**
   * handlerError()
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}
          body was: ${error.error}`
      );
    }

    return throwError('Something bad happen; please try again later.');
  }
}
