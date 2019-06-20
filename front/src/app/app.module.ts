import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CobblestoneComponent } from './cobblestone/cobblestone.component';
import { MastermoldComponent } from './mastermold/mastermold.component';
import { SpritelyComponent } from './spritely/spritely.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PixelCanvasComponent } from './pixel-canvas/pixel-canvas.component';
import { PixelPainterComponent } from './pixel-painter/pixel-painter.component';
import { PalettesAndTilesComponent } from './cobblestone/palettes-and-tiles/palettes-and-tiles.component';
import { PaletteDisplayComponent } from './util/palette-display/palette-display.component';
import { DialogWrapperComponent } from './util/dialog-wrapper/dialog-wrapper.component';
import { AccordianComponent } from './util/accordian/accordian.component';
import { TransformedTilesComponent } from './cobblestone/transformed-tiles/transformed-tiles.component';
import { CobblestoneMapComponent } from './cobblestone/cobblestone-map/cobblestone-map.component';
import { MapPagePickerComponent } from './cobblestone/map-page-picker/map-page-picker.component';
import { TabbedPanelComponent } from './util/nes-tabs/tabbed-panel/tabbed-panel.component';
import { ChildPanelComponent } from './util/nes-tabs/child-panel/child-panel.component';
import { TileDisplayComponent } from './cobblestone/tile-display/tile-display.component';
import { FileFormComponent } from './util/file-form/file-form.component';
import { TilePixelsComponent } from './cobblestone/tile-pixels/tile-pixels.component';
import { FileLoadInputComponent } from './util/file-load-input/file-load-input.component';
import { TileCanvasComponent } from './cobblestone/tile-canvas/tile-canvas.component';

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
    AccordianComponent,
    TransformedTilesComponent,
    CobblestoneMapComponent,
    MapPagePickerComponent,
    TabbedPanelComponent,
    ChildPanelComponent,
    TileDisplayComponent,
    FileFormComponent,
    TilePixelsComponent,
    FileLoadInputComponent,
    TileCanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
