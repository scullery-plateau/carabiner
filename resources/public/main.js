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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header class=\"sticky\">\n  <nav class=\"navbar navbar-expand-sm bg-primary navbar-dark\">\n    <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\" onclick=\"toggleDropDown('collapsibleNavbar')\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n      <ul class=\"navbar-nav\">\n        <!--\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#/cobblestone\">CobbleStone</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#/mastermold\">MasterMold</a>\n        </li>\n        -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#/spritely\">Spritely</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n<p></p>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n<div class=\"jumbotron text-center\" style=\"margin-bottom:0\">\n  <p>Built by Daniel Allen Johnson &copy; 2019</p>\n  <p>Contact at <a href=\"https://twitter.com/voltron42\" target=\"_blank\">@voltron42</a> on Twitter.</p>\n</div>\n"

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
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./maps/maps.component */ "./src/app/maps/maps.component.ts");
/* harmony import */ var _palettes_palettes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./palettes/palettes.component */ "./src/app/palettes/palettes.component.ts");
/* harmony import */ var _tiles_tiles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tiles/tiles.component */ "./src/app/tiles/tiles.component.ts");
/* harmony import */ var _characters_characters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./characters/characters.component */ "./src/app/characters/characters.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pixel_canvas_pixel_canvas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pixel-canvas/pixel-canvas.component */ "./src/app/pixel-canvas/pixel-canvas.component.ts");
/* harmony import */ var _pixel_painter_pixel_painter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pixel-painter/pixel-painter.component */ "./src/app/pixel-painter/pixel-painter.component.ts");















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
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_8__["MapsComponent"],
                _palettes_palettes_component__WEBPACK_IMPORTED_MODULE_9__["PalettesComponent"],
                _tiles_tiles_component__WEBPACK_IMPORTED_MODULE_10__["TilesComponent"],
                _characters_characters_component__WEBPACK_IMPORTED_MODULE_11__["CharactersComponent"],
                _pixel_canvas_pixel_canvas_component__WEBPACK_IMPORTED_MODULE_13__["PixelCanvasComponent"],
                _pixel_painter_pixel_painter_component__WEBPACK_IMPORTED_MODULE_14__["PixelPainterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
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

/***/ "./src/app/characters/characters.component.html":
/*!******************************************************!*\
  !*** ./src/app/characters/characters.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"showcase\">\n      <div class=\"nes-container with-title\">\n        <h4 class=\"title\">Characters</h4>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/characters/characters.component.scss":
/*!******************************************************!*\
  !*** ./src/app/characters/characters.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/characters/characters.component.ts":
/*!****************************************************!*\
  !*** ./src/app/characters/characters.component.ts ***!
  \****************************************************/
/*! exports provided: CharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersComponent", function() { return CharactersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CharactersComponent = /** @class */ (function () {
    function CharactersComponent() {
    }
    CharactersComponent.prototype.ngOnInit = function () {
    };
    CharactersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-characters',
            template: __webpack_require__(/*! ./characters.component.html */ "./src/app/characters/characters.component.html"),
            styles: [__webpack_require__(/*! ./characters.component.scss */ "./src/app/characters/characters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CharactersComponent);
    return CharactersComponent;
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

module.exports = "<div class=\"row\"><div class=\"col-1\"><p></p></div></div>\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"showcase\">\r\n      <div class=\"nes-container with-title\">\r\n        <h4 class=\"title\">CobbleStone</h4>\r\n        <app-palettes></app-palettes>\r\n        <app-tiles></app-tiles>\r\n        <app-characters></app-characters>\r\n        <app-maps></app-maps>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\"><div class=\"col-1\"><p></p></div></div>\r\n"

/***/ }),

/***/ "./src/app/cobblestone/cobblestone.component.scss":
/*!********************************************************!*\
  !*** ./src/app/cobblestone/cobblestone.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _cobblestone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cobblestone.service */ "./src/app/cobblestone.service.ts");



var CobblestoneComponent = /** @class */ (function () {
    function CobblestoneComponent(cobblestoneService) {
        this.cobblestoneService = cobblestoneService;
    }
    CobblestoneComponent.prototype.ngOnInit = function () {
    };
    CobblestoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cobblestone',
            template: __webpack_require__(/*! ./cobblestone.component.html */ "./src/app/cobblestone/cobblestone.component.html"),
            styles: [__webpack_require__(/*! ./cobblestone.component.scss */ "./src/app/cobblestone/cobblestone.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cobblestone_service__WEBPACK_IMPORTED_MODULE_2__["CobblestoneService"]])
    ], CobblestoneComponent);
    return CobblestoneComponent;
}());



/***/ }),

/***/ "./src/app/maps/maps.component.html":
/*!******************************************!*\
  !*** ./src/app/maps/maps.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"showcase\">\n      <div class=\"nes-container with-title\">\n        <h4 class=\"title\">Maps</h4>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/maps/maps.component.scss":
/*!******************************************!*\
  !*** ./src/app/maps/maps.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHMvbWFwcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/maps/maps.component.ts":
/*!****************************************!*\
  !*** ./src/app/maps/maps.component.ts ***!
  \****************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    MapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__(/*! ./maps.component.html */ "./src/app/maps/maps.component.html"),
            styles: [__webpack_require__(/*! ./maps.component.scss */ "./src/app/maps/maps.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/mastermold/mastermold.component.html":
/*!******************************************************!*\
  !*** ./src/app/mastermold/mastermold.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mastermold works!\n</p>\n"

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

/***/ "./src/app/palettes/palettes.component.html":
/*!**************************************************!*\
  !*** ./src/app/palettes/palettes.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"showcase\">\n      <div class=\"nes-container with-title\">\n        <h4 class=\"title\">Palettes</h4>\n        <button type=\"button\" class=\"nes-btn is-primary\" (click)=\"addPalette()\">Add Palette</button>\n        <div class=\"form-group\">\n          <label for=\"paletteSelect\">Select Palette:</label>\n          <div class=\"nes-input nes-select\">\n            <select class=\"form-control\" id=\"paletteSelect\">\n              <option *ngFor=\"let paletteName of getService().getPaletteNames()\"\n                      value=\"{{paletteName}}\" [selected]=\"paletteName === selectedPalette\"\n                      (change)=\"selectPalette(paletteName)\">{{paletteName}}</option>\n            </select>\n          </div>\n        </div>\n        <div *ngIf=\"selectedPalette\" class=\"form-group\">\n          <label for=\"colorSelect\">Select Color:</label>\n          <select class=\"form-control\" id=\"colorSelect\">\n            <option *ngFor=\"let color of getService().getPalette(selectedPalette); index as i\" value=\"{{i}}\" (change)=\"selectColor(i)\">{{color}}</option>\n          </select>\n          <input type=\"color\" id=\"colorPicker\" (change)=\"pickColor()\"/>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"addColor()\">Add Color</button>\n        </div>\n        <div *ngIf=\"selectedColorIndex\" class=\"form-group\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"makeTransparent()\">Make Transparent</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateColor()\">Update Color</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"makeTransparent()\">Remove Color From Palette</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/palettes/palettes.component.scss":
/*!**************************************************!*\
  !*** ./src/app/palettes/palettes.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbGV0dGVzL3BhbGV0dGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/palettes/palettes.component.ts":
/*!************************************************!*\
  !*** ./src/app/palettes/palettes.component.ts ***!
  \************************************************/
/*! exports provided: PalettesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalettesComponent", function() { return PalettesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cobblestone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cobblestone.service */ "./src/app/cobblestone.service.ts");



var PalettesComponent = /** @class */ (function () {
    function PalettesComponent(cobbleStoneService) {
        this.cobbleStoneService = cobbleStoneService;
    }
    PalettesComponent.prototype.ngOnInit = function () {
    };
    PalettesComponent.prototype.getService = function () {
        return this.cobbleStoneService;
    };
    PalettesComponent.prototype.addPalette = function () {
        var paletteName = prompt("Enter the name for the new palette");
        if (paletteName) {
            if (!this.getService().hasPalette(paletteName)) {
                this.getService().addPalette("" + paletteName);
                this.selectPalette(paletteName);
            }
        }
    };
    PalettesComponent.prototype.selectPalette = function (paletteName) {
        this.selectedPalette = paletteName;
    };
    PalettesComponent.prototype.selectColor = function (colorIndex) {
        this.selectedColorIndex = colorIndex;
    };
    PalettesComponent.prototype.addColor = function () {
        this.getService().getPalette(this.selectedPalette).push();
    };
    PalettesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-palettes',
            template: __webpack_require__(/*! ./palettes.component.html */ "./src/app/palettes/palettes.component.html"),
            styles: [__webpack_require__(/*! ./palettes.component.scss */ "./src/app/palettes/palettes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cobblestone_service__WEBPACK_IMPORTED_MODULE_2__["CobblestoneService"]])
    ], PalettesComponent);
    return PalettesComponent;
}());



/***/ }),

/***/ "./src/app/pixel-canvas/pixel-canvas.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pixel-canvas/pixel-canvas.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\"100%\" height=\"100%\" [attr.viewBox]=\"'0 0 ' + (width * scale) + ' ' + (height * scale)\">\n  <ng-container *ngFor=\"let y of range.max(height)\">\n    <ng-container *ngFor=\"let x of range.max(width)\">\n      <a href=\"#/spritely\" (click)=\"setColorForPixel(x, y)\">\n        <rect [attr.x]=\"x * scale\" [attr.y]=\"y * scale\" [attr.width]=\"scale\" [attr.height]=\"scale\" [attr.fill]=\"palette[pixels[x + 'x' + y]]||backgroundColor\" style=\"stroke:black;stroke-width:1;\"></rect>\n      </a>\n    </ng-container>\n  </ng-container>\n</svg>\n"

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




var PixelCanvasComponent = /** @class */ (function () {
    function PixelCanvasComponent() {
        this.range = _range__WEBPACK_IMPORTED_MODULE_3__["Range"];
    }
    PixelCanvasComponent.prototype.ngOnInit = function () {
    };
    PixelCanvasComponent.prototype.setColorForPixel = function (x, y) {
        this.pixels[x + 'x' + y] = this.colorIndex;
        this.trigger.fire();
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

module.exports = "<canvas #myCanvas style=\"display:none;\" [width]=\"16 * scale\" [height]=\"16 * scale\"></canvas>\n<span style=\"display:none;\">{{palette.join()}}</span>\n<a [href]=\"imgPath\" class=\"nes-badge\" download=\"spritely.png\">\n  <img class=\"is-primary\" [src]=\"imgPath\" [width]=\"16 * scale\" [height]=\"16 * scale\"/>\n</a>\n"

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
    PixelPainterComponent.prototype.ngOnChanges = function (changes) {
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

module.exports = "<form [formGroup]=\"spritelyForm\" class=\"topic\">\n  <div class=\"showcase col-lg-12\">\n    <div class=\"nes-container with-title\">\n      <h4 class=\"title\">Spritely</h4>\n      <div class=\"row\">\n        <div class=\"col-lg-5\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"showcase\">\n                <div class=\"nes-container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 text-right\">\n                      <label for=\"width\" class=\"text-brand\">Width:</label>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <input type=\"number\" id=\"width\" class=\"nes-input\" formControlName=\"width\"/>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 text-right\">\n                      <label for=\"height\" class=\"text-brand\">Height:</label>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <input type=\"number\" id=\"height\" class=\"nes-input\" formControlName=\"height\"/>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 text-right\">\n                      <label for=\"scale\" class=\"text-brand\">Scale:</label>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <input type=\"number\" id=\"scale\" class=\"nes-input\" formControlName=\"scale\"/>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 text-right\">\n                      <label for=\"backgroundColor\" class=\"text-brand\">Background Color:</label>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <input type=\"color\" id=\"backgroundColor\" class=\"nes-input form-control\" formControlName=\"backgroundColor\" value=\"#fffffe\" (change)=\"setBackground()\"/>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-12 text-center\">\n                      <label for=\"makeTransparent\" class=\"text-brand\">\n                        <input type=\"checkbox\" id=\"makeTransparent\" class=\"nes-checkbox\" formControlName=\"makeTransparent\" (change)=\"makeTransparent()\">\n                        <span>\n                          Make Transparent?\n                        </span>\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 text-right\">\n                      <label for=\"palette\" class=\"text-brand\">Palette: </label>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <div class=\"nes-input nes-select\">\n                        <select id=\"palette\" class=\"form-control\" formControlName=\"selectedPalette\">\n                          <ng-container *ngFor=\"let color of palette; index as i\">\n                            <option *ngIf=\"i > 0\" value=\"{{i}}\">{{i}} - {{color||'Transparent'}}</option>\n                          </ng-container>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 text-right\">\n                      <label for=\"color\" class=\"text-brand\">Color:</label>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <input type=\"color\" id=\"color\" class=\"nes-input form-control\" formControlName=\"color\" value=\"#000001\" (change)=\"setColor()\"/>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-12 text-center\">\n                      <button class=\"nes-btn is-success\" (click)=\"addColor()\">Add Color</button>\n                      <button class=\"nes-btn is-error\" (click)=\"removeColor()\">Remove Color</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"showcase\">\n                <div class=\"nes-container with-title\">\n                  <div class=\"title\">\n                    <label class=\"text-brand\">Image</label>\n                  </div>\n                  <app-pixel-painter\n                    [pixels]=\"pixels\"\n                    [scale]=\"spritelyForm.value.scale\"\n                    [width]=\"spritelyForm.value.width\"\n                    [height]=\"spritelyForm.value.height\"\n                    [palette]=\"palette\"\n                    [trigger]=\"trigger\"\n                  ></app-pixel-painter>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-7\">\n          <div class=\"showcase\">\n            <div class=\"nes-container\">\n              <div class=\"row\">\n                <app-pixel-canvas\n                  class=\"col-12\"\n                  [pixels]=\"pixels\"\n                  [scale]=\"10\"\n                  [width]=\"spritelyForm.value.width\"\n                  [height]=\"spritelyForm.value.height\"\n                  [palette]=\"palette\"\n                  [backgroundColor]=\"spritelyForm.value.backgroundColor\"\n                  [colorIndex]=\"spritelyForm.value.selectedPalette\"\n                  [trigger]=\"trigger\"\n                ></app-pixel-canvas>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/spritely/spritely.component.scss":
/*!**************************************************!*\
  !*** ./src/app/spritely/spritely.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea.pixel-canvas:before {\n  counter-increment: line;\n  content: counter(line);\n  display: inline-block;\n  border-right: 1px solid #ddd;\n  padding: 0 .5em;\n  margin-right: .5em;\n  color: #888; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ByaXRlbHkvQzpcXHByYWN0aWNlXFxjb2RlXFxjYXJhYmluZXJcXGZyb250L3NyY1xcYXBwXFxzcHJpdGVseVxcc3ByaXRlbHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUNGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zcHJpdGVseS9zcHJpdGVseS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhLnBpeGVsLWNhbnZhcyB7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvdW50ZXItaW5jcmVtZW50OiBsaW5lO1xyXG4gICAgY29udGVudDogY291bnRlcihsaW5lKTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiAwIC41ZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XHJcbiAgICBjb2xvcjogIzg4OFxyXG4gIH1cclxufVxyXG4iXX0= */"

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




var SpritelyComponent = /** @class */ (function () {
    function SpritelyComponent(fb) {
        this.fb = fb;
        this.spritelyForm = this.fb.group({
            selectedPalette: [0],
            scale: [5],
            width: [16],
            height: [16],
            color: ['#000001'],
            makeTransparent: [false],
            backgroundColor: ['#fffffe']
        });
        this.palette = [undefined];
        this.pixels = {};
        this.trigger = new _trigger__WEBPACK_IMPORTED_MODULE_3__["Trigger"]("redraw-pixels");
    }
    SpritelyComponent.prototype.ngOnInit = function () {
    };
    SpritelyComponent.prototype.makeTransparent = function () {
        var t = this.spritelyForm.value.makeTransparent;
        console.log(t);
        this.palette[0] = t ? undefined : this.spritelyForm.value.backgroundColor;
        console.log(this.palette);
        this.trigger.fire();
    };
    SpritelyComponent.prototype.setBackground = function () {
        this.palette[0] = this.spritelyForm.value.backgroundColor;
        this.trigger.fire();
    };
    SpritelyComponent.prototype.setColor = function () {
        this.palette[this.spritelyForm.value.selectedPalette] = this.spritelyForm.value.color;
        this.trigger.fire();
    };
    SpritelyComponent.prototype.setColorAsTransparent = function () {
        this.palette[this.spritelyForm.value.selectedPalette] = undefined;
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
    SpritelyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spritely',
            template: __webpack_require__(/*! ./spritely.component.html */ "./src/app/spritely/spritely.component.html"),
            styles: [__webpack_require__(/*! ./spritely.component.scss */ "./src/app/spritely/spritely.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SpritelyComponent);
    return SpritelyComponent;
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

/***/ "./src/app/tiles/tiles.component.html":
/*!********************************************!*\
  !*** ./src/app/tiles/tiles.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"showcase\">\n      <div class=\"nes-container with-title\">\n        <h4 class=\"title\">Tiles</h4>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tiles/tiles.component.scss":
/*!********************************************!*\
  !*** ./src/app/tiles/tiles.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbGVzL3RpbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tiles/tiles.component.ts":
/*!******************************************!*\
  !*** ./src/app/tiles/tiles.component.ts ***!
  \******************************************/
/*! exports provided: TilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilesComponent", function() { return TilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TilesComponent = /** @class */ (function () {
    function TilesComponent() {
    }
    TilesComponent.prototype.ngOnInit = function () {
    };
    TilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tiles',
            template: __webpack_require__(/*! ./tiles.component.html */ "./src/app/tiles/tiles.component.html"),
            styles: [__webpack_require__(/*! ./tiles.component.scss */ "./src/app/tiles/tiles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TilesComponent);
    return TilesComponent;
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

module.exports = __webpack_require__(/*! C:\practice\code\carabiner\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map