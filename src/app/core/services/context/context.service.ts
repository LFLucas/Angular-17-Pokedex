import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeData, Pokemon } from '../../interfaces/Pokemon.interface';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 
export class ContextService {

  constructor(private httpClient: HttpClient) { this.fetchAll(0)}
  
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
          return pokeData })
  )}



  fetchID(id: number){
    return this.httpClient.get<Pokemon>(environment.API_POKEMON_URL + id)
  }



  fetchSearch(name: string){
    if(!name) return this.fetchAll(0)
    //3 return the observable
    return this.httpClient.get<PokeData>(`${environment.API_POKEMON_URL}?offset=${0}&limit=${100000}`).pipe(
    //1 search the name     
      map<PokeData, PokeData>((pokeData)=>{
        console.log(pokeData.results)
        pokeData.results = pokeData.results.filter(pokemon => pokemon.name.includes(name))
        console.log(pokeData.results)
        return pokeData
      }),
    //2 fetch the data
      map<PokeData, PokeData>( (pokeData)=>{
        pokeData.results.forEach( (pokemon)=>{
          this.httpClient.get<Pokemon>(pokemon.url).subscribe({
            next: (pokedata) => pokemon.pokemon = pokedata,
            error: (error) => console.log(error),
            complete: () => console.log("complete") })
        })
        return pokeData })
  )}

}