import { Component, OnInit } from '@angular/core';
import { ContextService } from '../../../core/services/context/context.service';
import { PokeData } from '../../../core/interfaces/Pokemon.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'poke-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{
  public pokeList?: PokeData 
  
  public page: number = -1

  public searchGroup: FormGroup = this.formBuilder.group({
    search: [""]
  })
  
  constructor( private context: ContextService,
               private formBuilder: FormBuilder ){}
  
  ngOnInit(): void {
    this.nextPage()
  }

  nextPage(){
    this.context.fetchAll(++this.page).subscribe({
      next:  (data) => this.pokeList = data,
      error: (error) => console.log(error),
      complete: () => console.log("complete") })
  }

  prevPage(){
    this.context.fetchAll(--this.page).subscribe({
      next:  (data) => this.pokeList = data,
      error: (error) => console.log(error),
      complete: () => console.log("complete") })
  }

  search(){
    this.context.fetchSearch(this.searchGroup.controls["search"].value).subscribe({
      next: (data) => this.pokeList = data,
      error: (error) => console.log(error),
      complete: () => console.log("complete"),
    })
  }
}
