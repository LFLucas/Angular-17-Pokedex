import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeData, Pokemon } from '../../interfaces/Pokemon.interface';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 
export class ContextService {
  constructor(private httpClient: HttpClient) { this.fetchAll(1)}

  fetchAll(page: number, limit: number = 20){
    return this.httpClient.get<PokeData>(`${environment.API_POKEMON_URL}?offset=${limit * page}&limit=${limit}`)
      .pipe<PokeData>(
        map<PokeData, PokeData>( (pokeData)=>{
          pokeData.results.forEach( (pokemon)=>{
            this.httpClient.get<Pokemon>(pokemon.url).subscribe({
              next: (pokedata) => pokemon.pokemon = pokedata,
              error: (error) => console.log(error),
              complete: () => console.log("complete") })
          })
          return pokeData }),
  )}

  fetchID(id: number){
    return this.httpClient.get<Pokemon>(environment.API_POKEMON_URL + id)
  }

  search(name: string){
    return this.httpClient.get<PokeData>(`${environment.API_POKEMON_URL}?offset=${100000}&limit=${100000}`).pipe(
      
    )
  }










}