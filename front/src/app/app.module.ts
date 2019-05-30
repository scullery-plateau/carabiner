import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CobblestoneComponent } from './cobblestone/cobblestone.component';
import { MastermoldComponent } from './mastermold/mastermold.component';
import { SpritelyComponent } from './spritely/spritely.component';
import { MapsComponent } from './maps/maps.component';
import { PalettesComponent } from './palettes/palettes.component';
import { TilesComponent } from './tiles/tiles.component';
import { CharactersComponent } from './characters/characters.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PixelCanvasComponent } from './pixel-canvas/pixel-canvas.component';
import { PixelPainterComponent } from './pixel-painter/pixel-painter.component';

@NgModule({
  declarations: [
    AppComponent,
    CobblestoneComponent,
    MastermoldComponent,
    SpritelyComponent,
    MapsComponent,
    PalettesComponent,
    TilesComponent,
    CharactersComponent,
    PixelCanvasComponent,
    PixelPainterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
