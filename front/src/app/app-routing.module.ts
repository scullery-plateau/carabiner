import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CobblestoneComponent} from "./cobblestone/cobblestone.component";
import {SpritelyComponent} from "./spritely/spritely.component";
import {MastermoldComponent} from "./mastermold/mastermold.component";

const routes: Routes = [
  { path: '', redirectTo: '/spritely', pathMatch: 'full' },
  { path: 'cobblestone', component: CobblestoneComponent },
  { path: 'mastermold', component: MastermoldComponent },
  { path: 'spritely', component: SpritelyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
