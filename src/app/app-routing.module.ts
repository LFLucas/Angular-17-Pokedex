import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "pokemons", loadChildren: () => import("./features/pokemons/pokemons.module").then((m)=> m.PokemonsModule)}
  // {path: "berries", component: }
  // {path: "items", component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
