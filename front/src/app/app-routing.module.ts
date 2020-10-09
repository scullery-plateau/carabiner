import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CobblestoneComponent} from "./cobblestone/cobblestone.component";
import {SpritelyComponent} from "./spritely/spritely.component";
import {MastermoldComponent} from "./mastermold/mastermold.component";
import {OutfitterComponent} from "./outfitter/outfitter.component";

const routes: Routes = [
  { path: '', redirectTo: '/outfitter', pathMatch: 'full' },
  { path: 'cobblestone', component: CobblestoneComponent },
  { path: 'outfitter', component: OutfitterComponent },
  { path: 'mastermold', component: MastermoldComponent },
  { path: 'spritely', component: SpritelyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
