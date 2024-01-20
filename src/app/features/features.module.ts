import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsModule } from './pokemons/pokemons.module';
import { BerriesModule } from './berries/berries.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PokemonsModule,
    BerriesModule
  ],
  exports: [ PokemonsModule ]
})

export class FeaturesModule { }
