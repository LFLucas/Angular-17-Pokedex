import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeData, Pokemon } from '../../interfaces/Pokemon.interface';
import { environment } from '../../../../environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 
export class ContextService {
  constructor(private httpClient: HttpClient) { this.fetch()}

  fetch(){
    return this.httpClient.get<PokeData>(environment.API_POKEMON_URL).pipe<PokeData>(
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

}
    


  














