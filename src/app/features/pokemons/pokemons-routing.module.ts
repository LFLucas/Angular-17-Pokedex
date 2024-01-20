import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonContentComponent } from './pokemon-content/pokemon-content.component';


const routes: Routes = [
  {path: "", component: PokemonListComponent},
  {path: ":id", component: PokemonContentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
