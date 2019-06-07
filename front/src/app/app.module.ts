import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CobblestoneComponent } from './cobblestone/cobblestone.component';
import { MastermoldComponent } from './mastermold/mastermold.component';
import { SpritelyComponent } from './spritely/spritely.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PixelCanvasComponent } from './pixel-canvas/pixel-canvas.component';
import { PixelPainterComponent } from './pixel-painter/pixel-painter.component';
import { PalettesAndTilesComponent } from './palettes-and-tiles/palettes-and-tiles.component';
import { PaletteDisplayComponent } from './palette-display/palette-display.component';
import { DialogWrapperComponent } from './dialog-wrapper/dialog-wrapper.component';
import { AccordianComponent } from './accordian/accordian.component';

@NgModule({
  declarations: [
    AppComponent,
    CobblestoneComponent,
    MastermoldComponent,
    SpritelyComponent,
    PixelCanvasComponent,
    PixelPainterComponent,
    PalettesAndTilesComponent,
    PaletteDisplayComponent,
    DialogWrapperComponent,
    AccordianComponent
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
