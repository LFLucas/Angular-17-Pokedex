import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../core/interfaces/Pokemon.interface';
import { ContextService } from '../../../core/services/context/context.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'poke-pokemon-content',
  templateUrl: './pokemon-content.component.html',
  styleUrl: './pokemon-content.component.css'
})
export class PokemonContentComponent implements OnInit{
  public pokemon?: Pokemon
  
  constructor(private context: ContextService,
              private activeRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    this.context.fetchID(this.activeRoute.snapshot.params["id"]).subscribe({
      next: (pokemon) => this.pokemon = pokemon,
      error: (error) => console.log(error),
      complete: () => console.log("Complete")      
    })
  }
}
