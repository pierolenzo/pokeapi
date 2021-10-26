import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonModuleComponent } from './pokemon-module.component';

const routes: Routes = [{ path: '', component: PokemonModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonModuleRoutingModule { }
