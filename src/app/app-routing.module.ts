import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pokemon', loadChildren: () => import('./modules/pokemon-module/pokemon-module.module').then(m => m.PokemonModuleModule) },
  { path: '', pathMatch: 'full', redirectTo: '/pokemon' },
  { path: '**', redirectTo: '/pokemon' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
