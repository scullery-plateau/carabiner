(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accordian/accordian.component.html":
/*!****************************************************!*\
  !*** ./src/app/accordian/accordian.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div #accordianTab [attr.id]=\"tabId\" [ngClass]=\"{'col-md-12':true,'hide':(initCollapsed == false)}\">\r\n    <button class=\"nes-btn is-primary nes-accordian\" (click)=\"expand()\">{{label}}</button>\r\n  </div>\r\n  <div #accordianContainer [ngClass]=\"{'col-md-12':true,'hide':initCollapsed}\" [attr.id]=\"containerId\">\r\n    <div class=\"showcase\">\r\n      <div class=\"nes-container with-title\">\r\n        <div class=\"title\">\r\n          <label>{{label}}</label>\r\n        </div>\r\n        <ng-content></ng-content>\r\n        <button class=\"nes-btn is-primary minimize\"  (click)=\"collapse()\">^</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/accordian/accordian.component.scss":
/*!****************************************************!*\
  !*** ./src/app/accordian/accordian.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY29yZGlhbi9hY2NvcmRpYW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/accordian/accordian.component.ts":
/*!**************************************************!*\
  !*** ./src/app/accordian/accordian.component.ts ***!
  \**************************************************/
/*! exports provided: AccordianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordianComponent", function() { return AccordianComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccordianComponent = /** @class */ (function () {
    function AccordianComponent() {
    }
    AccordianComponent.prototype.ngOnInit = function () {
    };
    AccordianComponent.prototype.expand = function () {
        console.log('expand');
        this.tabRef.nativeElement.classList.add("hide");
        this.containerRef.nativeElement.classList.remove("hide");
    };
    AccordianComponent.prototype.collapse = function () {
        console.log('collapse');
        this.tabRef.nativeElement.classList.remove("hide");
        this.containerRef.nativeElement.classList.add("hide");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('accordianTab'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AccordianComponent.prototype, "tabRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('accordianContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AccordianComponent.prototype, "containerRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccordianComponent.prototype, "tabId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccordianComponent.prototype, "containerId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AccordianComponent.prototype, "initCollapsed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccordianComponent.prototype, "label", void 0);
    AccordianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'accordian',
            template: __webpack_require__(/*! ./accordian.component.html */ "./src/app/accordian/accordian.component.html"),
            styles: [__webpack_require__(/*! ./accordian.component.scss */ "./src/app/accordian/accordian.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccordianComponent);
    return AccordianComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cobblestone_cobblestone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cobblestone/cobblestone.component */ "./src/app/cobblestone/cobblestone.component.ts");
/* harmony import */ var _spritely_spritely_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spritely/spritely.component */ "./src/app/spritely/spritely.component.ts");
/* harmony import */ var _mastermold_mastermold_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mastermold/mastermold.component */ "./src/app/mastermold/mastermold.component.ts");






var routes = [
    { path: '', redirectTo: '/spritely', pathMatch: 'full' },
    { path: 'cobblestone', component: _cobblestone_cobblestone_component__WEBPACK_IMPORTED_MODULE_3__["CobblestoneComponent"] },
    { path: 'mastermold', component: _mastermold_mastermold_component__WEBPACK_IMPORTED_MODULE_5__["MastermoldComponent"] },
    { path: 'spritely', component: _spritely_spritely_component__WEBPACK_IMPORTED_MODULE_4__["SpritelyComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<header class=\"sticky\">\r\n  <nav class=\"navbar navbar-expand-sm bg-primary navbar-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\"><h2>{{title}}</h2></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\" onclick=\"toggleDropDown('collapsibleNavbar')\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#/spritely\">Spritely</a>\r\n        </li>\r\n        <!--\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#/cobblestone\">CobbleStone</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#/mastermold\">MasterMold</a>\r\n        </li>\r\n        -->\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n<p></p>\r\n<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<footer class=\"text-center\" style=\"margin-bottom:0\">\r\n  <p>Built by Daniel Allen Johnson &copy; 2019</p>\r\n  <p>Contact at <a href=\"https://twitter.com/voltron42\" target=\"_blank\">@voltron42</a> on Twitter.</p>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Scullery-Plateau';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cobblestone_cobblestone_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cobblestone/cobblestone.component */ "./src/app/cobblestone/cobblestone.component.ts");
/* harmony import */ var _mastermold_mastermold_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mastermold/mastermold.component */ "./src/app/mastermold/mastermold.component.ts");
/* harmony import */ var _spritely_spritely_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spritely/spritely.component */ "./src/app/spritely/spritely.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pixel_canvas_pixel_canvas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pixel-canvas/pixel-canvas.component */ "./src/app/pixel-canvas/pixel-canvas.component.ts");
/* harmony import */ var _pixel_painter_pixel_painter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pixel-painter/pixel-painter.component */ "./src/app/pixel-painter/pixel-painter.component.ts");
/* harmony import */ var _palettes_and_tiles_palettes_and_tiles_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./palettes-and-tiles/palettes-and-tiles.component */ "./src/app/palettes-and-tiles/palettes-and-tiles.component.ts");
/* harmony import */ var _palette_display_palette_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./palette-display/palette-display.component */ "./src/app/palette-display/palette-display.component.ts");
/* harmony import */ var _dialog_wrapper_dialog_wrapper_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialog-wrapper/dialog-wrapper.component */ "./src/app/dialog-wrapper/dialog-wrapper.component.ts");
/* harmony import */ var _accordian_accordian_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./accordian/accordian.component */ "./src/app/accordian/accordian.component.ts");
/* harmony import */ var _transformed_tiles_transformed_tiles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./transformed-tiles/transformed-tiles.component */ "./src/app/transformed-tiles/transformed-tiles.component.ts");
/* harmony import */ var _cobblestone_map_cobblestone_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cobblestone-map/cobblestone-map.component */ "./src/app/cobblestone-map/cobblestone-map.component.ts");
/* harmony import */ var _map_page_picker_map_page_picker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./map-page-picker/map-page-picker.component */ "./src/app/map-page-picker/map-page-picker.component.ts");
/* harmony import */ var _nes_tabs_tabbed_panel_tabbed_panel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nes-tabs/tabbed-panel/tabbed-panel.component */ "./src/app/nes-tabs/tabbed-panel/tabbed-panel.component.ts");
/* harmony import */ var _nes_tabs_child_panel_child_panel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nes-tabs/child-panel/child-panel.component */ "./src/app/nes-tabs/child-panel/child-panel.component.ts");
/* harmony import */ var _tile_display_tile_display_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tile-display/tile-display.component */ "./src/app/tile-display/tile-display.component.ts");
/* harmony import */ var _file_form_file_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./file-form/file-form.component */ "./src/app/file-form/file-form.component.ts");
/* harmony import */ var _tile_pixels_tile_pixels_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tile-pixels/tile-pixels.component */ "./src/app/tile-pixels/tile-pixels.component.ts");
/* harmony import */ var _file_load_input_file_load_input_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./file-load-input/file-load-input.component */ "./src/app/file-load-input/file-load-input.component.ts");
/* harmony import */ var _download_link_download_link_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./download-link/download-link.component */ "./src/app/download-link/download-link.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _cobblestone_cobblestone_component__WEBPACK_IMPORTED_MODULE_5__["CobblestoneComponent"],
                _mastermold_mastermold_component__WEBPACK_IMPORTED_MODULE_6__["MastermoldComponent"],
                _spritely_spritely_component__WEBPACK_IMPORTED_MODULE_7__["SpritelyComponent"],
                _pixel_canvas_pixel_canvas_component__WEBPACK_IMPORTED_MODULE_9__["PixelCanvasComponent"],
                _pixel_painter_pixel_painter_component__WEBPACK_IMPORTED_MODULE_10__["PixelPainterComponent"],
                _palettes_and_tiles_palettes_and_tiles_component__WEBPACK_IMPORTED_MODULE_11__["PalettesAndTilesComponent"],
                _palette_display_palette_display_component__WEBPACK_IMPORTED_MODULE_12__["PaletteDisplayComponent"],
                _dialog_wrapper_dialog_wrapper_component__WEBPACK_IMPORTED_MODULE_13__["DialogWrapperComponent"],
                _accordian_accordian_component__WEBPACK_IMPORTED_MODULE_14__["AccordianComponent"],
                _transformed_tiles_transformed_tiles_component__WEBPACK_IMPORTED_MODULE_15__["TransformedTilesComponent"],
                _cobblestone_map_cobblestone_map_component__WEBPACK_IMPORTED_MODULE_16__["CobblestoneMapComponent"],
                _map_page_picker_map_page_picker_component__WEBPACK_IMPORTED_MODULE_17__["MapPagePickerComponent"],
                _nes_tabs_tabbed_panel_tabbed_panel_component__WEBPACK_IMPORTED_MODULE_18__["TabbedPanelComponent"],
                _nes_tabs_child_panel_child_panel_component__WEBPACK_IMPORTED_MODULE_19__["ChildPanelComponent"],
                _tile_display_tile_display_component__WEBPACK_IMPORTED_MODULE_20__["TileDisplayComponent"],
                _file_form_file_form_component__WEBPACK_IMPORTED_MODULE_21__["FileFormComponent"],
                _tile_pixels_tile_pixels_component__WEBPACK_IMPORTED_MODULE_22__["TilePixelsComponent"],
                _file_load_input_file_load_input_component__WEBPACK_IMPORTED_MODULE_23__["FileLoadInputComponent"],
                _download_link_download_link_component__WEBPACK_IMPORTED_MODULE_24__["DownloadLinkComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/char-config.ts":
/*!********************************!*\
  !*** ./src/app/char-config.ts ***!
  \********************************/
/*! exports provided: CharConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharConfig", function() { return CharConfig; });
var CharConfig = /** @class */ (function () {
    function CharConfig() {
    }
    return CharConfig;
}());



/***/ }),

/***/ "./src/app/cobblestone-map.ts":
/*!************************************!*\
  !*** ./src/app/cobblestone-map.ts ***!
  \************************************/
/*! exports provided: CobblestoneMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobblestoneMap", function() { return CobblestoneMap; });
var CobblestoneMap = /** @class */ (function () {
    function CobblestoneMap() {
    }
    return CobblestoneMap;
}());



/***/ }),

/***/ "./src/app/cobblestone-map/cobblestone-map.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cobblestone-map/cobblestone-map.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-4\">\n    <div class=\"showcase\">\n      <div class=\"nes-container\">\n        <div class=\"col-12\" *ngFor=\"let key of state.transforms.keys()\">\n          <button (click)=\"select(key)\">\n            <tile-display\n              [state]=\"state\"\n              [key]=\"key\">\n            </tile-display>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-8\">\n    <div class=\"showcase\">\n      <div class=\"nes-container\">\n        <form [formGroup]=\"dimForm\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <label for=\"width\" class=\"text-brand\">Width:</label>\n              <input type=\"number\" min=\"8\" max=\"64\" id=\"width\" class=\"nes-input\" formControlName=\"width\" (change)=\"resize()\"/>\n            </div>\n            <div class=\"col-md-4\">\n              <label for=\"height\" class=\"text-brand\">Height:</label>\n              <input type=\"number\" min=\"8\" max=\"64\" id=\"height\" class=\"nes-input\" formControlName=\"height\" (change)=\"resize()\"/>\n            </div>\n            <div class=\"col-md-4\">\n              <label for=\"scale\" class=\"text-brand\">Scale:</label>\n              <input type=\"number\" min=\"1\" max=\"4\" id=\"scale\" class=\"nes-input\" formControlName=\"scale\" (change)=\"resize()\"/>\n            </div>\n          </div>\n        </form>\n        <div class=\"row\">\n          <div class=\"col-12 map-frame\">\n            <svg\n              [attr.width]=\"dimForm.value.width * dimForm.value.scale * 16\"\n              [attr.height]=\"dimForm.value.height * dimForm.value.scale * 16\">\n              <defs>\n                <g id=\"bg\">\n                  <rect x=\"0\" y=\"0\"\n                    [attr.width]=\"dimForm.value.scale * 16\"\n                    [attr.height]=\"dimForm.value.scale * 16\"\n                    fill=\"white\"\n                    style=\"stroke:black;stroke-width:2\"/>\n                </g>\n                <ng-container *ngFor=\"let key of state.transforms.keys()\">\n                  <g [id]=\"key\">\n                    <ng-container *ngFor=\"let y of range.max(16)\">\n                      <ng-container *ngFor=\"let x of range.max(16)\">\n                        <svg:rect [attr.x]=\"x * dimForm.value.scale\" [attr.y]=\"y * dimForm.value.scale\"\n                          [attr.width]=\"dimForm.value.scale\" [attr.height]=\"dimForm.value.scale\"\n                          [attr.fill]=\"pixel(key,x,y)\" style=\"stroke:none;\"></svg:rect>\n                      </ng-container>\n                    </ng-container>\n                  </g>\n                </ng-container>\n              </defs>\n              <ng-container *ngFor=\"let y of range.max(dimForm.value.height)\">\n                <ng-container *ngFor=\"let x of range.max(dimForm.value.width)\">\n                  <a href=\"#/cobblestone\" (click)=\"setTile(x,y)\">\n                    <use [attr.href]=\"'#' + getTile(x,y)\"\n                    [attr.x]=\"x * dimForm.value.scale * 16\"\n                    [attr.y]=\"y * dimForm.value.scale * 16\"/>\n                  </a>\n                </ng-container>\n              </ng-container>\n            </svg>\n          </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cobblestone-map/cobblestone-map.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/cobblestone-map/cobblestone-map.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "map-frame {\n  overflow: scroll;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29iYmxlc3RvbmUtbWFwL0M6XFxjb2RlXFxjYXJhYmluZXJcXGZyb250L3NyY1xcYXBwXFxjb2JibGVzdG9uZS1tYXBcXGNvYmJsZXN0b25lLW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29iYmxlc3RvbmUtbWFwL2NvYmJsZXN0b25lLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hcC1mcmFtZSB7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/cobblestone-map/cobblestone-map.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cobblestone-map/cobblestone-map.component.ts ***!
  \**************************************************************/
/*! exports provided: CobblestoneMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobblestoneMapComponent", function() { return CobblestoneMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../range */ "./src/app/range.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../point */ "./src/app/point.ts");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../trigger */ "./src/app/trigger.ts");






var CobblestoneMapComponent = /** @class */ (function () {
    function CobblestoneMapComponent(fb) {
        this.fb = fb;
        this.dimForm = this.fb.group({
            width: [8],
            height: [10],
            scale: [3]
        });
        this.range = _range__WEBPACK_IMPORTED_MODULE_3__["Range"];
    }
    CobblestoneMapComponent.prototype.ngOnInit = function () {
    };
    CobblestoneMapComponent.prototype.updateFromFile = function () {
    };
    CobblestoneMapComponent.prototype.select = function (key) {
        this.activeKey = key;
    };
    CobblestoneMapComponent.prototype.setTile = function (x, y) {
        var key = (new _point__WEBPACK_IMPORTED_MODULE_4__["Point"](x, y)).toString();
        if (this.state.map[key]) {
            delete this.state.map[key];
        }
        else {
            if (this.state.transforms[this.activeKey]) {
                this.state.map[key] = this.activeKey;
            }
        }
    };
    CobblestoneMapComponent.prototype.getTile = function (x, y) {
        var p = new _point__WEBPACK_IMPORTED_MODULE_4__["Point"](x, y);
        return this.state.map[p.toString()] || "bg";
    };
    CobblestoneMapComponent.prototype.pixel = function (key, x, y) {
        var tfTile = this.state.transforms[key];
        var palette = tfTile.palette;
        var tile = tfTile.tile;
        var p = (new _point__WEBPACK_IMPORTED_MODULE_4__["Point"](x, y)).toString();
        return palette[tile[p] || 0];
    };
    CobblestoneMapComponent.prototype.resize = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CobblestoneMapComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _trigger__WEBPACK_IMPORTED_MODULE_5__["Trigger"])
    ], CobblestoneMapComponent.prototype, "loadTrigger", void 0);
    CobblestoneMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cobblestone-map',
            template: __webpack_require__(/*! ./cobblestone-map.component.html */ "./src/app/cobblestone-map/cobblestone-map.component.html"),
            styles: [__webpack_require__(/*! ./cobblestone-map.component.scss */ "./src/app/cobblestone-map/cobblestone-map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CobblestoneMapComponent);
    return CobblestoneMapComponent;
}());



/***/ }),

/***/ "./src/app/cobblestone.service.ts":
/*!****************************************!*\
  !*** ./src/app/cobblestone.service.ts ***!
  \****************************************/
/*! exports provided: CobblestoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobblestoneService", function() { return CobblestoneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cobblestone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cobblestone */ "./src/app/cobblestone.ts");
/* harmony import */ var _cobblestone_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cobblestone-map */ "./src/app/cobblestone-map.ts");
/* harmony import */ var _char_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./char-config */ "./src/app/char-config.ts");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tile */ "./src/app/tile.ts");






var CobblestoneService = /** @class */ (function () {
    function CobblestoneService() {
        this.state = new _cobblestone__WEBPACK_IMPORTED_MODULE_2__["Cobblestone"]();
    }
    CobblestoneService.prototype.getMapNames = function () {
        return Array.from(this.state.maps.keys());
    };
    CobblestoneService.prototype.getMap = function (mapName) {
        return this.state.maps.get(mapName);
    };
    CobblestoneService.prototype.hasMap = function (mapName) {
        return this.state.maps.has(mapName);
    };
    CobblestoneService.prototype.addMap = function (mapName) {
        this.state.maps.set(mapName, new _cobblestone_map__WEBPACK_IMPORTED_MODULE_3__["CobblestoneMap"]());
    };
    CobblestoneService.prototype.getPaletteNames = function () {
        return Array.from(this.state.palettes.keys());
    };
    CobblestoneService.prototype.getPalette = function (paletteName) {
        return this.state.palettes.get(paletteName);
    };
    CobblestoneService.prototype.hasPalette = function (paletteName) {
        return this.state.palettes.has(paletteName);
    };
    CobblestoneService.prototype.addPalette = function (paletteName) {
        this.state.palettes.set(paletteName, []);
    };
    CobblestoneService.prototype.getTileNames = function () {
        return Array.from(this.state.tiles.keys());
    };
    CobblestoneService.prototype.getTile = function (tileName) {
        return this.state.tiles.get(tileName);
    };
    CobblestoneService.prototype.hasTile = function (tileName) {
        return this.state.tiles.has(tileName);
    };
    CobblestoneService.prototype.addTile = function (tileName) {
        this.state.tiles.set(tileName, new _tile__WEBPACK_IMPORTED_MODULE_5__["Tile"]());
    };
    CobblestoneService.prototype.getCharacters = function () {
        return Array.from(this.state.chars.keys());
    };
    CobblestoneService.prototype.getCharConfig = function (char) {
        return this.state.chars.get(char);
    };
    CobblestoneService.prototype.hasCharacter = function (char) {
        return this.state.chars.has(char);
    };
    CobblestoneService.prototype.addCharacter = function (char) {
        this.state.chars.set(char, new _char_config__WEBPACK_IMPORTED_MODULE_4__["CharConfig"]());
    };
    CobblestoneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CobblestoneService);
    return CobblestoneService;
}());



/***/ }),

/***/ "./src/app/cobblestone.ts":
/*!********************************!*\
  !*** ./src/app/cobblestone.ts ***!
  \********************************/
/*! exports provided: Cobblestone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cobblestone", function() { return Cobblestone; });
var Cobblestone = /** @class */ (function () {
    function Cobblestone() {
        this.maps = new Map();
        this.palettes = new Map();
        this.tiles = new Map();
        this.chars = new Map();
    }
    return Cobblestone;
}());



/***/ }),

/***/ "./src/app/cobblestone/cobblestone.component.html":
/*!********************************************************!*\
  !*** ./src/app/cobblestone/cobblestone.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"><div class=\"col-1\"><p></p></div></div>\r\n<tabbed-panel\r\n  title=\"CobbleStone\"\r\n  activeClass=\"is-success\"\r\n  initActiveIndex=\"0\">\r\n  <tab-child label=\"File\">\r\n    <file-form\r\n      [defaultSaveFile]=\"defaultSaveFile\"\r\n      [prepareLoadedData]=\"fileLoadHandler\"\r\n      [fileLoadCallback]=\"fileLoadCallback()\"\r\n      [buildSaveData]=\"saveDataCompiler()\"\r\n      >\r\n    </file-form>\r\n  </tab-child>\r\n  <tab-child label=\"Palettes &amp; Tiles\">\r\n    <app-palettes-and-tiles [state]=\"state\" [loadTrigger]=\"loadTrigger\"></app-palettes-and-tiles>\r\n  </tab-child>\r\n  <tab-child label=\"Transforms\">\r\n    <app-transformed-tiles [state]=\"state\" [loadTrigger]=\"loadTrigger\"></app-transformed-tiles>\r\n  </tab-child>\r\n  <tab-child label=\"Map\">\r\n    <app-cobblestone-map [state]=\"state\" [loadTrigger]=\"loadTrigger\"></app-cobblestone-map>\r\n  </tab-child>\r\n  <!--\r\n  <tab-child label=\"Paging\">\r\n    <app-map-page-picker [state]=\"state\"></app-map-page-picker>\r\n  </tab-child>\r\n  -->\r\n</tabbed-panel>\r\n<div class=\"row\"><div class=\"col-1\"><p></p></div></div>\r\n<div class=\"print-cobblestone\">This will be printed</div>\r\n"

/***/ }),

/***/ "./src/app/cobblestone/cobblestone.component.scss":
/*!********************************************************!*\
  !*** ./src/app/cobblestone/cobblestone.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen {\n  .print-cobblestone {\n    display: none; } }\n\n@media print {\n  footer {\n    display: none; }\n  .print-cobblestone {\n    display: block; }\n  tabbed-panel {\n    display: none; }\n  header {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29iYmxlc3RvbmUvQzpcXGNvZGVcXGNhcmFiaW5lclxcZnJvbnQvc3JjXFxhcHBcXGNvYmJsZXN0b25lXFxjb2JibGVzdG9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLGFBQWEsRUFBQTtFQUVmO0lBQ0UsY0FBYyxFQUFBO0VBRWhCO0lBQ0UsYUFBYSxFQUFBO0VBRWY7SUFDRSxhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiB7XHJcbiAgLnByaW50LWNvYmJsZXN0b25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIGZvb3RlciAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnByaW50LWNvYmJsZXN0b25lIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICB0YWJiZWQtcGFuZWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/cobblestone/cobblestone.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cobblestone/cobblestone.component.ts ***!
  \******************************************************/
/*! exports provided: CobblestoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobblestoneComponent", function() { return CobblestoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cobblestone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cobblestone.service */ "./src/app/cobblestone.service.ts");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trigger */ "./src/app/trigger.ts");





var CobblestoneComponent = /** @class */ (function () {
    function CobblestoneComponent(fb, cobblestoneService) {
        this.fb = fb;
        this.cobblestoneService = cobblestoneService;
        this.state = {
            palettes: {},
            tiles: {},
            transforms: {},
            map: {},
            pages: []
        };
        this.loadTrigger = new _trigger__WEBPACK_IMPORTED_MODULE_4__["Trigger"]("on-file-load");
    }
    CobblestoneComponent.prototype.ngOnInit = function () {
    };
    CobblestoneComponent.prototype.saveDataCompiler = function () {
        var me = this;
        return function () {
            return JSON.stringify(me.state);
        };
    };
    CobblestoneComponent.prototype.fileLoadHandler = function (fileData) {
        return JSON.parse(fileData);
    };
    CobblestoneComponent.prototype.fileLoadCallback = function () {
        var me = this;
        return function (json) {
            ['palettes', 'tiles', 'transforms', 'map'].forEach(function (key) {
                Object.entries(json[key]).forEach(function (entry) {
                    me.state[key][entry[0]] = entry[1];
                });
            });
            me.loadTrigger.fire();
        };
    };
    CobblestoneComponent.prototype.fileLoader = function () {
        var me = this;
        return function (fileData, fileName) {
            console.log("loading cobblestone file");
            me.defaultFileName = fileName;
            var json = JSON.parse(fileData);
            ['palettes', 'tiles', 'transforms', 'map'].forEach(function (key) {
                Object.entries(json[key]).forEach(function (entry) {
                    me.state[key][entry[0]] = entry[1];
                });
            });
            console.log(me.state);
            me.loadTrigger.fire();
        };
    };
    CobblestoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cobblestone',
            template: __webpack_require__(/*! ./cobblestone.component.html */ "./src/app/cobblestone/cobblestone.component.html"),
            styles: [__webpack_require__(/*! ./cobblestone.component.scss */ "./src/app/cobblestone/cobblestone.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _cobblestone_service__WEBPACK_IMPORTED_MODULE_3__["CobblestoneService"]])
    ], CobblestoneComponent);
    return CobblestoneComponent;
}());



/***/ }),

/***/ "./src/app/dialog-wrapper/dialog-wrapper.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dialog-wrapper/dialog-wrapper.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" name=\"button\" class=\"nes-btn is-success\" (click)=\"open()\">{{triggerBtnName}}</button>\r\n<dialog #myDialog class=\"nes-dialog is-dark is-rounded\">\r\n  <ng-content></ng-content>\r\n  <menu class=\"dialog-menu text-right\">\r\n    <button class=\"nes-btn\" (click)=\"cancel()\">Cancel</button>\r\n    <button class=\"nes-btn is-primary\" (click)=\"confirm()\">Confirm</button>\r\n  </menu>\r\n</dialog>\r\n"

/***/ }),

/***/ "./src/app/dialog-wrapper/dialog-wrapper.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dialog-wrapper/dialog-wrapper.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy13cmFwcGVyL2RpYWxvZy13cmFwcGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dialog-wrapper/dialog-wrapper.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dialog-wrapper/dialog-wrapper.component.ts ***!
  \************************************************************/
/*! exports provided: DialogWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogWrapperComponent", function() { return DialogWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogWrapperComponent = /** @class */ (function () {
    function DialogWrapperComponent() {
    }
    DialogWrapperComponent.prototype.ngOnInit = function () {
        this.dialog = this.dialogRef.nativeElement;
    };
    DialogWrapperComponent.prototype.open = function () {
        if (this.dialogOpen) {
            this.dialogOpen();
        }
        this.dialog.showModal();
    };
    DialogWrapperComponent.prototype.confirm = function () {
        if (this.dialogConfirm) {
            this.dialogConfirm();
        }
        if (this.dialogClose) {
            this.dialogClose();
        }
        this.dialog.close();
    };
    DialogWrapperComponent.prototype.cancel = function () {
        if (this.dialogClose) {
            this.dialogClose();
        }
        this.dialog.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DialogWrapperComponent.prototype, "dialogRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DialogWrapperComponent.prototype, "triggerBtnName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogWrapperComponent.prototype, "dialogConfirm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogWrapperComponent.prototype, "dialogClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogWrapperComponent.prototype, "dialogOpen", void 0);
    DialogWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-wrapper',
            template: __webpack_require__(/*! ./dialog-wrapper.component.html */ "./src/app/dialog-wrapper/dialog-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./dialog-wrapper.component.scss */ "./src/app/dialog-wrapper/dialog-wrapper.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DialogWrapperComponent);
    return DialogWrapperComponent;
}());



/***/ }),

/***/ "./src/app/download-link/download-link.component.html":
/*!************************************************************!*\
  !*** ./src/app/download-link/download-link.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a #downloadLink [download]=\"getSaveFileName()\" [href]=\"content\"></a>\r\n"

/***/ }),

/***/ "./src/app/download-link/download-link.component.scss":
/*!************************************************************!*\
  !*** ./src/app/download-link/download-link.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvd25sb2FkLWxpbmsvZG93bmxvYWQtbGluay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/download-link/download-link.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/download-link/download-link.component.ts ***!
  \**********************************************************/
/*! exports provided: DownloadLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadLinkComponent", function() { return DownloadLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trigger */ "./src/app/trigger.ts");




var DownloadLinkComponent = /** @class */ (function () {
    function DownloadLinkComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    DownloadLinkComponent.prototype.ngOnInit = function () {
        var me = this;
        this.saveDataUpdateTrigger.addListener(function (e) {
            console.log("init download link");
            me.content = me.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(new Blob([e.detail], { type: 'text/plain' })));
        });
    };
    DownloadLinkComponent.prototype.invokeDownload = function () {
        var a = this.dlRef.nativeElement;
        a.click();
    };
    DownloadLinkComponent.prototype.sanitizeContent = function () {
        return;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('downloadLink'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DownloadLinkComponent.prototype, "dlRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DownloadLinkComponent.prototype, "getSaveFileName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _trigger__WEBPACK_IMPORTED_MODULE_3__["Trigger"])
    ], DownloadLinkComponent.prototype, "saveDataUpdateTrigger", void 0);
    DownloadLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'download-link',
            template: __webpack_require__(/*! ./download-link.component.html */ "./src/app/download-link/download-link.component.html"),
            styles: [__webpack_require__(/*! ./download-link.component.scss */ "./src/app/download-link/download-link.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], DownloadLinkComponent);
    return DownloadLinkComponent;
}());



/***/ }),

/***/ "./src/app/file-form/file-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/file-form/file-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"fileForm\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 text-center\">\r\n      <dialog-wrapper\r\n        triggerBtnName=\"Load File\"\r\n        [dialogConfirm]=\"fileLoadConfirmer()\"\r\n        [dialogClose]=\"fileLoadCanceler()\">\r\n        <label>Load File:</label>\r\n        <file-load-input [loadedFileCallback]=\"tempDataReader()\" [loadErrorCallback]=\"loadErrorHandler()\"></file-load-input>\r\n        <p *ngIf=\"loadError\" class=\"note nes-text is-error\">{{loadError}}</p>\r\n      </dialog-wrapper>\r\n    </div>\r\n    <div class=\"col-md-6 text-center\">\r\n      <dialog-wrapper\r\n        triggerBtnName=\"Save File\"\r\n        [dialogOpen]=\"saveDialogOpener()\"\r\n        [dialogConfirm]=\"saveDialogConfirmer()\">\r\n        <label for=\"saveFile\">Save:</label>\r\n        <input type=\"text\" id=\"saveFile\" class=\"nes-input\" formControlName=\"saveFile\" placeholder=\"Save File\"/>\r\n        <download-link\r\n          [getSaveFileName]=\"saveFileNameGetter()\"\r\n          [saveDataUpdateTrigger]=\"saveDataUpdateTrigger\"></download-link>\r\n      </dialog-wrapper>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/file-form/file-form.component.scss":
/*!****************************************************!*\
  !*** ./src/app/file-form/file-form.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtZm9ybS9maWxlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/file-form/file-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/file-form/file-form.component.ts ***!
  \**************************************************/
/*! exports provided: FileFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFormComponent", function() { return FileFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _download_link_download_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../download-link/download-link.component */ "./src/app/download-link/download-link.component.ts");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trigger */ "./src/app/trigger.ts");





var FileFormComponent = /** @class */ (function () {
    function FileFormComponent(fb) {
        this.fb = fb;
        this.fileForm = this.fb.group({
            saveFile: ['']
        });
        this.saveDataUpdateTrigger = new _trigger__WEBPACK_IMPORTED_MODULE_4__["Trigger"]("update-save-data");
    }
    FileFormComponent.prototype.ngOnInit = function () {
    };
    FileFormComponent.prototype.tempDataReader = function () {
        var me = this;
        return function (fileData, fileName) {
            me.loadedFileData = me.prepareLoadedData(fileData);
            me.fileForm.patchValue({
                saveFile: fileName
            });
        };
    };
    FileFormComponent.prototype.saveDataPreparer = function () {
        var me = this;
        return function () {
            me.fileContent = me.buildSaveData();
        };
    };
    FileFormComponent.prototype.fileLoadConfirmer = function () {
        var me = this;
        return function () {
            if (!me.loadError) {
                me.fileLoadCallback(me.loadedFileData);
            }
        };
    };
    FileFormComponent.prototype.fileLoadCanceler = function () {
        var me = this;
        return function () {
            me.loadedFileData = undefined;
        };
    };
    FileFormComponent.prototype.loadErrorHandler = function () {
        var me = this;
        return function (e) {
            me.loadError = e.message;
        };
    };
    FileFormComponent.prototype.saveDialogOpener = function () {
        var me = this;
        return function () {
            console.log("opening save dialog");
            me.saveDataUpdateTrigger.fireWithDetail(me.buildSaveData());
        };
    };
    FileFormComponent.prototype.saveDialogConfirmer = function () {
        var me = this;
        return function () {
            me.dlRef.invokeDownload();
        };
    };
    FileFormComponent.prototype.saveFileNameGetter = function () {
        var me = this;
        return function () {
            return me.fileForm.value.saveFile || me.defaultSaveFile;
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_download_link_download_link_component__WEBPACK_IMPORTED_MODULE_3__["DownloadLinkComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _download_link_download_link_component__WEBPACK_IMPORTED_MODULE_3__["DownloadLinkComponent"])
    ], FileFormComponent.prototype, "dlRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileFormComponent.prototype, "defaultSaveFile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileFormComponent.prototype, "prepareLoadedData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileFormComponent.prototype, "fileLoadCallback", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileFormComponent.prototype, "buildSaveData", void 0);
    FileFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'file-form',
            template: __webpack_require__(/*! ./file-form.component.html */ "./src/app/file-form/file-form.component.html"),
            styles: [__webpack_require__(/*! ./file-form.component.scss */ "./src/app/file-form/file-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FileFormComponent);
    return FileFormComponent;
}());



/***/ }),

/***/ "./src/app/file-load-input/file-load-input.component.html":
/*!****************************************************************!*\
  !*** ./src/app/file-load-input/file-load-input.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" class=\"nes-input\" (change)=\"loadFile($event)\"/>\r\n"

/***/ }),

/***/ "./src/app/file-load-input/file-load-input.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/file-load-input/file-load-input.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtbG9hZC1pbnB1dC9maWxlLWxvYWQtaW5wdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/file-load-input/file-load-input.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/file-load-input/file-load-input.component.ts ***!
  \**************************************************************/
/*! exports provided: FileLoadInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLoadInputComponent", function() { return FileLoadInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FileLoadInputComponent = /** @class */ (function () {
    function FileLoadInputComponent() {
    }
    FileLoadInputComponent.prototype.ngOnInit = function () {
    };
    FileLoadInputComponent.prototype.loadFile = function (e) {
        console.log("load file");
        var inputValue = e.target;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        var me = this;
        myReader.onload = function (e) {
            // you can perform an action with readed data here
            try {
                me.loadedFileCallback(myReader.result, file.name);
            }
            catch (e) {
                me.loadErrorCallback(e);
            }
        };
        myReader.readAsText(file);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileLoadInputComponent.prototype, "loadedFileCallback", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileLoadInputComponent.prototype, "loadErrorCallback", void 0);
    FileLoadInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'file-load-input',
            template: __webpack_require__(/*! ./file-load-input.component.html */ "./src/app/file-load-input/file-load-input.component.html"),
            styles: [__webpack_require__(/*! ./file-load-input.component.scss */ "./src/app/file-load-input/file-load-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileLoadInputComponent);
    return FileLoadInputComponent;
}());



/***/ }),

/***/ "./src/app/map-page-picker/map-page-picker.component.html":
/*!****************************************************************!*\
  !*** ./src/app/map-page-picker/map-page-picker.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  map-page-picker works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/map-page-picker/map-page-picker.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/map-page-picker/map-page-picker.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC1wYWdlLXBpY2tlci9tYXAtcGFnZS1waWNrZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/map-page-picker/map-page-picker.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/map-page-picker/map-page-picker.component.ts ***!
  \**************************************************************/
/*! exports provided: MapPagePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPagePickerComponent", function() { return MapPagePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapPagePickerComponent = /** @class */ (function () {
    function MapPagePickerComponent() {
    }
    MapPagePickerComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapPagePickerComponent.prototype, "state", void 0);
    MapPagePickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-page-picker',
            template: __webpack_require__(/*! ./map-page-picker.component.html */ "./src/app/map-page-picker/map-page-picker.component.html"),
            styles: [__webpack_require__(/*! ./map-page-picker.component.scss */ "./src/app/map-page-picker/map-page-picker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapPagePickerComponent);
    return MapPagePickerComponent;
}());



/***/ }),

/***/ "./src/app/mastermold/mastermold.component.html":
/*!******************************************************!*\
  !*** ./src/app/mastermold/mastermold.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  mastermold works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/mastermold/mastermold.component.scss":
/*!******************************************************!*\
  !*** ./src/app/mastermold/mastermold.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlcm1vbGQvbWFzdGVybW9sZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/mastermold/mastermold.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mastermold/mastermold.component.ts ***!
  \****************************************************/
/*! exports provided: MastermoldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastermoldComponent", function() { return MastermoldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MastermoldComponent = /** @class */ (function () {
    function MastermoldComponent() {
    }
    MastermoldComponent.prototype.ngOnInit = function () {
    };
    MastermoldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mastermold',
            template: __webpack_require__(/*! ./mastermold.component.html */ "./src/app/mastermold/mastermold.component.html"),
            styles: [__webpack_require__(/*! ./mastermold.component.scss */ "./src/app/mastermold/mastermold.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MastermoldComponent);
    return MastermoldComponent;
}());



/***/ }),

/***/ "./src/app/nes-tabs/child-panel/child-panel.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/nes-tabs/child-panel/child-panel.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"showcase nes-tab-body {{hide ? 'hide' : ''}}\">\r\n  <div class=\"nes-container with-title\">\r\n    <div class=\"title\">\r\n      <h5>{{label}}</h5>\r\n    </div>\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nes-tabs/child-panel/child-panel.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/nes-tabs/child-panel/child-panel.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25lcy10YWJzL2NoaWxkLXBhbmVsL2NoaWxkLXBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/nes-tabs/child-panel/child-panel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/nes-tabs/child-panel/child-panel.component.ts ***!
  \***************************************************************/
/*! exports provided: ChildPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildPanelComponent", function() { return ChildPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChildPanelComponent = /** @class */ (function () {
    function ChildPanelComponent() {
        this.hide = true;
    }
    ChildPanelComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChildPanelComponent.prototype, "label", void 0);
    ChildPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tab-child',
            template: __webpack_require__(/*! ./child-panel.component.html */ "./src/app/nes-tabs/child-panel/child-panel.component.html"),
            styles: [__webpack_require__(/*! ./child-panel.component.scss */ "./src/app/nes-tabs/child-panel/child-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChildPanelComponent);
    return ChildPanelComponent;
}());



/***/ }),

/***/ "./src/app/nes-tabs/tabbed-panel/tabbed-panel.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/nes-tabs/tabbed-panel/tabbed-panel.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"showcase\">\r\n      <div class=\"nes-container with-title\">\r\n        <div class=\"title\">\r\n          <h3>{{title}}</h3>\r\n          <ng-container *ngFor=\"let child of children; index as i\">\r\n            <button class=\"nes-btn nes-tab-btn {{(activeIndex == i) ? activeClass : ''}}\" (click)=\"select(i)\">{{child.label}}</button>\r\n          </ng-container>\r\n        </div>\r\n        <ng-container *ngFor=\"let child of children; index as i\">\r\n          <ng-content></ng-content>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nes-tabs/tabbed-panel/tabbed-panel.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/nes-tabs/tabbed-panel/tabbed-panel.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25lcy10YWJzL3RhYmJlZC1wYW5lbC90YWJiZWQtcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nes-tabs/tabbed-panel/tabbed-panel.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/nes-tabs/tabbed-panel/tabbed-panel.component.ts ***!
  \*****************************************************************/
/*! exports provided: TabbedPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabbedPanelComponent", function() { return TabbedPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _child_panel_child_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../child-panel/child-panel.component */ "./src/app/nes-tabs/child-panel/child-panel.component.ts");



var TabbedPanelComponent = /** @class */ (function () {
    function TabbedPanelComponent() {
        this.activeIndex = 0;
    }
    TabbedPanelComponent.prototype.ngOnInit = function () {
        this.activeIndex = this.initActiveIndex;
    };
    TabbedPanelComponent.prototype.ngAfterContentInit = function () {
        this.children.toArray()[this.activeIndex].hide = false;
    };
    TabbedPanelComponent.prototype.select = function (index) {
        this.children.toArray()[this.activeIndex].hide = true;
        this.activeIndex = index;
        this.children.toArray()[this.activeIndex].hide = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_child_panel_child_panel_component__WEBPACK_IMPORTED_MODULE_2__["ChildPanelComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TabbedPanelComponent.prototype, "children", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TabbedPanelComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TabbedPanelComponent.prototype, "activeClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TabbedPanelComponent.prototype, "initActiveIndex", void 0);
    TabbedPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tabbed-panel',
            template: __webpack_require__(/*! ./tabbed-panel.component.html */ "./src/app/nes-tabs/tabbed-panel/tabbed-panel.component.html"),
            styles: [__webpack_require__(/*! ./tabbed-panel.component.scss */ "./src/app/nes-tabs/tabbed-panel/tabbed-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabbedPanelComponent);
    return TabbedPanelComponent;
}());



/***/ }),

/***/ "./src/app/palette-display/palette-display.component.html":
/*!****************************************************************!*\
  !*** ./src/app/palette-display/palette-display.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"palette && (palette.length > (showFirst?0:1))\">\r\n  <div class=\"col-sm-12 nes-input text-justify palette\" [style.margin]=\"0\">\r\n    <ng-container *ngFor=\"let c of palette; index as i\">\r\n      <a *ngIf=\"showFirst || i > 0\"\r\n        class=\"palette-item\"\r\n        [style.color]=\"c\"\r\n        [style.backgroundColor]=\"c\"\r\n        [style.width]=\"(100/(palette.length - (showFirst?0:1)))+'%'\"\r\n        href=\"{{href}}\"\r\n        (click)=\"selectFn(i)\"\r\n        >\r\n        <span class=\"nes-input palette-color\">_</span>\r\n      </a>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/palette-display/palette-display.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/palette-display/palette-display.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbGV0dGUtZGlzcGxheS9wYWxldHRlLWRpc3BsYXkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/palette-display/palette-display.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/palette-display/palette-display.component.ts ***!
  \**************************************************************/
/*! exports provided: PaletteDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaletteDisplayComponent", function() { return PaletteDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaletteDisplayComponent = /** @class */ (function () {
    function PaletteDisplayComponent() {
    }
    PaletteDisplayComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PaletteDisplayComponent.prototype, "palette", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PaletteDisplayComponent.prototype, "href", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PaletteDisplayComponent.prototype, "showFirst", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], PaletteDisplayComponent.prototype, "selectFn", void 0);
    PaletteDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-palette-display',
            template: __webpack_require__(/*! ./palette-display.component.html */ "./src/app/palette-display/palette-display.component.html"),
            styles: [__webpack_require__(/*! ./palette-display.component.scss */ "./src/app/palette-display/palette-display.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaletteDisplayComponent);
    return PaletteDisplayComponent;
}());



/***/ }),

/***/ "./src/app/palettes-and-tiles/palettes-and-tiles.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/palettes-and-tiles/palettes-and-tiles.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"paletteAndTileForm\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"showcase\">\r\n            <div class=\"nes-container with-title\">\r\n              <div class=\"title\">\r\n                <h6>Palettes</h6>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-5 text-right\">\r\n                  <label for=\"palettes\" class=\"text-brand\">Palettes: </label>\r\n                </div>\r\n                <div class=\"col-sm-7\">\r\n                  <div class=\"nes-input nes-select\">\r\n                    <select id=\"palettes\" class=\"form-control\" formControlName=\"selectedPalette\" (change)=\"selectPalette()\">\r\n                      <ng-container *ngFor=\"let palette of state.palettes.keys()\">\r\n                        <option value=\"{{palette}}\">{{palette}}</option>\r\n                      </ng-container>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12 text-center\">\r\n                  <dialog-wrapper\r\n                    [triggerBtnName]=\"'Add Palette'\"\r\n                    [dialogConfirm]=\"paletteAdder()\"\r\n                    [dialogClose]=\"paletteDialogCloser()\">\r\n                    <label for=\"paletteName\">Palette Name</label>\r\n                    <input type=\"text\" class=\"nes-input\" id=\"paletteName\" formControlName=\"paletteName\"/>\r\n                  </dialog-wrapper>\r\n                  <button type=\"button\" name=\"button\" class=\"nes-btn is-error\" (click)=\"removePalette()\">Remove Palette</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-5 text-right\">\r\n                  <label for=\"colors\" class=\"text-brand\">Colors: </label>\r\n                </div>\r\n                <div class=\"col-sm-7\">\r\n                  <div class=\"nes-input nes-select\">\r\n                    <select id=\"colors\" class=\"form-control\" formControlName=\"selectedColor\" (change)=\"selectColor()\">\r\n                      <ng-container *ngFor=\"let color of activePalette; index as i\">\r\n                        <option value=\"{{i}}\">{{i}} - {{color||'Transparent'}}</option>\r\n                      </ng-container>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-5 text-right\">\r\n                  <label for=\"color\" class=\"text-brand\">Color:</label>\r\n                </div>\r\n                <div class=\"col-sm-7\">\r\n                  <input type=\"color\" id=\"color\" class=\"nes-input form-control\" formControlName=\"color\" value=\"#000001\" (change)=\"setColor()\"/>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 text-center\">\r\n                  <label for=\"makeTransparent\" class=\"text-brand\">\r\n                    <input type=\"checkbox\" id=\"makeTransparent\" class=\"nes-checkbox\" formControlName=\"makeTransparent\" (change)=\"makeTransparent()\">\r\n                    <span>Make Transparent?</span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 text-center\">\r\n                  <button class=\"nes-btn is-success\" (click)=\"addColor()\">Add Color</button>\r\n                  <button class=\"nes-btn is-error\" (click)=\"removeColor()\">Remove Color</button>\r\n                </div>\r\n              </div>\r\n              <p></p>\r\n              <app-palette-display\r\n                [palette]=\"activePalette\"\r\n                href=\"#/cobblestone\"\r\n                showFirst=\"true\"\r\n                [selectFn]=\"colorIndexSetter()\"\r\n              ></app-palette-display>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"showcase\">\r\n            <div class=\"nes-container with-title\">\r\n              <div class=\"title\">\r\n                <h6>Tiles</h6>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 text-right\">\r\n                  <label for=\"selectedTile\">Active Tile</label>\r\n                </div>\r\n                <div class=\"col-7\">\r\n                  <div class=\"nes-input nes-select\">\r\n                    <select class=\"form-control\" id=\"selectedTile\" formControlName=\"selectedTile\" (change)=\"selectTile()\">\r\n                      <ng-container *ngFor=\"let tileName of state.tiles.keys()\">\r\n                        <option value=\"{{tileName}}\">{{tileName}}</option>\r\n                      </ng-container>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12 text-center\">\r\n                  <dialog-wrapper\r\n                    [triggerBtnName]=\"'Add Tile'\"\r\n                    [dialogConfirm]=\"tileAdder()\"\r\n                    [dialogClose]=\"tileDialogCloser()\">\r\n                    <label for=\"tileName\">Tile Name</label>\r\n                    <input type=\"text\" class=\"nes-input\" id=\"tileName\" formControlName=\"tileName\"/>\r\n                  </dialog-wrapper>\r\n                  <button type=\"button\" name=\"button\" class=\"nes-btn is-error\" (click)=\"removeTile()\">Remove Tile</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8\">\r\n      <div class=\"showcase\">\r\n        <div class=\"nes-container with-title\">\r\n          <div class=\"title\">\r\n            <h5>Tile Canvas</h5>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-5 text-right\">\r\n              <label for=\"backgroundColor\" class=\"text-brand\">Background Color:</label>\r\n            </div>\r\n            <div class=\"col-sm-7\">\r\n              <input type=\"color\" id=\"backgroundColor\" class=\"nes-input form-control\" formControlName=\"backgroundColor\" value=\"#fffffe\" (change)=\"setBackground()\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <app-pixel-canvas\r\n                [pixels]=\"activeTile\"\r\n                [scale]=\"10\"\r\n                [width]=\"16\"\r\n                [height]=\"16\"\r\n                [palette]=\"activePalette\"\r\n                [backgroundColor]=\"getBackground()\"\r\n                [colorIndex]=\"activeColorIndex\"\r\n                [trigger]=\"trigger\"\r\n                page=\"cobblestone\"\r\n              ></app-pixel-canvas>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/palettes-and-tiles/palettes-and-tiles.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/palettes-and-tiles/palettes-and-tiles.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbGV0dGVzLWFuZC10aWxlcy9wYWxldHRlcy1hbmQtdGlsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/palettes-and-tiles/palettes-and-tiles.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/palettes-and-tiles/palettes-and-tiles.component.ts ***!
  \********************************************************************/
/*! exports provided: PalettesAndTilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalettesAndTilesComponent", function() { return PalettesAndTilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trigger */ "./src/app/trigger.ts");




var PalettesAndTilesComponent = /** @class */ (function () {
    function PalettesAndTilesComponent(fb) {
        this.fb = fb;
        this.paletteAndTileForm = this.fb.group({
            selectedPalette: [''],
            paletteName: [''],
            selectedColor: [''],
            color: ['#000001'],
            makeTransparent: [false],
            tileName: [''],
            selectedTile: [''],
            backgroundColor: ['#fffffe']
        });
        this.trigger = new _trigger__WEBPACK_IMPORTED_MODULE_3__["Trigger"]("redraw-tile");
    }
    PalettesAndTilesComponent.prototype.ngOnInit = function () {
        var me = this;
        this.loadTrigger.addListener(function () {
            me.updateFromFile();
        });
    };
    PalettesAndTilesComponent.prototype.updateFromFile = function () {
        var patch = {};
        var paletteNames = this.state.palettes.keys();
        if (paletteNames.length > 0) {
            patch["selectedPalette"] = paletteNames[0];
        }
        var tileNames = this.state.tiles.keys();
        if (tileNames.length > 0) {
            patch["selectedTile"] = tileNames[0];
        }
        this.paletteAndTileForm.patchValue(patch);
        this.selectPalette();
        this.selectTile();
    };
    PalettesAndTilesComponent.prototype.tileDialogCloser = function () {
        var form = this.paletteAndTileForm;
        return function () {
            form.patchValue({
                tileName: ''
            });
        };
    };
    PalettesAndTilesComponent.prototype.tileAdder = function () {
        var s = this.state;
        var me = this;
        return function () {
            if (me.paletteAndTileForm.value.tileName && !me.state.tiles[me.paletteAndTileForm.value.tileName]) {
                me.state.tiles[me.paletteAndTileForm.value.tileName] = {};
                me.paletteAndTileForm.patchValue({
                    selectedTile: me.paletteAndTileForm.value.tileName
                });
                me.activeTile = me.state.tiles[me.paletteAndTileForm.value.tileName];
            }
        };
    };
    PalettesAndTilesComponent.prototype.paletteDialogCloser = function () {
        var form = this.paletteAndTileForm;
        return function () {
            form.patchValue({
                selectedPalette: form.value.paletteName,
                paletteName: ''
            });
        };
    };
    PalettesAndTilesComponent.prototype.paletteAdder = function () {
        var me = this;
        return function () {
            if (me.paletteAndTileForm.value.paletteName && !me.state.palettes[me.paletteAndTileForm.value.paletteName]) {
                me.state.palettes[me.paletteAndTileForm.value.paletteName] = [];
                me.paletteAndTileForm.patchValue({
                    selectedPalette: me.paletteAndTileForm.value.paletteName
                });
                me.activePalette = me.state.palettes[me.paletteAndTileForm.value.paletteName];
            }
        };
    };
    PalettesAndTilesComponent.prototype.selectPalette = function () {
        this.activePalette = this.state.palettes[this.paletteAndTileForm.value.selectedPalette];
    };
    PalettesAndTilesComponent.prototype.removePalette = function () {
        if (this.activePalette) {
            delete this.state.palettes[this.paletteAndTileForm.value.selectedPalette];
            this.activePalette = undefined;
        }
    };
    PalettesAndTilesComponent.prototype.selectColor = function () {
        if (this.activePalette) {
            this.activeColorIndex = this.paletteAndTileForm.value.selectedColor;
            this.paletteAndTileForm.patchValue({
                color: this.activePalette[this.activeColorIndex]
            });
        }
    };
    PalettesAndTilesComponent.prototype.colorIndexSetter = function () {
        var me = this;
        return function (index) {
            me.paletteAndTileForm.patchValue({
                selectedColor: index,
            });
            me.selectColor();
        };
    };
    PalettesAndTilesComponent.prototype.setColor = function () {
        if (this.activePalette) {
            if (this.activeColorIndex >= 0) {
                this.activePalette[this.activeColorIndex] = this.paletteAndTileForm.value.color;
            }
        }
    };
    PalettesAndTilesComponent.prototype.makeTransparent = function () {
        if (this.activePalette) {
            if (this.activeColorIndex >= 0) {
                this.activePalette[this.activeColorIndex] = null;
            }
        }
    };
    PalettesAndTilesComponent.prototype.addColor = function () {
        if (this.activePalette) {
            this.activePalette.push(this.paletteAndTileForm.value.color);
            this.paletteAndTileForm.patchValue({
                selectedColor: (this.activePalette.length - 1)
            });
            this.selectColor();
        }
    };
    PalettesAndTilesComponent.prototype.removeColor = function () {
        if (this.activePalette) {
            if (this.activeColorIndex >= 0) {
                this.activePalette.splice(this.activeColorIndex, 1);
            }
        }
    };
    PalettesAndTilesComponent.prototype.selectTile = function () {
        this.activeTile = this.state.tiles[this.paletteAndTileForm.value.selectedTile];
    };
    PalettesAndTilesComponent.prototype.removeTile = function () {
        if (this.activeTile) {
            delete this.state.tiles[this.paletteAndTileForm.value.selectedTile];
        }
    };
    PalettesAndTilesComponent.prototype.getBackground = function () {
        if (this.activePalette && this.activePalette[0]) {
            return this.activePalette[0];
        }
        return this.paletteAndTileForm.value.backgroundColor;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PalettesAndTilesComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _trigger__WEBPACK_IMPORTED_MODULE_3__["Trigger"])
    ], PalettesAndTilesComponent.prototype, "loadTrigger", void 0);
    PalettesAndTilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-palettes-and-tiles',
            template: __webpack_require__(/*! ./palettes-and-tiles.component.html */ "./src/app/palettes-and-tiles/palettes-and-tiles.component.html"),
            styles: [__webpack_require__(/*! ./palettes-and-tiles.component.scss */ "./src/app/palettes-and-tiles/palettes-and-tiles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PalettesAndTilesComponent);
    return PalettesAndTilesComponent;
}());



/***/ }),

/***/ "./src/app/pixel-canvas/pixel-canvas.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pixel-canvas/pixel-canvas.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"palette && pixels\">\r\n  <svg width=\"100%\" height=\"100%\"\r\n    [attr.viewBox]=\"'0 0 ' + (width * scale) + ' ' + (height * scale)\">\r\n    <ng-container *ngFor=\"let y of range.max(height)\">\r\n      <ng-container *ngFor=\"let x of range.max(width)\">\r\n        <a [attr.href]=\"'#/' + page\"\r\n          (mousedown)=\"initOutline($event)\"\r\n          (mouseover)=\"adjustOutline($event)\"\r\n          (mouseup)=\"completeOutline($event)\">\r\n          <rect\r\n            [attr.alt]=\"x + 'x' + y\"\r\n            [attr.x]=\"x * scale\"\r\n            [attr.y]=\"y * scale\"\r\n            [attr.width]=\"scale\"\r\n            [attr.height]=\"scale\"\r\n            [attr.fill]=\"palette[pixels[x + 'x' + y]]||backgroundColor\"\r\n            style=\"stroke:black;stroke-width:1;\"></rect>\r\n        </a>\r\n      </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"hasOutline()\">\r\n      <rect [attr.x]=\"startCorner.x * scale\" [attr.y]=\"startCorner.y * scale\"\r\n        [attr.width]=\"outlineDim.x * scale\" [attr.height]=\"outlineDim.y * scale\"\r\n        fill=\"none\" stroke=\"red\" stroke-width=\"1\"/>\r\n    </ng-container>\r\n  </svg>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/pixel-canvas/pixel-canvas.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pixel-canvas/pixel-canvas.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpeGVsLWNhbnZhcy9waXhlbC1jYW52YXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pixel-canvas/pixel-canvas.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pixel-canvas/pixel-canvas.component.ts ***!
  \********************************************************/
/*! exports provided: PixelCanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelCanvasComponent", function() { return PixelCanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trigger */ "./src/app/trigger.ts");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../range */ "./src/app/range.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../point */ "./src/app/point.ts");





var PixelCanvasComponent = /** @class */ (function () {
    function PixelCanvasComponent() {
        this.range = _range__WEBPACK_IMPORTED_MODULE_3__["Range"];
        this.doOutline = false;
    }
    PixelCanvasComponent.prototype.ngOnInit = function () {
    };
    PixelCanvasComponent.prototype.setColorForPixel = function (x, y) {
        var key = (new _point__WEBPACK_IMPORTED_MODULE_4__["Point"](x, y)).toString();
        if (this.pixels[key] === this.colorIndex) {
            delete this.pixels[key];
        }
        else {
            this.pixels[key] = this.colorIndex;
        }
        this.trigger.fire();
    };
    PixelCanvasComponent.prototype.initOutline = function (e) {
        this.doOutline = true;
        this.initPoint = _point__WEBPACK_IMPORTED_MODULE_4__["Point"].parse(e.target.attributes.alt.value);
        this.startCorner = this.initPoint;
        this.outlineDim = new _point__WEBPACK_IMPORTED_MODULE_4__["Point"](1, 1);
    };
    PixelCanvasComponent.prototype.adjustOutline = function (e) {
        if (this.doOutline) {
            var temp = _point__WEBPACK_IMPORTED_MODULE_4__["Point"].parse(e.target.attributes.alt.value);
            var min = this.initPoint.min(temp);
            var max = this.initPoint.max(temp);
            this.startCorner = min;
            this.outlineDim = max.minus(min).plus(new _point__WEBPACK_IMPORTED_MODULE_4__["Point"](1, 1));
        }
    };
    PixelCanvasComponent.prototype.completeOutline = function (e) {
        var _this = this;
        this.doOutline = false;
        console.log("complete");
        _range__WEBPACK_IMPORTED_MODULE_3__["Range"].max(this.outlineDim.y).forEach(function (y) {
            _range__WEBPACK_IMPORTED_MODULE_3__["Range"].max(_this.outlineDim.x).forEach(function (x) {
                var key = (_this.startCorner.plus(new _point__WEBPACK_IMPORTED_MODULE_4__["Point"](x, y))).toString();
                if (_this.pixels[key] === _this.colorIndex) {
                    delete _this.pixels[key];
                }
                else {
                    _this.pixels[key] = _this.colorIndex;
                }
            });
        });
        this.initPoint = undefined;
        this.outlineDim = undefined;
        this.startCorner = undefined;
        this.trigger.fire();
    };
    PixelCanvasComponent.prototype.hasOutline = function () {
        return this.outlineDim;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PixelCanvasComponent.prototype, "pixels", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PixelCanvasComponent.prototype, "scale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PixelCanvasComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PixelCanvasComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PixelCanvasComponent.prototype, "palette", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PixelCanvasComponent.prototype, "backgroundColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PixelCanvasComponent.prototype, "colorIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _trigger__WEBPACK_IMPORTED_MODULE_2__["Trigger"])
    ], PixelCanvasComponent.prototype, "trigger", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PixelCanvasComponent.prototype, "page", void 0);
    PixelCanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pixel-canvas',
            template: __webpack_require__(/*! ./pixel-canvas.component.html */ "./src/app/pixel-canvas/pixel-canvas.component.html"),
            styles: [__webpack_require__(/*! ./pixel-canvas.component.scss */ "./src/app/pixel-canvas/pixel-canvas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PixelCanvasComponent);
    return PixelCanvasComponent;
}());



/***/ }),

/***/ "./src/app/pixel-painter/pixel-painter.component.html":
/*!************************************************************!*\
  !*** ./src/app/pixel-painter/pixel-painter.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #myCanvas style=\"display:none;\" [width]=\"16 * scale\" [height]=\"16 * scale\"></canvas>\r\n<span style=\"display:none;\">{{palette.join()}}</span>\r\n<a [href]=\"imgPath\" class=\"nes-btn\" [download]=\"(imgFile?imgFile:'spritely')+'.png'\">\r\n  <img [src]=\"imgPath\" [width]=\"16 * scale\" [height]=\"16 * scale\"/>\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/pixel-painter/pixel-painter.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pixel-painter/pixel-painter.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpeGVsLXBhaW50ZXIvcGl4ZWwtcGFpbnRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pixel-painter/pixel-painter.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pixel-painter/pixel-painter.component.ts ***!
  \**********************************************************/
/*! exports provided: PixelPainterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelPainterComponent", function() { return PixelPainterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trigger */ "./src/app/trigger.ts");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../range */ "./src/app/range.ts");




var PixelPainterComponent = /** @class */ (function () {
    function PixelPainterComponent() {
    }
    PixelPainterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trigger.addListener(function (e) {
            _this.redraw();
        });
        this.redraw();
    };
    PixelPainterComponent.prototype.redraw = function () {
        var _this = this;
        console.log("started redrawing");
        var scale = this.scale;
        var ctx = this.canvasRef.nativeElement.getContext('2d');
        var palette = this.palette;
        ctx.clearRect(0, 0, this.width * scale, this.height * scale);
        var pixels = this.pixels;
        _range__WEBPACK_IMPORTED_MODULE_3__["Range"].max(this.height).forEach(function (y) {
            _range__WEBPACK_IMPORTED_MODULE_3__["Range"].max(_this.width).forEach(function (x) {
                var key = x + 'x' + y;
                var c = pixels[key] || 0;
                if (palette[c]) {
                    ctx.fillStyle = palette[c].toUpperCase();
                    ctx.fillRect(x * scale, y * scale, scale, scale);
                }
            });
        });
        this.imgPath = this.canvasRef.nativeElement.toDataURL();
        console.log(this.imgPath);
        console.log("finished redrawing");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PixelPainterComponent.prototype, "canvasRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PixelPainterComponent.prototype, "pixels", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PixelPainterComponent.prototype, "scale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PixelPainterComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PixelPainterComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PixelPainterComponent.prototype, "palette", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _trigger__WEBPACK_IMPORTED_MODULE_2__["Trigger"])
    ], PixelPainterComponent.prototype, "trigger", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PixelPainterComponent.prototype, "imgFile", void 0);
    PixelPainterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pixel-painter',
            template: __webpack_require__(/*! ./pixel-painter.component.html */ "./src/app/pixel-painter/pixel-painter.component.html"),
            styles: [__webpack_require__(/*! ./pixel-painter.component.scss */ "./src/app/pixel-painter/pixel-painter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PixelPainterComponent);
    return PixelPainterComponent;
}());



/***/ }),

/***/ "./src/app/point.ts":
/*!**************************!*\
  !*** ./src/app/point.ts ***!
  \**************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.isIn = function (width, height) {
        return (this.x >= 0) && (this.x < width) && (this.y >= 0) && (this.y < height);
    };
    Point.prototype.min = function (p) {
        return new Point(Math.min(this.x, p.x), Math.min(this.y, p.y));
    };
    Point.prototype.max = function (p) {
        return new Point(Math.max(this.x, p.x), Math.max(this.y, p.y));
    };
    Point.prototype.plus = function (p) {
        return new Point(this.x + p.x, this.y + p.y);
    };
    Point.prototype.minus = function (p) {
        var min = this.min(p);
        var max = this.max(p);
        return new Point(max.x - min.x, max.y - min.y);
    };
    Point.prototype.equals = function (p) {
        return this.x == p.x && this.y == p.y;
    };
    Point.prototype.toString = function () {
        return this.x + 'x' + this.y;
    };
    Point.parse = function (xy) {
        var p = xy.split("x").map(function (n) { return parseInt(n); });
        return new Point(p[0], p[1]);
    };
    Point.prototype.turnLeft = function (width, height) {
        var dim = Math.min(width, height) - 1;
        return new Point(this.y, dim - this.x);
    };
    Point.prototype.turnRight = function (width, height) {
        var dim = Math.min(width, height) - 1;
        return new Point(dim - this.y, this.x);
    };
    Point.prototype.flipOver = function (width, height) {
        return new Point((width - 1) - this.x, this.y);
    };
    Point.prototype.flipDown = function (width, height) {
        return new Point(this.x, (height - 1) - this.y);
    };
    Point.prototype.shiftLeft = function (width, height) {
        return new Point(this.x - 1, this.y);
    };
    Point.prototype.shiftRight = function (width, height) {
        return new Point(this.x + 1, this.y);
    };
    Point.prototype.shiftUp = function (width, height) {
        return new Point(this.x, this.y - 1);
    };
    Point.prototype.shiftDown = function (width, height) {
        return new Point(this.x, this.y + 1);
    };
    return Point;
}());



/***/ }),

/***/ "./src/app/range.ts":
/*!**************************!*\
  !*** ./src/app/range.ts ***!
  \**************************/
/*! exports provided: Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
var Range = /** @class */ (function () {
    function Range() {
    }
    Range.max = function (max) {
        return Range.minmax(0, max);
    };
    Range.minmax = function (min, max) {
        return Range.minmaxstep(min, max, 1);
    };
    Range.minmaxstep = function (min, max, step) {
        var out = [];
        for (var x = min; x < max; x += step) {
            out.push(x);
        }
        return out;
    };
    return Range;
}());



/***/ }),

/***/ "./src/app/spritely/spritely.component.html":
/*!**************************************************!*\
  !*** ./src/app/spritely/spritely.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"spritelyForm\" class=\"topic\">\r\n  <div class=\"showcase col-lg-12\">\r\n    <div class=\"nes-container with-title\">\r\n      <div class=\"title\">\r\n        <label>Spritely </label>\r\n      </div>\r\n      <div class=\"row small\">\r\n        <div class=\"col-lg-5\">\r\n          <accordian\r\n            [tabId]=\"'fileTab'\"\r\n            [containerId]=\"'fileContainer'\"\r\n            [initCollapsed]=\"true\"\r\n            [label]=\"'File'\">\r\n            <file-form\r\n              [defaultSaveFile]=\"defaultSaveFile\"\r\n              [prepareLoadedData]=\"fileDataReader\"\r\n              [fileLoadCallback]=\"fileLoadCallback()\"\r\n              [buildSaveData]=\"saveDataCompiler()\"\r\n              >\r\n            </file-form>\r\n          </accordian>\r\n          <accordian\r\n            [tabId]=\"'directionsTab'\"\r\n            [containerId]=\"'directionsContainer'\"\r\n            [initCollapsed]=\"true\"\r\n            [label]=\"'Directions'\">\r\n            <div class=\"nes-balloon from-left\">\r\n              <p>Spritely is a canvas for pixel art.</p>\r\n            </div>\r\n            <div class=\"nes-balloon from-right\">\r\n              <p>Build your palette below, then select a color in the palette to paint pixels that color, or to unpaint pixels already that color.</p>\r\n            </div>\r\n            <div class=\"nes-balloon from-left\">\r\n              <p>Changing the color of a slot in the palette will change the color of all matching pixels.</p>\r\n            </div>\r\n            <div class=\"nes-balloon from-right\">\r\n              <p>Deleting a color will unpaint all pixels that matching color</p>\r\n            </div>\r\n            <div class=\"nes-balloon from-left\">\r\n              <p>Unpainting pixels will return them to the background color.</p>\r\n            </div>\r\n          </accordian>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"showcase\">\r\n                <div class=\"nes-container with-title\">\r\n                  <div class=\"title\">\r\n                    <label>Palette</label>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-5 text-right\">\r\n                      <label for=\"backgroundColor\" class=\"text-brand\">Background Color:</label>\r\n                    </div>\r\n                    <div class=\"col-sm-7\">\r\n                      <input type=\"color\" id=\"backgroundColor\" class=\"nes-input form-control\" formControlName=\"backgroundColor\" value=\"#fffffe\" (change)=\"setBackground()\"/>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12 text-center\">\r\n                      <label for=\"makeTransparent\" class=\"text-brand\">\r\n                        <input type=\"checkbox\" id=\"makeTransparent\" class=\"nes-checkbox\" formControlName=\"makeTransparent\" (change)=\"makeTransparent()\">\r\n                        <span>\r\n                          Make Transparent?\r\n                        </span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-5 text-right\">\r\n                      <label for=\"palette\" class=\"text-brand\">Colors: </label>\r\n                    </div>\r\n                    <div class=\"col-sm-7\">\r\n                      <div class=\"nes-input nes-select\">\r\n                        <select id=\"palette\" class=\"form-control\" formControlName=\"selectedPalette\" (change)=\"selectColor()\">\r\n                          <ng-container *ngFor=\"let color of palette; index as i\">\r\n                            <option *ngIf=\"i > 0\" value=\"{{i}}\">{{i}} - {{color||'Transparent'}}</option>\r\n                          </ng-container>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-5 text-right\">\r\n                      <label for=\"color\" class=\"text-brand\">Color:</label>\r\n                    </div>\r\n                    <div class=\"col-sm-7\">\r\n                      <input type=\"color\" id=\"color\" class=\"nes-input form-control\" formControlName=\"color\" value=\"#000001\" (change)=\"setColor()\"/>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12 text-center\">\r\n                      <button class=\"nes-btn is-success\" (click)=\"addColor()\">Add Color</button>\r\n                      <button class=\"nes-btn is-error\" (click)=\"removeColor()\">Remove Color</button>\r\n                    </div>\r\n                  </div>\r\n                  <p></p>\r\n                  <app-palette-display\r\n                    [palette]=\"palette\"\r\n                    [href]=\"'#/spritely'\"\r\n                    [selectFn]=\"colorIndexSetter()\"\r\n                  ></app-palette-display>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <accordian\r\n            [tabId]=\"'transformsTab'\"\r\n            [containerId]=\"'transformsContainer'\"\r\n            [initCollapsed]=\"true\"\r\n            [label]=\"'Transforms'\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('turnLeft')\">Turn Left</button>\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('turnRight')\">Turn Right</button>\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('flipOver')\">Flip Over</button>\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('flipDown')\">Flip Down</button>\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('shiftLeft')\">Shift Left</button>\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('shiftRight')\">Shift Right</button>\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('shiftUp')\">Shift Up</button>\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('shiftDown')\">Shift Down</button>\r\n              </div>\r\n            </div>\r\n          </accordian>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"showcase\">\r\n                <div class=\"nes-container with-title\">\r\n                  <div class=\"title\">\r\n                    <label>Image</label>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-md-6\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                          <label for=\"scale\" class=\"text-brand\">Scale:</label>\r\n                          <input type=\"number\" min=\"1\" max=\"20\" id=\"scale\" class=\"nes-input\" formControlName=\"scale\" (change)=\"redraw()\"/>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                          <label for=\"imgFile\" class=\"text-brand\">Image FileName:</label>\r\n                          <input type=\"text\" id=\"imgFile\" class=\"nes-input\" formControlName=\"imgFile\" placeholder=\"Image File\" (change)=\"redraw()\"/>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-8 text-right\">\r\n                      <app-pixel-painter\r\n                        [pixels]=\"pixels\"\r\n                        [scale]=\"spritelyForm.value.scale\"\r\n                        [width]=\"spritelyForm.value.width\"\r\n                        [height]=\"spritelyForm.value.height\"\r\n                        [palette]=\"palette\"\r\n                        [trigger]=\"trigger\"\r\n                        [imgFile]=\"spritelyForm.value.imgFile\"\r\n                      ></app-pixel-painter>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-7\">\r\n          <div class=\"showcase\">\r\n            <div class=\"nes-container\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-5 text-right\">\r\n                      <label for=\"width\" class=\"text-brand\">Width:</label>\r\n                    </div>\r\n                    <div class=\"col-sm-7\">\r\n                      <input type=\"number\" min=\"8\" max=\"64\" id=\"width\" class=\"nes-input\" formControlName=\"width\" (change)=\"resize()\"/>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-5 text-right\">\r\n                      <label for=\"height\" class=\"text-brand\">Height:</label>\r\n                    </div>\r\n                    <div class=\"col-sm-7\">\r\n                      <input type=\"number\" min=\"8\" max=\"64\" id=\"height\" class=\"nes-input\" formControlName=\"height\" (change)=\"resize()\"/>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <app-pixel-canvas\r\n                    class=\"col-12\"\r\n                    [pixels]=\"pixels\"\r\n                    [scale]=\"10\"\r\n                    [width]=\"min(spritelyForm.value.width,64)\"\r\n                    [height]=\"min(spritelyForm.value.height,64)\"\r\n                    [palette]=\"palette\"\r\n                    [backgroundColor]=\"spritelyForm.value.backgroundColor\"\r\n                    [colorIndex]=\"spritelyForm.value.selectedPalette\"\r\n                    [trigger]=\"trigger\"\r\n                    page=\"spritely\"\r\n                  ></app-pixel-canvas>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/spritely/spritely.component.scss":
/*!**************************************************!*\
  !*** ./src/app/spritely/spritely.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea.pixel-canvas:before {\n  counter-increment: line;\n  content: counter(line);\n  display: inline-block;\n  border-right: 1px solid #ddd;\n  padding: 0 .5em;\n  margin-right: .5em;\n  color: #888; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ByaXRlbHkvQzpcXGNvZGVcXGNhcmFiaW5lclxcZnJvbnQvc3JjXFxhcHBcXHNwcml0ZWx5XFxzcHJpdGVseS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nwcml0ZWx5L3Nwcml0ZWx5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEucGl4ZWwtY2FudmFzIHtcclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY291bnRlci1pbmNyZW1lbnQ6IGxpbmU7XHJcbiAgICBjb250ZW50OiBjb3VudGVyKGxpbmUpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDAgLjVlbTtcclxuICAgIG1hcmdpbi1yaWdodDogLjVlbTtcclxuICAgIGNvbG9yOiAjODg4XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/spritely/spritely.component.ts":
/*!************************************************!*\
  !*** ./src/app/spritely/spritely.component.ts ***!
  \************************************************/
/*! exports provided: SpritelyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpritelyComponent", function() { return SpritelyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trigger */ "./src/app/trigger.ts");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../range */ "./src/app/range.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../point */ "./src/app/point.ts");







var SpritelyComponent = /** @class */ (function () {
    function SpritelyComponent(fb, sanitizer) {
        this.fb = fb;
        this.sanitizer = sanitizer;
        this.spritelyForm = this.fb.group({
            selectedPalette: [0],
            scale: [5],
            width: [16],
            height: [16],
            color: ['#000001'],
            makeTransparent: [false],
            backgroundColor: ['#fffffe'],
            saveFile: [''],
            imgFile: ['']
        });
        this.palette = [undefined];
        this.pixels = {};
        this.trigger = new _trigger__WEBPACK_IMPORTED_MODULE_3__["Trigger"]("redraw-pixels");
    }
    SpritelyComponent.prototype.ngOnInit = function () {
    };
    SpritelyComponent.prototype.fileDataReader = function (fileData) {
        var out = {};
        var rows = fileData.split("\r").join("").split("\n").join("|").split("|");
        var filePalette = rows.shift().split(",");
        out.palette.splice(0, out.palette.length);
        filePalette.forEach(function (c) { return out.palette.push((c == "none") ? undefined : c); });
        Object.keys(out.pixels).forEach(function (p) {
            delete out.pixels[p];
        });
        out.width = 0;
        out.height = rows.length;
        rows.forEach(function (row, y) {
            out.width = Math.max(out.width, row.length);
            row.split("").forEach(function (p, x) {
                var c = p.charCodeAt(0) - 97;
                if (c > 0) {
                    var key = x + 'x' + y;
                    out.pixels[key] = c;
                }
            });
        });
        return out;
    };
    SpritelyComponent.prototype.fileLoadCallback = function () {
        var me = this;
        return function (load) {
            me.palette = load.palette;
            me.pixels = load.pixels;
            var formValues = {
                width: load.width,
                height: load.length,
            };
            if (me.palette[0]) {
                formValues.makeTransparent = false;
                formValues.backgroundColor = this.palette[0];
            }
            else {
                formValues.makeTransparent = true;
            }
            if (me.palette.length > 1) {
                formValues.selectedPalette = 1;
                formValues.color = this.palette[1];
            }
            me.spritelyForm.patchValue(formValues);
            me.trigger.fire();
        };
    };
    SpritelyComponent.prototype.saveDataCompiler = function () {
        var me = this;
        return function () {
            var out = [me.palette.map(function (c) { return c ? c : "none"; }).join(",")];
            _range__WEBPACK_IMPORTED_MODULE_4__["Range"].max(me.spritelyForm.value.height).forEach(function (y) {
                var row = [];
                _range__WEBPACK_IMPORTED_MODULE_4__["Range"].max(me.spritelyForm.value.width).forEach(function (x) {
                    var key = x + 'x' + y;
                    var c = me.pixels[key] || 0;
                    row.push(c);
                });
                var charCodes = row.map(function (c) { return (parseInt(c) + 97); });
                out.push(String.fromCharCode.apply(null, charCodes));
            });
            return out.join("\r\n");
        };
    };
    SpritelyComponent.prototype.selectColor = function () {
        this.spritelyForm.patchValue({
            color: this.palette[this.spritelyForm.value.selectedPalette]
        });
    };
    SpritelyComponent.prototype.colorIndexSetter = function () {
        var me = this;
        return function (index) {
            me.spritelyForm.patchValue({
                selectedPalette: index
            });
            me.selectColor();
        };
    };
    SpritelyComponent.prototype.makeTransparent = function () {
        var t = this.spritelyForm.value.makeTransparent;
        this.palette[0] = t ? undefined : this.spritelyForm.value.backgroundColor;
        this.trigger.fire();
    };
    SpritelyComponent.prototype.setBackground = function () {
        this.palette[0] = this.spritelyForm.value.backgroundColor;
        this.trigger.fire();
    };
    SpritelyComponent.prototype.redraw = function () {
        this.trigger.fire();
    };
    SpritelyComponent.prototype.setColor = function () {
        this.palette[this.spritelyForm.value.selectedPalette] = this.spritelyForm.value.color;
        this.trigger.fire();
    };
    SpritelyComponent.prototype.addColor = function () {
        this.palette.push(this.spritelyForm.value.color);
        this.spritelyForm.patchValue({ selectedPalette: (this.palette.length - 1) });
    };
    SpritelyComponent.prototype.removeColor = function () {
        if (this.palette.length > 1) {
            this.palette.splice(this.spritelyForm.value.selectedPalette, 1);
            var len_1 = this.palette.length;
            var pixels_1 = this.pixels;
            Object.entries(pixels_1).forEach(function (entry) {
                if (entry[1] >= len_1) {
                    delete pixels_1[entry[0]];
                }
            });
            this.spritelyForm.patchValue({
                selectedPalette: len_1 - 1
            });
        }
        this.trigger.fire();
    };
    SpritelyComponent.prototype.transform = function (tf) {
        var width = this.spritelyForm.value.width;
        var height = this.spritelyForm.value.height;
        var pixels = this.pixels;
        var entries = Object.entries(pixels);
        var transformed = {};
        entries.forEach(function (entry) {
            var p = entry[0];
            var newP = _point__WEBPACK_IMPORTED_MODULE_6__["Point"].parse(p)[tf](width, height);
            if (newP.isIn(width, height)) {
                transformed[newP.toString()] = entry[1];
            }
            delete pixels[p];
        });
        Object.entries(transformed).forEach(function (entry) {
            pixels[entry[0]] = entry[1];
        });
        this.trigger.fire();
    };
    SpritelyComponent.prototype.min = function () {
        return Math.min.apply(Math, Array.from(arguments));
    };
    SpritelyComponent.prototype.resize = function () {
        this.spritelyForm.patchValue({
            width: Math.min(64, Math.max(8, this.spritelyForm.value.width)),
            height: Math.min(64, Math.max(8, this.spritelyForm.value.height)),
        });
    };
    SpritelyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spritely',
            template: __webpack_require__(/*! ./spritely.component.html */ "./src/app/spritely/spritely.component.html"),
            styles: [__webpack_require__(/*! ./spritely.component.scss */ "./src/app/spritely/spritely.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], SpritelyComponent);
    return SpritelyComponent;
}());



/***/ }),

/***/ "./src/app/tile-display/tile-display.component.html":
/*!**********************************************************!*\
  !*** ./src/app/tile-display/tile-display.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 16\">\r\n  <ng-container *ngFor=\"let y of range.max(16)\">\r\n    <ng-container *ngFor=\"let x of range.max(16)\">\r\n      <svg:rect [attr.x]=\"x * scale\" [attr.y]=\"y * scale\" [attr.width]=\"scale\"\r\n        [attr.height]=\"scale\" [attr.fill]=\"pixel(x,y)\"\r\n        style=\"stroke:none;stroke-width:0\"></svg:rect>\r\n    </ng-container>\r\n  </ng-container>\r\n</svg>\r\n"

/***/ }),

/***/ "./src/app/tile-display/tile-display.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/tile-display/tile-display.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbGUtZGlzcGxheS90aWxlLWRpc3BsYXkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tile-display/tile-display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tile-display/tile-display.component.ts ***!
  \********************************************************/
/*! exports provided: TileDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileDisplayComponent", function() { return TileDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tile_transformer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tile-transformer.service */ "./src/app/tile-transformer.service.ts");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../range */ "./src/app/range.ts");




var TileDisplayComponent = /** @class */ (function () {
    function TileDisplayComponent(ttf) {
        this.ttf = ttf;
        this.scale = 1;
        this.pixels = {};
        this.range = _range__WEBPACK_IMPORTED_MODULE_3__["Range"];
    }
    TileDisplayComponent.prototype.ngOnInit = function () {
        if (this.key) {
            var tfTile = this.ttf.buildTransformedTile(this.state, this.key);
            this.palette = tfTile.palette;
            this.pixels = tfTile.tile;
        }
    };
    TileDisplayComponent.prototype.pixel = function (x, y) {
        return this.palette[this.pixels[x + 'x' + y] || 0];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TileDisplayComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TileDisplayComponent.prototype, "key", void 0);
    TileDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tile-display',
            template: __webpack_require__(/*! ./tile-display.component.html */ "./src/app/tile-display/tile-display.component.html"),
            styles: [__webpack_require__(/*! ./tile-display.component.scss */ "./src/app/tile-display/tile-display.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tile_transformer_service__WEBPACK_IMPORTED_MODULE_2__["TileTransformerService"]])
    ], TileDisplayComponent);
    return TileDisplayComponent;
}());



/***/ }),

/***/ "./src/app/tile-pixels/tile-pixels.component.html":
/*!********************************************************!*\
  !*** ./src/app/tile-pixels/tile-pixels.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"palette && pixels\">\n  <ng-container *ngFor=\"let y of range.max(16)\">\n    <ng-container *ngFor=\"let x of range.max(16)\">\n      <svg:rect [attr.x]=\"x * scale\" [attr.y]=\"y * scale\" [attr.width]=\"scale\"\n        [attr.height]=\"scale\" [attr.fill]=\"pixel(x,y)\"\n        style=\"stroke:none;\"></svg:rect>\n    </ng-container>\n  </ng-container>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/tile-pixels/tile-pixels.component.scss":
/*!********************************************************!*\
  !*** ./src/app/tile-pixels/tile-pixels.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbGUtcGl4ZWxzL3RpbGUtcGl4ZWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tile-pixels/tile-pixels.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tile-pixels/tile-pixels.component.ts ***!
  \******************************************************/
/*! exports provided: TilePixelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilePixelsComponent", function() { return TilePixelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../range */ "./src/app/range.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../point */ "./src/app/point.ts");




var TilePixelsComponent = /** @class */ (function () {
    function TilePixelsComponent() {
        this.pixels = {};
        this.range = _range__WEBPACK_IMPORTED_MODULE_2__["Range"];
    }
    TilePixelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.key) {
            var attrs = this.key.split("_");
            this.palette = this.state.palettes[attrs[1]];
            this.transforms = attrs.splice(2);
            this.pixels = {};
            var pixels_1 = this.pixels;
            var temp = this.state.tiles[attrs[0]];
            if (temp) {
                Object.entries(temp).forEach(function (pair) {
                    var pixel = _this.transforms.reduce(function (p, tf) {
                        return p[tf](16, 16);
                    }, _point__WEBPACK_IMPORTED_MODULE_3__["Point"].parse(pair[0]));
                    var c = pair[1];
                    pixels_1[pixel.toString()] = c;
                });
            }
        }
    };
    TilePixelsComponent.prototype.pixel = function (x, y) {
        return this.palette[this.pixels[x + 'x' + y] || 0];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TilePixelsComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TilePixelsComponent.prototype, "key", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TilePixelsComponent.prototype, "scale", void 0);
    TilePixelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tile-pixels',
            template: __webpack_require__(/*! ./tile-pixels.component.html */ "./src/app/tile-pixels/tile-pixels.component.html"),
            styles: [__webpack_require__(/*! ./tile-pixels.component.scss */ "./src/app/tile-pixels/tile-pixels.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TilePixelsComponent);
    return TilePixelsComponent;
}());



/***/ }),

/***/ "./src/app/tile-transformer.service.ts":
/*!*********************************************!*\
  !*** ./src/app/tile-transformer.service.ts ***!
  \*********************************************/
/*! exports provided: TileTransformerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileTransformerService", function() { return TileTransformerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point */ "./src/app/point.ts");



var TileTransformerService = /** @class */ (function () {
    function TileTransformerService() {
    }
    TileTransformerService.prototype.buildTransformedTile = function (state, key) {
        var out = {};
        var attrs = key.split("_");
        out.palette = state.palettes[attrs[1]];
        var transforms = attrs.splice(2);
        out.tile = {};
        var pixels = out["tile"];
        var temp = state.tiles[attrs[0]];
        if (temp) {
            Object.entries(temp).forEach(function (pair) {
                var pixel = transforms.reduce(function (p, tf) {
                    return p[tf](16, 16);
                }, _point__WEBPACK_IMPORTED_MODULE_2__["Point"].parse(pair[0]));
                var c = pair[1];
                pixels[pixel.toString()] = c;
            });
        }
        return out;
    };
    TileTransformerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TileTransformerService);
    return TileTransformerService;
}());



/***/ }),

/***/ "./src/app/tile.ts":
/*!*************************!*\
  !*** ./src/app/tile.ts ***!
  \*************************/
/*! exports provided: Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
var Tile = /** @class */ (function () {
    function Tile() {
    }
    return Tile;
}());



/***/ }),

/***/ "./src/app/transformed-tiles/transformed-tiles.component.html":
/*!********************************************************************!*\
  !*** ./src/app/transformed-tiles/transformed-tiles.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-4\">\r\n    <div class=\"showcase\">\r\n      <div class=\"nes-container\">\r\n        <form [formGroup]=\"transForm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\" *ngIf=\"currentKey\">\r\n              <tile-display\r\n                [state]=\"state\"\r\n                [key]=\"currentKey\">\r\n              </tile-display>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <button class=\"nes-btn {{exists()?'is-error':'is-success'}}\" (click)=toggle()>{{exists()?'Remove':'Add'}}</button>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <label for=\"palettes\" class=\"text-brand\">Palettes: </label>\r\n              <div class=\"nes-input nes-select\">\r\n                <select id=\"palettes\" class=\"form-control\" formControlName=\"selectedPalette\" (change)=\"updateCurrentKey()\">\r\n                  <ng-container *ngFor=\"let palette of state.palettes.keys()\">\r\n                    <option value=\"{{palette}}\">{{palette}}</option>\r\n                  </ng-container>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <label for=\"selectedTile\">Tiles:</label>\r\n              <div class=\"nes-input nes-select\">\r\n                <select class=\"form-control\" id=\"selectedTile\" formControlName=\"selectedTile\" (change)=\"updateCurrentKey()\">\r\n                  <ng-container *ngFor=\"let tileName of state.tiles.keys()\">\r\n                    <option value=\"{{tileName}}\">{{tileName}}</option>\r\n                  </ng-container>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <div id=\"radios\" class=\"item\">\r\n                <label>Flip Over</label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"flipOver\" formControlName=\"flipOver\" value=\"flipOver\" (change)=\"updateCurrentKey()\"/><span>Yes</span></label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"flipOver\" formControlName=\"flipOver\" value=\"\" (change)=\"updateCurrentKey()\"/><span>No</span></label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <div id=\"radios\" class=\"item\">\r\n                <label>Flip Down</label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"flipDown\" formControlName=\"flipDown\" value=\"flipDown\" (change)=\"updateCurrentKey()\"/><span>Yes</span></label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"flipDown\" formControlName=\"flipDown\" value=\"\" (change)=\"updateCurrentKey()\"/><span>No</span></label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <div id=\"radios\" class=\"item\">\r\n                <label>Turn Right</label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"turnRight\" formControlName=\"turnRight\" value=\"turnRight\" (change)=\"updateCurrentKey()\"/><span>Yes</span></label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"turnRight\" formControlName=\"turnRight\" value=\"\" (change)=\"updateCurrentKey()\"/><span>No</span></label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <div id=\"radios\" class=\"item\">\r\n                <label>Turn Left</label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"turnLeft\" formControlName=\"turnLeft\" value=\"turnLeft\" (change)=\"updateCurrentKey()\"/><span>Yes</span></label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"turnLeft\" formControlName=\"turnLeft\" value=\"\" (change)=\"updateCurrentKey()\"/><span>No</span></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-8\">\r\n    <div class=\"showcase\">\r\n      <div class=\"nes-container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-3\" *ngFor=\"let key of state.transforms.keys()\">\r\n            <button (click)=\"setCurrentKey(key)\">\r\n              <tile-display\r\n                [state]=\"state\"\r\n                [key]=\"key\">\r\n              </tile-display>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/transformed-tiles/transformed-tiles.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/transformed-tiles/transformed-tiles.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zZm9ybWVkLXRpbGVzL3RyYW5zZm9ybWVkLXRpbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/transformed-tiles/transformed-tiles.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/transformed-tiles/transformed-tiles.component.ts ***!
  \******************************************************************/
/*! exports provided: TransformedTilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformedTilesComponent", function() { return TransformedTilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tile_transformer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tile-transformer.service */ "./src/app/tile-transformer.service.ts");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trigger */ "./src/app/trigger.ts");





var TransformedTilesComponent = /** @class */ (function () {
    function TransformedTilesComponent(fb, ttf) {
        this.fb = fb;
        this.ttf = ttf;
        this.transForm = this.fb.group({
            selectedPalette: [''],
            selectedTile: [''],
            flipOver: [''],
            flipDown: [''],
            turnRight: [''],
            turnLeft: ['']
        });
        this.displayTrigger = new _trigger__WEBPACK_IMPORTED_MODULE_4__["Trigger"]("update-tile-display");
    }
    TransformedTilesComponent_1 = TransformedTilesComponent;
    TransformedTilesComponent.prototype.ngOnInit = function () {
        var me = this;
        this.loadTrigger.addListener(function () {
            me.updateFromFile();
        });
    };
    TransformedTilesComponent.prototype.updateFromFile = function () {
        var patch = {};
        var paletteNames = this.state.palettes.keys();
        if (paletteNames.length > 0) {
            patch["selectedPalette"] = paletteNames[0];
        }
        var tileNames = this.state.tiles.keys();
        if (tileNames.length > 0) {
            patch["selectedTile"] = tileNames[0];
        }
        this.transForm.patchValue(patch);
        this.updateCurrentKey();
        console.log("updated from file");
    };
    TransformedTilesComponent.prototype.getCurrentKey = function () {
        console.log("getting current key");
        var paletteName = this.transForm.value.selectedTile;
        var palette = this.state.palettes[paletteName];
        if (palette) {
            console.log("palette");
            console.log(palette);
            var tileName = this.transForm.value.selectedTile;
            var tile = this.state.tiles[tileName];
            if (tile) {
                console.log("tile");
                console.log(tile);
                var values_1 = this.transForm.value;
                var tfs = TransformedTilesComponent_1.tfLabels.map(function (label) {
                    return values_1[label];
                }).filter(function (tf) {
                    return tf.length > 0;
                });
                tfs.sort();
                var key = [tileName, paletteName].concat(tfs).join("_");
                console.log("key");
                console.log(key);
                return key;
            }
        }
    };
    TransformedTilesComponent.prototype.updateCurrentKey = function () {
        this.currentKey = this.getCurrentKey();
        console.log("updated current key");
        console.log(this.currentKey);
    };
    TransformedTilesComponent.prototype.setCurrentKey = function () {
    };
    TransformedTilesComponent.prototype.exists = function () {
        if (this.currentKey) {
            return this.state.transforms[this.currentKey];
        }
    };
    TransformedTilesComponent.prototype.toggle = function () {
        var key = this.currentKey;
        if (key && this.state.transforms[key]) {
            delete this.state.transforms[key];
        }
        else {
            this.state.transforms[key] = this.ttf.buildTransformedTile(this.state, key);
        }
    };
    var TransformedTilesComponent_1;
    TransformedTilesComponent.tfLabels = ["flipOver", "flipDown", "turnRight", "turnLeft"];
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TransformedTilesComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _trigger__WEBPACK_IMPORTED_MODULE_4__["Trigger"])
    ], TransformedTilesComponent.prototype, "loadTrigger", void 0);
    TransformedTilesComponent = TransformedTilesComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transformed-tiles',
            template: __webpack_require__(/*! ./transformed-tiles.component.html */ "./src/app/transformed-tiles/transformed-tiles.component.html"),
            styles: [__webpack_require__(/*! ./transformed-tiles.component.scss */ "./src/app/transformed-tiles/transformed-tiles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _tile_transformer_service__WEBPACK_IMPORTED_MODULE_3__["TileTransformerService"]])
    ], TransformedTilesComponent);
    return TransformedTilesComponent;
}());



/***/ }),

/***/ "./src/app/trigger.ts":
/*!****************************!*\
  !*** ./src/app/trigger.ts ***!
  \****************************/
/*! exports provided: Trigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return Trigger; });
var Trigger = /** @class */ (function () {
    function Trigger(eventName) {
        this.elem = document.createElement("span");
        this.listeners = [];
        this.eventName = eventName;
    }
    Trigger.prototype.addListener = function (fn) {
        var len = this.listeners.length;
        this.listeners.push(fn);
        this.elem.addEventListener(this.eventName, fn);
        return len;
    };
    Trigger.prototype.fireWithDetail = function (detail) {
        this.elem.dispatchEvent(new CustomEvent(this.eventName, { detail: detail }));
    };
    Trigger.prototype.fire = function () {
        this.elem.dispatchEvent(new Event(this.eventName));
    };
    return Trigger;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\code\carabiner\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map