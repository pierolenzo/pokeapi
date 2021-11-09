import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pokemon', loadChildren: () => import('./features/pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: '', pathMatch: 'full', redirectTo: '/pokemon' },
  { path: '**', redirectTo: '/pokemon' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
