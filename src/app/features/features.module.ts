import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsModule } from './pokemons/pokemons.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PokemonsModule
  ],
  exports: [ PokemonsModule ]
})

export class FeaturesModule { }
