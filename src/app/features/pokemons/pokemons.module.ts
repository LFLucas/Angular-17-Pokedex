import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonContentComponent } from './pokemon-content/pokemon-content.component';
import { RouterModule } from '@angular/router';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent,
    PokemonContentComponent,
  ],
  imports: [
    PokemonsRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    PokemonListComponent,
    PokemonContentComponent
  ]
})
export class PokemonsModule { }
