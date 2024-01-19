import { Component, OnInit } from '@angular/core';
import { ContextService } from '../../../core/services/context/context.service';
import { PokeData, Pokemon } from '../../../core/interfaces/Pokemon.interface';

@Component({
  selector: 'poke-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{
  public pokeList?: PokeData 
  public page: number = 0
  
  constructor( private context: ContextService ){}
  
  ngOnInit(): void {
    this.nextPage()
  }

  nextPage(){
    this.context.fetchAll(this.page++).subscribe({
      next:  (data) => this.pokeList = data,
      error: (error) => console.log(error),
      complete: () => console.log("complete") })
  }

  prevPage(){
    this.context.fetchAll(this.page--).subscribe({
      next:  (data) => this.pokeList = data,
      error: (error) => console.log(error),
      complete: () => console.log("complete") })
  }
}
