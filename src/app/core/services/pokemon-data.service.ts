import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Pokemon } from 'src/app/features/pokemon/models/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  public pokemonCatturati$!: Observable<Pokemon[]>;
  public pokemonRifiutati$!: Observable<Pokemon[]>;
  public pokesCatturati!: Pokemon[];
  public pokesRifiutati!: Pokemon[];

  private URL: string;
  private MAX_POKEMON: number;
  private POKEMON_CATTURATI_KEY: string = 'pokemonCatturati';
  private POKEMON_RIFIUTATI_KEY: string = 'pokemonRifiutati';
  private pokemonCatturati!: BehaviorSubject<Pokemon[]>;
  private pokemonRifiutati!: BehaviorSubject<Pokemon[]>;

  constructor(private http: HttpClient) {
    this.URL = 'https://pokeapi.co/api/v2/pokemon';
    this.MAX_POKEMON = 898;
    this.pokesCatturati = [];
    this.pokesRifiutati = [];

    this.pokemonCatturati = new BehaviorSubject<Pokemon[]>([]);
    this.pokemonRifiutati = new BehaviorSubject<Pokemon[]>([]);
    this.pokemonCatturati$ = this.pokemonCatturati.asObservable();
    this.pokemonRifiutati$ = this.pokemonRifiutati.asObservable();
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
    this.pokesCatturati.push(pokemon);
    this.pokemonCatturati.next(this.pokesCatturati);
    console.log('service catturaPokemon', pokemon);
  }

  /**
   * rifiutaPokemon()
   */
  public rifiutaPokemon(pokemon: Pokemon) {
    this.pokesRifiutati.push(pokemon);
    this.pokemonRifiutati.next(this.pokesRifiutati);
    console.log('service rifiutaPokemon', pokemon);
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
