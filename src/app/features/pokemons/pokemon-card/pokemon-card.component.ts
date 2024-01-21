import { Component, HostListener, Input } from '@angular/core';
import { Pokemon } from '../../../core/interfaces/Pokemon.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'poke-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon

  constructor(private router: Router){}
  
  @HostListener("click")
  seeDetails(event: MouseEvent){
    this.router.navigate([`/${this.pokemon.id}`])  
  }

}
