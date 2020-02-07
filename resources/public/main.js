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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<header class=\"sticky\">\r\n  <nav class=\"navbar navbar-expand-sm bg-primary navbar-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\"><h2>{{title}}</h2></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\" onclick=\"toggleDropDown('collapsibleNavbar')\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#/spritely\">Spritely</a>\r\n        </li>\r\n        <!--\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#/cobblestone\">CobbleStone</a>\r\n        </li>\r\n        -->\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#/mastermold\">MasterMold</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n<p></p>\r\n<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<footer>\r\n  <div class=\"jumbotron text-center\" style=\"margin-bottom:0\">\r\n    <p>Built by Daniel Allen Johnson &copy; 2019 - 2020</p>\r\n    <p>Contact at <a href=\"https://twitter.com/voltron42\" target=\"_blank\">@voltron42</a> on Twitter.</p>\r\n    <p>See the code at <a href=\"https://github.com/scullery-plateau/carabiner\">scullery-plateau/carabiner</a> on GitHub.</p>\r\n  </div>\r\n</footer>\r\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cobblestone_cobblestone_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cobblestone/cobblestone.component */ "./src/app/cobblestone/cobblestone.component.ts");
/* harmony import */ var _mastermold_mastermold_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mastermold/mastermold.component */ "./src/app/mastermold/mastermold.component.ts");
/* harmony import */ var _spritely_spritely_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spritely/spritely.component */ "./src/app/spritely/spritely.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pixel_canvas_pixel_canvas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pixel-canvas/pixel-canvas.component */ "./src/app/pixel-canvas/pixel-canvas.component.ts");
/* harmony import */ var _pixel_painter_pixel_painter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pixel-painter/pixel-painter.component */ "./src/app/pixel-painter/pixel-painter.component.ts");
/* harmony import */ var _cobblestone_palettes_and_tiles_palettes_and_tiles_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cobblestone/palettes-and-tiles/palettes-and-tiles.component */ "./src/app/cobblestone/palettes-and-tiles/palettes-and-tiles.component.ts");
/* harmony import */ var _util_palette_display_palette_display_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./util/palette-display/palette-display.component */ "./src/app/util/palette-display/palette-display.component.ts");
/* harmony import */ var _util_dialog_wrapper_dialog_wrapper_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util/dialog-wrapper/dialog-wrapper.component */ "./src/app/util/dialog-wrapper/dialog-wrapper.component.ts");
/* harmony import */ var _util_accordian_accordian_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./util/accordian/accordian.component */ "./src/app/util/accordian/accordian.component.ts");
/* harmony import */ var _cobblestone_transformed_tiles_transformed_tiles_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cobblestone/transformed-tiles/transformed-tiles.component */ "./src/app/cobblestone/transformed-tiles/transformed-tiles.component.ts");
/* harmony import */ var _cobblestone_cobblestone_map_cobblestone_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cobblestone/cobblestone-map/cobblestone-map.component */ "./src/app/cobblestone/cobblestone-map/cobblestone-map.component.ts");
/* harmony import */ var _cobblestone_map_page_picker_map_page_picker_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cobblestone/map-page-picker/map-page-picker.component */ "./src/app/cobblestone/map-page-picker/map-page-picker.component.ts");
/* harmony import */ var _util_nes_tabs_tabbed_panel_tabbed_panel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./util/nes-tabs/tabbed-panel/tabbed-panel.component */ "./src/app/util/nes-tabs/tabbed-panel/tabbed-panel.component.ts");
/* harmony import */ var _util_nes_tabs_child_panel_child_panel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./util/nes-tabs/child-panel/child-panel.component */ "./src/app/util/nes-tabs/child-panel/child-panel.component.ts");
/* harmony import */ var _util_file_form_file_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./util/file-form/file-form.component */ "./src/app/util/file-form/file-form.component.ts");
/* harmony import */ var _util_file_load_input_file_load_input_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./util/file-load-input/file-load-input.component */ "./src/app/util/file-load-input/file-load-input.component.ts");
/* harmony import */ var _util_pixel_pending_pixel_pending_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./util/pixel-pending/pixel-pending.component */ "./src/app/util/pixel-pending/pixel-pending.component.ts");
/* harmony import */ var _cobblestone_transformed_tile_def_transformed_tile_def_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cobblestone/transformed-tile-def/transformed-tile-def.component */ "./src/app/cobblestone/transformed-tile-def/transformed-tile-def.component.ts");
/* harmony import */ var _cobblestone_transformed_tile_display_transformed_tile_display_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./cobblestone/transformed-tile-display/transformed-tile-display.component */ "./src/app/cobblestone/transformed-tile-display/transformed-tile-display.component.ts");
/* harmony import */ var _cobblestone_transformed_tile_ref_transformed_tile_ref_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cobblestone/transformed-tile-ref/transformed-tile-ref.component */ "./src/app/cobblestone/transformed-tile-ref/transformed-tile-ref.component.ts");
/* harmony import */ var _mock_http_mock_request_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mock/http-mock-request-interceptor */ "./src/app/mock/http-mock-request-interceptor.ts");
/* harmony import */ var _util_confirm_cancel_dialog_confirm_cancel_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./util/confirm-cancel-dialog/confirm-cancel-dialog.component */ "./src/app/util/confirm-cancel-dialog/confirm-cancel-dialog.component.ts");
/* harmony import */ var _util_okay_dialog_okay_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./util/okay-dialog/okay-dialog.component */ "./src/app/util/okay-dialog/okay-dialog.component.ts");
/* harmony import */ var _mastermold_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mastermold/image-list/image-list.component */ "./src/app/mastermold/image-list/image-list.component.ts");
/* harmony import */ var _mastermold_mini_gallery_mini_gallery_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mastermold/mini-gallery/mini-gallery.component */ "./src/app/mastermold/mini-gallery/mini-gallery.component.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _cobblestone_cobblestone_component__WEBPACK_IMPORTED_MODULE_6__["CobblestoneComponent"],
                _mastermold_mastermold_component__WEBPACK_IMPORTED_MODULE_7__["MastermoldComponent"],
                _spritely_spritely_component__WEBPACK_IMPORTED_MODULE_8__["SpritelyComponent"],
                _pixel_canvas_pixel_canvas_component__WEBPACK_IMPORTED_MODULE_10__["PixelCanvasComponent"],
                _pixel_painter_pixel_painter_component__WEBPACK_IMPORTED_MODULE_11__["PixelPainterComponent"],
                _cobblestone_palettes_and_tiles_palettes_and_tiles_component__WEBPACK_IMPORTED_MODULE_12__["PalettesAndTilesComponent"],
                _util_palette_display_palette_display_component__WEBPACK_IMPORTED_MODULE_13__["PaletteDisplayComponent"],
                _util_dialog_wrapper_dialog_wrapper_component__WEBPACK_IMPORTED_MODULE_14__["DialogWrapperComponent"],
                _util_accordian_accordian_component__WEBPACK_IMPORTED_MODULE_15__["AccordianComponent"],
                _cobblestone_transformed_tiles_transformed_tiles_component__WEBPACK_IMPORTED_MODULE_16__["TransformedTilesComponent"],
                _cobblestone_cobblestone_map_cobblestone_map_component__WEBPACK_IMPORTED_MODULE_17__["CobblestoneMapComponent"],
                _cobblestone_map_page_picker_map_page_picker_component__WEBPACK_IMPORTED_MODULE_18__["MapPagePickerComponent"],
                _util_nes_tabs_tabbed_panel_tabbed_panel_component__WEBPACK_IMPORTED_MODULE_19__["TabbedPanelComponent"],
                _util_nes_tabs_child_panel_child_panel_component__WEBPACK_IMPORTED_MODULE_20__["ChildPanelComponent"],
                _util_file_form_file_form_component__WEBPACK_IMPORTED_MODULE_21__["FileFormComponent"],
                _util_file_load_input_file_load_input_component__WEBPACK_IMPORTED_MODULE_22__["FileLoadInputComponent"],
                _util_pixel_pending_pixel_pending_component__WEBPACK_IMPORTED_MODULE_23__["PixelPendingComponent"],
                _cobblestone_transformed_tile_def_transformed_tile_def_component__WEBPACK_IMPORTED_MODULE_24__["TransformedTileDefComponent"],
                _cobblestone_transformed_tile_display_transformed_tile_display_component__WEBPACK_IMPORTED_MODULE_25__["TransformedTileDisplayComponent"],
                _cobblestone_transformed_tile_ref_transformed_tile_ref_component__WEBPACK_IMPORTED_MODULE_26__["TransformedTileRefComponent"],
                _util_confirm_cancel_dialog_confirm_cancel_dialog_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmCancelDialogComponent"],
                _util_okay_dialog_okay_dialog_component__WEBPACK_IMPORTED_MODULE_29__["OkayDialogComponent"],
                _mastermold_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_30__["ImageListComponent"],
                _mastermold_mini_gallery_mini_gallery_component__WEBPACK_IMPORTED_MODULE_31__["MiniGalleryComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _mock_http_mock_request_interceptor__WEBPACK_IMPORTED_MODULE_27__["HttpMockRequestInterceptor"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cobblestone/char-index.service.ts":
/*!***************************************************!*\
  !*** ./src/app/cobblestone/char-index.service.ts ***!
  \***************************************************/
/*! exports provided: CharIndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharIndexService", function() { return CharIndexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+-=`;:'\"[]{}\\|,.<>/?";
var CharIndexService = /** @class */ (function () {
    function CharIndexService() {
    }
    CharIndexService.prototype.getAll = function () {
        return chars.split("");
    };
    CharIndexService.prototype.getUnused = function (used) {
        return chars.split("").filter(function (ch) {
            return (used.indexOf(ch) == -1);
        });
    };
    CharIndexService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CharIndexService);
    return CharIndexService;
}());



/***/ }),

/***/ "./src/app/cobblestone/cobblestone-file.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/cobblestone/cobblestone-file.service.ts ***!
  \*********************************************************/
/*! exports provided: CobblestoneFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobblestoneFileService", function() { return CobblestoneFileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_download_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/download-link */ "./src/app/util/download-link.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CobblestoneFileService = /** @class */ (function () {
    function CobblestoneFileService(client) {
        this.client = client;
        this.downloader = new _util_download_link__WEBPACK_IMPORTED_MODULE_2__["DownloadLink"]();
    }
    CobblestoneFileService.prototype.parseLoadData = function (loadData) {
        return this.client.post("/cobblestone/load", loadData);
    };
    CobblestoneFileService.prototype.downloadImage = function (saveData, scale, fileName) {
        var _this = this;
        this.client.post("/cobblestone/save", {
            "scale": scale,
            "full-map": saveData
        }).subscribe(function (base64) {
            _this.downloader.setFileName(fileName);
            _this.downloader.setPath("data:image/png;base64," + base64);
            _this.downloader.invokeDownload();
        });
    };
    CobblestoneFileService.prototype.downloaddata = function (saveData, fileName) {
        var _this = this;
        this.client.post("/cobblestone/save", saveData).subscribe(function (rawdata) {
            _this.downloader.setFileName(fileName);
            _this.downloader.setPath("data:text/plain;," + encodeURIComponent(rawdata.split("\n").join("\r\n")));
            _this.downloader.invokeDownload();
        });
    };
    CobblestoneFileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CobblestoneFileService);
    return CobblestoneFileService;
}());



/***/ }),

/***/ "./src/app/cobblestone/cobblestone-map/cobblestone-map.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/cobblestone/cobblestone-map/cobblestone-map.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tf-tile-def\r\n  [state]=\"state\"\r\n  [transformTrigger]=\"transformTrigger\"\r\n></tf-tile-def>\r\n<div class=\"row\">\r\n  <div class=\"col-4\">\r\n    <div class=\"showcase\">\r\n      <div class=\"nes-container\">\r\n        <ng-container *ngIf=\"state.transforms\">\r\n          <ng-container *ngFor=\"let tf of state.transforms | keyvalue\">\r\n            <div class=\"col-12\">\r\n              <button (click)=\"select(tf.key)\">\r\n\r\n              </button>\r\n            </div>\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-8\">\r\n    <div class=\"showcase\">\r\n      <div class=\"nes-container\">\r\n        <form [formGroup]=\"dimForm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label for=\"width\" class=\"text-brand\">Width:</label>\r\n              <input type=\"number\" min=\"8\" max=\"64\" id=\"width\" class=\"nes-input\" formControlName=\"width\" (change)=\"resize()\"/>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label for=\"height\" class=\"text-brand\">Height:</label>\r\n              <input type=\"number\" min=\"8\" max=\"64\" id=\"height\" class=\"nes-input\" formControlName=\"height\" (change)=\"resize()\"/>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label for=\"scale\" class=\"text-brand\">Scale:</label>\r\n              <input type=\"number\" min=\"1\" max=\"4\" id=\"scale\" class=\"nes-input\" formControlName=\"scale\" (change)=\"resize()\"/>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 map-frame\">\r\n            <svg\r\n              [attr.width]=\"dimForm.value.width * dimForm.value.scale * 16\"\r\n              [attr.height]=\"dimForm.value.height * dimForm.value.scale * 16\">\r\n              <ng-container *ngIf=\"state.map\">\r\n                <ng-container *ngFor=\"let y of range.max(dimForm.value.height)\">\r\n                  <ng-container *ngFor=\"let x of range.max(dimForm.value.width)\">\r\n                    <a href=\"#/cobblestone\" (click)=\"setTile(x,y)\">\r\n                      <rect [attr.href]=\"'url(#' + getTile(x,y) + ')'\"\r\n                            [attr.x]=\"x * dimForm.value.scale * 16\"\r\n                            [attr.y]=\"y * dimForm.value.scale * 16\"/>\r\n                    </a>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </ng-container>\r\n            </svg>\r\n          </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cobblestone/cobblestone-map/cobblestone-map.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/cobblestone/cobblestone-map/cobblestone-map.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "map-frame {\n  overflow: scroll;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUtbWFwL0M6XFxwcmFjdGljZVxcY29kZVxcY2FyYWJpbmVyXFxmcm9udC9zcmNcXGFwcFxcY29iYmxlc3RvbmVcXGNvYmJsZXN0b25lLW1hcFxcY29iYmxlc3RvbmUtbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS1tYXAvY29iYmxlc3RvbmUtbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFwLWZyYW1lIHtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/cobblestone/cobblestone-map/cobblestone-map.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/cobblestone/cobblestone-map/cobblestone-map.component.ts ***!
  \**************************************************************************/
/*! exports provided: CobblestoneMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobblestoneMapComponent", function() { return CobblestoneMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/range */ "./src/app/util/range.ts");
/* harmony import */ var _util_point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/point */ "./src/app/util/point.ts");
/* harmony import */ var _util_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/trigger */ "./src/app/util/trigger.ts");






var CobblestoneMapComponent = /** @class */ (function () {
    function CobblestoneMapComponent(fb) {
        this.fb = fb;
        this.dimForm = this.fb.group({
            width: [8],
            height: [10],
            scale: [3]
        });
        this.range = _util_range__WEBPACK_IMPORTED_MODULE_3__["Range"];
    }
    CobblestoneMapComponent.prototype.ngOnInit = function () {
    };
    CobblestoneMapComponent.prototype.updateFromFile = function () {
    };
    CobblestoneMapComponent.prototype.select = function (key) {
        this.activeKey = key;
    };
    CobblestoneMapComponent.prototype.setTile = function (x, y) {
        var key = (new _util_point__WEBPACK_IMPORTED_MODULE_4__["Point"](x, y)).toString();
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
        var p = new _util_point__WEBPACK_IMPORTED_MODULE_4__["Point"](x, y);
        return this.state.map[p.toString()] || "bg";
    };
    CobblestoneMapComponent.prototype.pixel = function (key, x, y) {
        var tfTile = this.state.transforms[key];
        var palette = tfTile.palette;
        var tile = tfTile.tile;
        var p = (new _util_point__WEBPACK_IMPORTED_MODULE_4__["Point"](x, y)).toString();
        return palette[tile[p] || 0];
    };
    CobblestoneMapComponent.prototype.resize = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CobblestoneMapComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CobblestoneMapComponent.prototype, "scale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _util_trigger__WEBPACK_IMPORTED_MODULE_5__["Trigger"])
    ], CobblestoneMapComponent.prototype, "loadTrigger", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _util_trigger__WEBPACK_IMPORTED_MODULE_5__["Trigger"])
    ], CobblestoneMapComponent.prototype, "transformTrigger", void 0);
    CobblestoneMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cobblestone-map',
            template: __webpack_require__(/*! ./cobblestone-map.component.html */ "./src/app/cobblestone/cobblestone-map/cobblestone-map.component.html"),
            styles: [__webpack_require__(/*! ./cobblestone-map.component.scss */ "./src/app/cobblestone/cobblestone-map/cobblestone-map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CobblestoneMapComponent);
    return CobblestoneMapComponent;
}());



/***/ }),

/***/ "./src/app/cobblestone/cobblestone.component.html":
/*!********************************************************!*\
  !*** ./src/app/cobblestone/cobblestone.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"><div class=\"col-1\"><p></p></div></div>\r\n<tabbed-panel\r\n  title=\"CobbleStone\"\r\n  activeClass=\"is-success\"\r\n  [initActiveIndex]=\"0\">\r\n  <tab-child label=\"File\">\r\n    <file-form\r\n      [defaultSaveFile]=\"defaultSaveFile\"\r\n      [prepareLoadedData]=\"fileLoadHandler()\"\r\n      [fileLoadCallback]=\"fileLoadCallback()\"\r\n      [invokeDownload]=\"dataDownloader()\">\r\n    </file-form>\r\n  </tab-child>\r\n  <tab-child label=\"Palettes &amp; Tiles\">\r\n    <app-palettes-and-tiles [state]=\"state\" [loadTrigger]=\"loadTrigger\"></app-palettes-and-tiles>\r\n  </tab-child>\r\n  <tab-child label=\"Transforms\">\r\n    <app-transformed-tiles\r\n      [state]=\"state\" [scale]=\"scale\"\r\n      [loadTrigger]=\"loadTrigger\"\r\n      [transformTrigger]=\"transformTrigger\"\r\n    ></app-transformed-tiles>\r\n  </tab-child>\r\n  <tab-child label=\"Map\">\r\n    <app-cobblestone-map [state]=\"state\" [scale]=\"scale\" [loadTrigger]=\"loadTrigger\"\r\n                         [transformTrigger]=\"transformTrigger\"></app-cobblestone-map>\r\n  </tab-child>\r\n  <!--\r\n  <tab-child label=\"Paging\">\r\n    <app-map-page-picker [state]=\"state\"></app-map-page-picker>\r\n  </tab-child>\r\n  -->\r\n</tabbed-panel>\r\n<div class=\"row\"><div class=\"col-1\"><p></p></div></div>\r\n"

/***/ }),

/***/ "./src/app/cobblestone/cobblestone.component.scss":
/*!********************************************************!*\
  !*** ./src/app/cobblestone/cobblestone.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen {\n  .print-cobblestone {\n    display: none; } }\n\n@media print {\n  footer {\n    display: none; }\n  .print-cobblestone {\n    display: block; }\n  tabbed-panel {\n    display: none; }\n  header {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29iYmxlc3RvbmUvQzpcXHByYWN0aWNlXFxjb2RlXFxjYXJhYmluZXJcXGZyb250L3NyY1xcYXBwXFxjb2JibGVzdG9uZVxcY29iYmxlc3RvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUdIO0VBQ0U7SUFDRSxhQUFhLEVBQUE7RUFFZjtJQUNFLGNBQWMsRUFBQTtFQUVoQjtJQUNFLGFBQWEsRUFBQTtFQUVmO0lBQ0UsYUFBYSxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5wcmludC1jb2JibGVzdG9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICBmb290ZXIgIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5wcmludC1jb2JibGVzdG9uZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgdGFiYmVkLXBhbmVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIGhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _util_trigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/trigger */ "./src/app/util/trigger.ts");
/* harmony import */ var _cobblestone_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cobblestone-file.service */ "./src/app/cobblestone/cobblestone-file.service.ts");
/* harmony import */ var _tile_transformer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tile-transformer.service */ "./src/app/cobblestone/tile-transformer.service.ts");
/* harmony import */ var _model_cobblestone_app_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/cobblestone-app-state */ "./src/app/cobblestone/model/cobblestone-app-state.ts");







var CobblestoneComponent = /** @class */ (function () {
    function CobblestoneComponent(fb, cfs, ttf) {
        this.fb = fb;
        this.cfs = cfs;
        this.ttf = ttf;
        this.state = new _model_cobblestone_app_state__WEBPACK_IMPORTED_MODULE_6__["CobblestoneAppState"]();
        this.loadTrigger = new _util_trigger__WEBPACK_IMPORTED_MODULE_3__["Trigger"]("on-file-load");
        this.transformTrigger = new _util_trigger__WEBPACK_IMPORTED_MODULE_3__["Trigger"]("on-transforms-updated");
    }
    CobblestoneComponent.prototype.ngOnInit = function () {
    };
    CobblestoneComponent.prototype.fileLoadHandler = function () {
        var me = this;
        return function (fileData) {
            return me.cfs.parseLoadData(fileData);
        };
    };
    CobblestoneComponent.prototype.fileLoadCallback = function () {
        var me = this;
        return function (json) {
            me.state.loadData(json, me.ttf);
            me.loadTrigger.fire();
        };
    };
    CobblestoneComponent.prototype.saveData = function () {
        return this.state.getData();
    };
    CobblestoneComponent.prototype.dataDownloader = function () {
        var me = this;
        return function (filename) {
            me.cfs.downloaddata(me.saveData(), filename);
        };
    };
    CobblestoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cobblestone',
            template: __webpack_require__(/*! ./cobblestone.component.html */ "./src/app/cobblestone/cobblestone.component.html"),
            styles: [__webpack_require__(/*! ./cobblestone.component.scss */ "./src/app/cobblestone/cobblestone.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _cobblestone_file_service__WEBPACK_IMPORTED_MODULE_4__["CobblestoneFileService"],
            _tile_transformer_service__WEBPACK_IMPORTED_MODULE_5__["TileTransformerService"]])
    ], CobblestoneComponent);
    return CobblestoneComponent;
}());



/***/ }),

/***/ "./src/app/cobblestone/map-page-picker/map-page-picker.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/cobblestone/map-page-picker/map-page-picker.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  map-page-picker works!\n</p>\n"

/***/ }),

/***/ "./src/app/cobblestone/map-page-picker/map-page-picker.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/cobblestone/map-page-picker/map-page-picker.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvYmJsZXN0b25lL21hcC1wYWdlLXBpY2tlci9tYXAtcGFnZS1waWNrZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cobblestone/map-page-picker/map-page-picker.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/cobblestone/map-page-picker/map-page-picker.component.ts ***!
  \**************************************************************************/
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
            template: __webpack_require__(/*! ./map-page-picker.component.html */ "./src/app/cobblestone/map-page-picker/map-page-picker.component.html"),
            styles: [__webpack_require__(/*! ./map-page-picker.component.scss */ "./src/app/cobblestone/map-page-picker/map-page-picker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapPagePickerComponent);
    return MapPagePickerComponent;
}());



/***/ }),

/***/ "./src/app/cobblestone/model/TransformedTile.ts":
/*!******************************************************!*\
  !*** ./src/app/cobblestone/model/TransformedTile.ts ***!
  \******************************************************/
/*! exports provided: TransformedTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformedTile", function() { return TransformedTile; });
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform */ "./src/app/cobblestone/model/transform.ts");

var TransformedTile = /** @class */ (function () {
    function TransformedTile() {
    }
    TransformedTile.prototype.unparse = function () {
        var _this = this;
        var tfs = Object.values(_transform__WEBPACK_IMPORTED_MODULE_0__["Transform"]).filter(function (tf) {
            return _this.transformations.indexOf(tf) >= 0;
        });
        tfs.sort();
        return [this.tileName, this.paletteName].concat(tfs).join("_");
    };
    TransformedTile.parse = function (key) {
        var out = new TransformedTile();
        var fields = key.split("_");
        out.tileName = fields[0];
        out.paletteName = fields[1];
        var tfs = fields.splice(2);
        out.transformations = Object.values(_transform__WEBPACK_IMPORTED_MODULE_0__["Transform"]).filter(function (tf) {
            return tfs.indexOf(tf) >= 0;
        });
        return out;
    };
    return TransformedTile;
}());



/***/ }),

/***/ "./src/app/cobblestone/model/cobblestone-app-state.ts":
/*!************************************************************!*\
  !*** ./src/app/cobblestone/model/cobblestone-app-state.ts ***!
  \************************************************************/
/*! exports provided: CobblestoneAppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobblestoneAppState", function() { return CobblestoneAppState; });
/* harmony import */ var _TransformedTile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransformedTile */ "./src/app/cobblestone/model/TransformedTile.ts");
/* harmony import */ var _cobblestone_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cobblestone-data */ "./src/app/cobblestone/model/cobblestone-data.ts");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transform */ "./src/app/cobblestone/model/transform.ts");



var CobblestoneAppState = /** @class */ (function () {
    function CobblestoneAppState() {
        this.palettes = new Map();
        this.tiles = new Map();
        this.mapping = new Map();
        this.transforms = new Map();
        this.map = new Map();
        this.paging = [];
    }
    CobblestoneAppState.prototype.loadData = function (data, ttf) {
        var _this = this;
        console.log(data);
        this.palettes = new Map();
        Object.entries(data.palettes).forEach(function (entry) {
            _this.palettes.set(entry[0], entry[1]);
        });
        this.tiles = new Map();
        Object.entries(data.tiles).forEach(function (entry) {
            _this.tiles.set(entry[0], entry[1]);
        });
        this.mapping = new Map();
        Object.entries(data.mapping).forEach(function (entry) {
            var tfTile = new _TransformedTile__WEBPACK_IMPORTED_MODULE_0__["TransformedTile"]();
            tfTile.tileName = entry[1]["tile-name"];
            tfTile.paletteName = entry[1]["palette-name"];
            console.log(entry);
            var tfs = entry[1]["transforms"] || [];
            console.log(tfs);
            tfTile.transformations = Object.values(_transform__WEBPACK_IMPORTED_MODULE_2__["Transform"]).filter(function (tf) {
                return tfs.indexOf(tf) >= 0;
            });
            console.log(tfTile.transformations);
            console.log(tfTile);
            console.log(tfTile.unparse());
            _this.mapping.set(entry[0], tfTile);
        });
        this.map = new Map();
        Object.entries(data.map).forEach(function (entry) {
            _this.map.set(entry[0], entry[1]);
        });
        this.paging = [];
        data.paging.forEach(function (page) {
            _this.paging.push(page);
        });
        this.mapping.forEach(function (mapping, myChar) {
            mapping.transformations.sort();
            var key = ttf.parseMappingToKey(mapping);
            if (_this.transforms.has(key)) {
                var oldChar = _this.transforms.get(key);
                _this.mapping.delete(oldChar);
            }
            _this.transforms.set(key, myChar);
        });
        console.log(this);
    };
    CobblestoneAppState.prototype.getData = function () {
        var data = new _cobblestone_data__WEBPACK_IMPORTED_MODULE_1__["CobblestoneData"]();
        data.paging = this.paging;
        data.palettes = this.palettes;
        data.tiles = this.tiles;
        data.map = this.map;
        data.mapping = new Map();
        this.mapping.forEach(function (tfTile, myChar) {
            data.mapping.set(myChar, {
                "palette-name": tfTile.paletteName,
                "tile-name": tfTile.tileName,
                "transforms": tfTile.transformations.map(function (tf) { return tf; })
            });
        });
        return data;
    };
    return CobblestoneAppState;
}());



/***/ }),

/***/ "./src/app/cobblestone/model/cobblestone-data.ts":
/*!*******************************************************!*\
  !*** ./src/app/cobblestone/model/cobblestone-data.ts ***!
  \*******************************************************/
/*! exports provided: CobblestoneData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobblestoneData", function() { return CobblestoneData; });
var CobblestoneData = /** @class */ (function () {
    function CobblestoneData() {
    }
    return CobblestoneData;
}());



/***/ }),

/***/ "./src/app/cobblestone/model/transform.ts":
/*!************************************************!*\
  !*** ./src/app/cobblestone/model/transform.ts ***!
  \************************************************/
/*! exports provided: Transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return Transform; });
var Transform;
(function (Transform) {
    Transform["TurnLeft"] = "turn-left";
    Transform["TurnRight"] = "turn-right";
    Transform["FlipOver"] = "flip-over";
    Transform["FlipDown"] = "flip-down";
})(Transform || (Transform = {}));


/***/ }),

/***/ "./src/app/cobblestone/palettes-and-tiles/palettes-and-tiles.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/cobblestone/palettes-and-tiles/palettes-and-tiles.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"paletteAndTileForm\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"showcase\">\r\n            <div class=\"nes-container with-title\">\r\n              <div class=\"title\">\r\n                <h6>Palettes</h6>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-5 text-right\">\r\n                  <label for=\"palettes\" class=\"text-brand\">Palettes: </label>\r\n                </div>\r\n                <div class=\"col-sm-7\">\r\n                  <div class=\"nes-input nes-select\">\r\n                    <select id=\"palettes\" class=\"form-control\" formControlName=\"selectedPalette\" (change)=\"selectPalette()\">\r\n                      <ng-container *ngIf=\"state.palettes\">\r\n                        <ng-container *ngFor=\"let palette of state.palettes | keyvalue\">\r\n                          <option value=\"{{palette.key}}\">{{palette.key}}</option>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12 text-center\">\r\n                  <dialog-wrapper\r\n                    [triggerBtnName]=\"'Add Palette'\"\r\n                    [dialogConfirm]=\"paletteAdder()\"\r\n                    [dialogClose]=\"paletteDialogCloser()\">\r\n                    <label for=\"paletteName\">Palette Name</label>\r\n                    <input type=\"text\" class=\"nes-input\" id=\"paletteName\" formControlName=\"paletteName\"/>\r\n                  </dialog-wrapper>\r\n                  <button type=\"button\" name=\"button\" class=\"nes-btn is-error\" (click)=\"removePalette()\">Remove Palette</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-5 text-right\">\r\n                  <label for=\"colors\" class=\"text-brand\">Colors: </label>\r\n                </div>\r\n                <div class=\"col-sm-7\">\r\n                  <div class=\"nes-input nes-select\"><select id=\"colors\" class=\"form-control\" formControlName=\"selectedColor\" (change)=\"selectColor()\">\r\n                      <ng-container *ngFor=\"let color of activePalette; index as i\">\r\n                        <option value=\"{{i}}\">{{i}} - {{color||'Transparent'}}</option>\r\n                      </ng-container>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-5 text-right\">a\r\n                  <label for=\"color\" class=\"text-brand\">Color:</label>\r\n                </div>\r\n                <div class=\"col-sm-7\">\r\n                  <input type=\"color\" id=\"color\" class=\"nes-input form-control\" formControlName=\"color\" value=\"#000001\" (change)=\"setColor()\"/>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 text-center\">\r\n                  <label for=\"makeTransparent\" class=\"text-brand\">\r\n                    <input type=\"checkbox\" id=\"makeTransparent\" class=\"nes-checkbox\" formControlName=\"makeTransparent\" (change)=\"makeTransparent()\">\r\n                    <span>Make Transparent?</span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 text-center\">\r\n                  <button class=\"nes-btn is-success\" (click)=\"addColor()\">Add Color</button>\r\n                  <button class=\"nes-btn is-error\" (click)=\"removeColor()\">Remove Color</button>\r\n                </div>\r\n              </div>\r\n              <p></p>\r\n              <app-palette-display\r\n                [palette]=\"activePalette\"\r\n                href=\"#/cobblestone\"\r\n                showFirst=\"true\"\r\n                [selectFn]=\"colorIndexSetter()\"\r\n              ></app-palette-display>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"showcase\">\r\n            <div class=\"nes-container with-title\">\r\n              <div class=\"title\">\r\n                <h6>Tiles</h6>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 text-right\">\r\n                  <label for=\"selectedTile\">Active Tile</label>\r\n                </div>\r\n                <div class=\"col-7\">\r\n                  <div class=\"nes-input nes-select\">\r\n                    <select class=\"form-control\" id=\"selectedTile\" formControlName=\"selectedTile\" (change)=\"selectTile()\">\r\n                      <ng-container *ngIf=\"state.tiles\">\r\n                        <ng-container *ngFor=\"let tile of state.tiles | keyvalue\">\r\n                          <option value=\"{{tile.key}}\">{{tile.key}}</option>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12 text-center\">\r\n                  <dialog-wrapper\r\n                    [triggerBtnName]=\"'Add Tile'\"\r\n                    [dialogConfirm]=\"tileAdder()\"\r\n                    [dialogClose]=\"tileDialogCloser()\">\r\n                    <label for=\"tileName\">Tile Name</label>\r\n                    <input type=\"text\" class=\"nes-input\" id=\"tileName\" formControlName=\"tileName\"/>\r\n                  </dialog-wrapper>\r\n                  <button type=\"button\" name=\"button\" class=\"nes-btn is-error\" (click)=\"removeTile()\">Remove Tile</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8\">\r\n      <div class=\"showcase\">\r\n        <div class=\"nes-container with-title\">\r\n          <div class=\"title\">\r\n            <h5>Tile Canvas</h5>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-5 text-right\">\r\n              <label for=\"backgroundColor\" class=\"text-brand\">Background Color:</label>\r\n            </div>\r\n            <div class=\"col-sm-7\">\r\n              <input type=\"color\" id=\"backgroundColor\" class=\"nes-input form-control\" formControlName=\"backgroundColor\" value=\"#fffffe\" (change)=\"setBackground()\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <app-pixel-canvas\r\n                [pixels]=\"activeTile\"\r\n                [scale]=\"10\"\r\n                [width]=\"16\"\r\n                [height]=\"16\"\r\n                [palette]=\"activePalette\"\r\n                [backgroundColor]=\"getBackground()\"\r\n                [colorIndex]=\"activeColorIndex\"\r\n                page=\"cobblestone\"\r\n              ></app-pixel-canvas>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/cobblestone/palettes-and-tiles/palettes-and-tiles.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/cobblestone/palettes-and-tiles/palettes-and-tiles.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvYmJsZXN0b25lL3BhbGV0dGVzLWFuZC10aWxlcy9wYWxldHRlcy1hbmQtdGlsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cobblestone/palettes-and-tiles/palettes-and-tiles.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/cobblestone/palettes-and-tiles/palettes-and-tiles.component.ts ***!
  \********************************************************************************/
/*! exports provided: PalettesAndTilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalettesAndTilesComponent", function() { return PalettesAndTilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_trigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/trigger */ "./src/app/util/trigger.ts");




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
        this.trigger = new _util_trigger__WEBPACK_IMPORTED_MODULE_3__["Trigger"]("redraw-tile");
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
        this.activePalette = this.state.palettes.get(this.paletteAndTileForm.value.selectedPalette);
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
        this.activeTile = this.state.tiles.get(this.paletteAndTileForm.value.selectedTile);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PalettesAndTilesComponent.prototype, "scale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _util_trigger__WEBPACK_IMPORTED_MODULE_3__["Trigger"])
    ], PalettesAndTilesComponent.prototype, "loadTrigger", void 0);
    PalettesAndTilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-palettes-and-tiles',
            template: __webpack_require__(/*! ./palettes-and-tiles.component.html */ "./src/app/cobblestone/palettes-and-tiles/palettes-and-tiles.component.html"),
            styles: [__webpack_require__(/*! ./palettes-and-tiles.component.scss */ "./src/app/cobblestone/palettes-and-tiles/palettes-and-tiles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PalettesAndTilesComponent);
    return PalettesAndTilesComponent;
}());



/***/ }),

/***/ "./src/app/cobblestone/tile-transformer.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/cobblestone/tile-transformer.service.ts ***!
  \*********************************************************/
/*! exports provided: TileTransformerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileTransformerService", function() { return TileTransformerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/point */ "./src/app/util/point.ts");
/* harmony import */ var _model_transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/transform */ "./src/app/cobblestone/model/transform.ts");
/* harmony import */ var _model_TransformedTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/TransformedTile */ "./src/app/cobblestone/model/TransformedTile.ts");





var tfs = {
    "turn-left": "turnLeft",
    "turn-right": "turnRight",
    "flip-down": "flipDown",
    "flip-over": "flipOver"
};
var TileTransformerService = /** @class */ (function () {
    function TileTransformerService() {
    }
    TileTransformerService.prototype.parseMappingToKey = function (tfTile) {
        var tfs = Object.values(_model_transform__WEBPACK_IMPORTED_MODULE_3__["Transform"]).filter(function (tf) {
            return tfTile.transformations.indexOf(tf) >= 0;
        });
        tfs.sort();
        return [tfTile.tileName, tfTile.paletteName].concat(tfs).join("_");
    };
    TileTransformerService.prototype.parseKeyToForm = function (key) {
        var tile = _model_TransformedTile__WEBPACK_IMPORTED_MODULE_4__["TransformedTile"].parse(key);
        var out = {};
        out.selectedPalette = tile.paletteName;
        out.selectedTile = tile.tileName;
        Object.values(_model_transform__WEBPACK_IMPORTED_MODULE_3__["Transform"]).forEach(function (tf) {
            out[tf] = (tile.transformations.indexOf(tf) >= 0);
        });
        return out;
    };
    TileTransformerService.prototype.printFormKey = function (formValue) {
        if (formValue === void 0) { formValue = {}; }
        var tfs = Object.values(_model_transform__WEBPACK_IMPORTED_MODULE_3__["Transform"]).filter(function (tf) {
            return formValue[tf];
        });
        tfs.sort();
        return [formValue.selectedTile, formValue.selectedPalette].concat(tfs).join("_");
    };
    TileTransformerService.prototype.buildTransformedTile = function (state, key) {
        console.log("building tracking");
        if (state.transforms) {
            var myChar = state.transforms.get(key);
            console.log("my char");
            console.log(myChar);
            if (myChar) {
                var tf_1 = {
                    key: key,
                    pixels: []
                };
                var mapping_1 = state.mapping.get(myChar);
                console.log(mapping_1);
                var palette_1 = state.palettes.get(mapping_1.paletteName);
                console.log(palette_1);
                var tile = state.tiles.get(mapping_1.tileName);
                console.log(tile);
                if (palette_1 && tile) {
                    if (palette_1[0]) {
                        tf_1.bg = palette_1[0];
                    }
                    Object.entries(tile).forEach(function (entry) {
                        var coord = entry[0];
                        var colorIndex = entry[1];
                        var point = mapping_1.transformations.reduce(function (p, tf) {
                            return p[tfs[tf]](16, 16);
                        }, _util_point__WEBPACK_IMPORTED_MODULE_2__["Point"].parse(coord));
                        var pixel = {
                            x: point.x,
                            y: point.y,
                            fill: palette_1[colorIndex]
                        };
                        tf_1.pixels.push(pixel);
                    });
                    console.log(tf_1);
                    return tf_1;
                }
            }
            console.log();
            return null;
        }
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

/***/ "./src/app/cobblestone/transformed-tile-def/transformed-tile-def.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/cobblestone/transformed-tile-def/transformed-tile-def.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\"0\" height=\"0\">\n  <defs>\n    <ng-container *ngFor=\"let tf of currentTransforms\">\n      <pattern [attr.id]=\"tf.key\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n        <rect *ngIf=\"tf.bg\" width=\"16\" height=\"16\"\n              [attr.fill]=\"tf.bg\" stroke=\"none\" stroke-width=\"0\"></rect>\n        <ng-container *ngFor=\"let pixel of tf.pixels\">\n          <rect\n            [attr.alt]=\"pixel.x + 'x' + pixel.y\"\n            [attr.x]=\"pixel.x\"\n            [attr.y]=\"pixel.y\"\n            [attr.width]=\"1\"\n            [attr.height]=\"1\"\n            [attr.fill]=\"pixel.fill\"\n            style=\"stroke:none;stroke-width:0;\"></rect>\n        </ng-container>\n      </pattern>\n    </ng-container>\n  </defs>\n</svg>\n"

/***/ }),

/***/ "./src/app/cobblestone/transformed-tile-def/transformed-tile-def.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/cobblestone/transformed-tile-def/transformed-tile-def.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvYmJsZXN0b25lL3RyYW5zZm9ybWVkLXRpbGUtZGVmL3RyYW5zZm9ybWVkLXRpbGUtZGVmLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cobblestone/transformed-tile-def/transformed-tile-def.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/cobblestone/transformed-tile-def/transformed-tile-def.component.ts ***!
  \************************************************************************************/
/*! exports provided: TransformedTileDefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformedTileDefComponent", function() { return TransformedTileDefComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/trigger */ "./src/app/util/trigger.ts");
/* harmony import */ var _tile_transformer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tile-transformer.service */ "./src/app/cobblestone/tile-transformer.service.ts");




var TransformedTileDefComponent = /** @class */ (function () {
    function TransformedTileDefComponent(ttf) {
        this.ttf = ttf;
        this.currentTransforms = [];
    }
    TransformedTileDefComponent.prototype.ngOnInit = function () {
        var me = this;
        this.transformTrigger.addListener(function () {
            me.updateTransforms();
        });
    };
    TransformedTileDefComponent.prototype.updateTransforms = function () {
        var _this = this;
        this.currentTransforms = [];
        this.state.transforms.forEach(function (v, k) {
            var tf = _this.ttf.buildTransformedTile(_this.state, k);
            if (tf) {
                _this.currentTransforms.push(tf);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TransformedTileDefComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _util_trigger__WEBPACK_IMPORTED_MODULE_2__["Trigger"])
    ], TransformedTileDefComponent.prototype, "transformTrigger", void 0);
    TransformedTileDefComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tf-tile-def',
            template: __webpack_require__(/*! ./transformed-tile-def.component.html */ "./src/app/cobblestone/transformed-tile-def/transformed-tile-def.component.html"),
            styles: [__webpack_require__(/*! ./transformed-tile-def.component.scss */ "./src/app/cobblestone/transformed-tile-def/transformed-tile-def.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tile_transformer_service__WEBPACK_IMPORTED_MODULE_3__["TileTransformerService"]])
    ], TransformedTileDefComponent);
    return TransformedTileDefComponent;
}());



/***/ }),

/***/ "./src/app/cobblestone/transformed-tile-display/transformed-tile-display.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/cobblestone/transformed-tile-display/transformed-tile-display.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg *ngIf=\"tf\" width=\"100%\" height=\"100%\" viewBox=\"0 0 16 16\">\n  <rect *ngIf=\"tf.bg\" width=\"16\" height=\"16\"\n        [attr.fill]=\"tf.bg\" stroke=\"none\" stroke-width=\"0\"></rect>\n  <ng-container *ngFor=\"let pixel of tf.pixels\">\n    <rect\n      [attr.alt]=\"pixel.x + 'x' + pixel.y\"\n      [attr.x]=\"pixel.x\"\n      [attr.y]=\"pixel.y\"\n      [attr.width]=\"1\"\n      [attr.height]=\"1\"\n      [attr.fill]=\"pixel.fill\"\n      style=\"stroke:none;stroke-width:0;\"></rect>\n  </ng-container>\n</svg>\n"

/***/ }),

/***/ "./src/app/cobblestone/transformed-tile-display/transformed-tile-display.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/cobblestone/transformed-tile-display/transformed-tile-display.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvYmJsZXN0b25lL3RyYW5zZm9ybWVkLXRpbGUtZGlzcGxheS90cmFuc2Zvcm1lZC10aWxlLWRpc3BsYXkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cobblestone/transformed-tile-display/transformed-tile-display.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/cobblestone/transformed-tile-display/transformed-tile-display.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TransformedTileDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformedTileDisplayComponent", function() { return TransformedTileDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TransformedTileDisplayComponent = /** @class */ (function () {
    function TransformedTileDisplayComponent() {
    }
    TransformedTileDisplayComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TransformedTileDisplayComponent.prototype, "tf", void 0);
    TransformedTileDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tf-tile-disp',
            template: __webpack_require__(/*! ./transformed-tile-display.component.html */ "./src/app/cobblestone/transformed-tile-display/transformed-tile-display.component.html"),
            styles: [__webpack_require__(/*! ./transformed-tile-display.component.scss */ "./src/app/cobblestone/transformed-tile-display/transformed-tile-display.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TransformedTileDisplayComponent);
    return TransformedTileDisplayComponent;
}());



/***/ }),

/***/ "./src/app/cobblestone/transformed-tile-ref/transformed-tile-ref.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/cobblestone/transformed-tile-ref/transformed-tile-ref.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 16\">\n  <rect height=\"16\" width=\"16\" stroke=\"none\" [attr.fill]=\"'url(#' + key + ')'\"></rect>\n</svg>\n"

/***/ }),

/***/ "./src/app/cobblestone/transformed-tile-ref/transformed-tile-ref.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/cobblestone/transformed-tile-ref/transformed-tile-ref.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvYmJsZXN0b25lL3RyYW5zZm9ybWVkLXRpbGUtcmVmL3RyYW5zZm9ybWVkLXRpbGUtcmVmLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cobblestone/transformed-tile-ref/transformed-tile-ref.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/cobblestone/transformed-tile-ref/transformed-tile-ref.component.ts ***!
  \************************************************************************************/
/*! exports provided: TransformedTileRefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformedTileRefComponent", function() { return TransformedTileRefComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TransformedTileRefComponent = /** @class */ (function () {
    function TransformedTileRefComponent() {
    }
    TransformedTileRefComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TransformedTileRefComponent.prototype, "key", void 0);
    TransformedTileRefComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tf-tile-ref',
            template: __webpack_require__(/*! ./transformed-tile-ref.component.html */ "./src/app/cobblestone/transformed-tile-ref/transformed-tile-ref.component.html"),
            styles: [__webpack_require__(/*! ./transformed-tile-ref.component.scss */ "./src/app/cobblestone/transformed-tile-ref/transformed-tile-ref.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TransformedTileRefComponent);
    return TransformedTileRefComponent;
}());



/***/ }),

/***/ "./src/app/cobblestone/transformed-tiles/transformed-tiles.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/cobblestone/transformed-tiles/transformed-tiles.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-4\">\r\n    <div class=\"showcase\">\r\n      <div class=\"nes-container\">\r\n        <form [formGroup]=\"transForm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\" *ngIf=\"currentKey\">\r\n              <tf-tile-disp [tf]=\"buildTile(currentKey)\"></tf-tile-disp>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <button class=\"nes-btn {{exists()?'is-error':'is-success'}}\" (click)=toggle()>{{exists()?'Remove':'Add'}}</button>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <label for=\"chars\" class=\"text-brand\">Chars: </label>\r\n              <div class=\"nes-input nes-select\">\r\n                <select id=\"chars\" class=\"form-control\" formControlName=\"selectedChar\">\r\n                  <ng-container *ngFor=\"let aChar of unusedChars\">\r\n                    <option value=\"{{aChar}}\">{{aChar}}</option>\r\n                  </ng-container>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <label for=\"palettes\" class=\"text-brand\">Palettes: </label>\r\n              <div class=\"nes-input nes-select\">\r\n                <select id=\"palettes\" class=\"form-control\" formControlName=\"selectedPalette\" (change)=\"updateCurrentKey()\">\r\n                  <ng-container *ngIf=\"state.palettes\">\r\n                    <ng-container *ngFor=\"let palette of state.palettes | keyvalue\">\r\n                      <option value=\"{{palette.key}}\">{{palette.key}}</option>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <label for=\"selectedTile\">Tiles:</label>\r\n              <div class=\"nes-input nes-select\">\r\n                <select class=\"form-control\" id=\"selectedTile\" formControlName=\"selectedTile\" (change)=\"updateCurrentKey()\">\r\n                  <ng-container *ngIf=\"state.tiles\">\r\n                    <ng-container *ngFor=\"let tile of state.tiles | keyvalue\">\r\n                      <option value=\"{{tile.key}}\">{{tile.key}}</option>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <div id=\"radio-flip-over\" class=\"item\">\r\n                <label>Flip Over</label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"flip-over\" formControlName=\"flip-over\" value=\"flip-over\" (change)=\"updateCurrentKey()\"/><span>Yes</span></label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"flip-over\" formControlName=\"flip-over\" value=\"\" (change)=\"updateCurrentKey()\"/><span>No</span></label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <div id=\"radio-flip-down\" class=\"item\">\r\n                <label>Flip Down</label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"flip-down\" formControlName=\"flip-down\" value=\"flip-down\" (change)=\"updateCurrentKey()\"/><span>Yes</span></label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"flip-down\" formControlName=\"flip-down\" value=\"\" (change)=\"updateCurrentKey()\"/><span>No</span></label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <div id=\"radio-turn-right\" class=\"item\">\r\n                <label>Turn Right</label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"turn-right\" formControlName=\"turn-right\" value=\"turn-right\" (change)=\"updateCurrentKey()\"/><span>Yes</span></label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"turn-right\" formControlName=\"turn-right\" value=\"\" (change)=\"updateCurrentKey()\"/><span>No</span></label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <div id=\"radio-turn-left\" class=\"item\">\r\n                <label>Turn Left</label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"turn-left\" formControlName=\"turn-left\" value=\"turn-left\" (change)=\"updateCurrentKey()\"/><span>Yes</span></label>\r\n                <label><input type=\"radio\" class=\"nes-radio\" name=\"turn-left\" formControlName=\"turn-left\" value=\"\" (change)=\"updateCurrentKey()\"/><span>No</span></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-8\">\r\n    <div class=\"showcase\">\r\n      <div class=\"nes-container\">\r\n        <ng-container *ngIf=\"state.transforms\">\r\n          <div class=\"row\">\r\n            <ng-container *ngFor=\"let tf of state.transforms | keyvalue\">\r\n              <div class=\"col-3\" >\r\n                <button (click)=\"setCurrentKey(tf.key)\">\r\n                  <tf-tile-disp [tf]=\"buildTile(tf.key)\"></tf-tile-disp>\r\n                </button>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cobblestone/transformed-tiles/transformed-tiles.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/cobblestone/transformed-tiles/transformed-tiles.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvYmJsZXN0b25lL3RyYW5zZm9ybWVkLXRpbGVzL3RyYW5zZm9ybWVkLXRpbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cobblestone/transformed-tiles/transformed-tiles.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/cobblestone/transformed-tiles/transformed-tiles.component.ts ***!
  \******************************************************************************/
/*! exports provided: TransformedTilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformedTilesComponent", function() { return TransformedTilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tile_transformer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tile-transformer.service */ "./src/app/cobblestone/tile-transformer.service.ts");
/* harmony import */ var _util_trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/trigger */ "./src/app/util/trigger.ts");
/* harmony import */ var _char_index_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../char-index.service */ "./src/app/cobblestone/char-index.service.ts");
/* harmony import */ var _model_TransformedTile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/TransformedTile */ "./src/app/cobblestone/model/TransformedTile.ts");







var TransformedTilesComponent = /** @class */ (function () {
    function TransformedTilesComponent(fb, ttf, cis) {
        this.fb = fb;
        this.ttf = ttf;
        this.cis = cis;
        this.transForm = this.fb.group({
            selectedChar: [''],
            selectedPalette: [''],
            selectedTile: [''],
            "flip-over": [''],
            "flip-down": [''],
            "turn-right": [''],
            "turn-left": ['']
        });
    }
    TransformedTilesComponent.prototype.ngOnInit = function () {
        var me = this;
        this.loadTrigger.addListener(function () {
            me.updateFromFile();
            me.transformTrigger.fire();
        });
        this.transformTrigger.addListener(function () {
            var tmp = [];
            me.state.transforms.forEach(function (v, k) {
                tmp.push(v);
            });
            me.unusedChars = me.cis.getUnused(tmp.join(""));
        });
    };
    TransformedTilesComponent.prototype.updateFromFile = function () {
        var patch = {};
        var paletteNames = [];
        this.state.palettes.forEach(function (v, k) { return paletteNames.push(k); });
        if (paletteNames.length > 0) {
            patch["selectedPalette"] = paletteNames[0];
        }
        var tileNames = [];
        this.state.tiles.forEach(function (v, k) { return tileNames.push(k); });
        if (tileNames.length > 0) {
            patch["selectedTile"] = tileNames[0];
        }
        this.transForm.patchValue(patch);
        this.updateCurrentKey();
    };
    TransformedTilesComponent.prototype.updateCurrentKey = function () {
        this.setCurrentKey(this.ttf.printFormKey(this.transForm.value));
    };
    TransformedTilesComponent.prototype.setCurrentKey = function (key) {
        this.currentKey = key;
        this.transForm.patchValue(this.ttf.parseKeyToForm(key));
        this.selectedPalette = this.state.palettes[this.transForm.value.selectedPalette];
        this.selectedTile = this.state.palettes[this.transForm.value.selectedTile];
    };
    TransformedTilesComponent.prototype.buildTile = function (key) {
        return this.ttf.buildTransformedTile(this.state, key);
    };
    TransformedTilesComponent.prototype.exists = function () {
        if (this.currentKey) {
            return this.state.transforms[this.currentKey];
        }
    };
    TransformedTilesComponent.prototype.toggle = function () {
        var key = this.currentKey;
        if (key && this.state.transforms[key]) {
            var myChar = this.state.transforms[key];
            delete this.state.transforms[key];
            delete this.state.mapping[myChar];
        }
        else {
            this.state.transforms[key] = this.transForm.value.selectedChar;
            this.state.mapping[this.transForm.value.selectedChar] = _model_TransformedTile__WEBPACK_IMPORTED_MODULE_6__["TransformedTile"].parse(this.ttf.printFormKey(this.transForm.value));
        }
        this.transformTrigger.fire();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TransformedTilesComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TransformedTilesComponent.prototype, "scale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _util_trigger__WEBPACK_IMPORTED_MODULE_4__["Trigger"])
    ], TransformedTilesComponent.prototype, "loadTrigger", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _util_trigger__WEBPACK_IMPORTED_MODULE_4__["Trigger"])
    ], TransformedTilesComponent.prototype, "transformTrigger", void 0);
    TransformedTilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transformed-tiles',
            template: __webpack_require__(/*! ./transformed-tiles.component.html */ "./src/app/cobblestone/transformed-tiles/transformed-tiles.component.html"),
            styles: [__webpack_require__(/*! ./transformed-tiles.component.scss */ "./src/app/cobblestone/transformed-tiles/transformed-tiles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _tile_transformer_service__WEBPACK_IMPORTED_MODULE_3__["TileTransformerService"],
            _char_index_service__WEBPACK_IMPORTED_MODULE_5__["CharIndexService"]])
    ], TransformedTilesComponent);
    return TransformedTilesComponent;
}());



/***/ }),

/***/ "./src/app/mastermold/count-update.ts":
/*!********************************************!*\
  !*** ./src/app/mastermold/count-update.ts ***!
  \********************************************/
/*! exports provided: CountUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountUpdate", function() { return CountUpdate; });
var CountUpdate = /** @class */ (function () {
    function CountUpdate() {
    }
    return CountUpdate;
}());



/***/ }),

/***/ "./src/app/mastermold/image-list/image-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/mastermold/image-list/image-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\">\n  <ng-container *ngFor=\"let mini of data\">\n    <div class=\"d-flex\">\n      <div class=\"p-2 w-100 text-right\">{{mini.filename}}</div>\n      <div class=\"p-2\"><input type=\"number\" min=\"1\" value=\"1\" class=\"nes-input\" (change)=\"updateCount($event,mini.filename)\"/></div>\n      <div class=\"p-2\"><button class=\"nes-btn is-error\" (click)=\"removeImage(mini.filename)\">X</button></div>\n    </div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/mastermold/image-list/image-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/mastermold/image-list/image-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlcm1vbGQvaW1hZ2UtbGlzdC9pbWFnZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/mastermold/image-list/image-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/mastermold/image-list/image-list.component.ts ***!
  \***************************************************************/
/*! exports provided: ImageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageListComponent", function() { return ImageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _count_update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../count-update */ "./src/app/mastermold/count-update.ts");



var ImageListComponent = /** @class */ (function () {
    function ImageListComponent() {
        this.countUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imageRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ImageListComponent.prototype.ngOnInit = function () {
    };
    ImageListComponent.prototype.updateCount = function (e, filename) {
        var target = e.target;
        var update = new _count_update__WEBPACK_IMPORTED_MODULE_2__["CountUpdate"]();
        update.count = parseInt(target.value);
        update.filename = filename;
        this.countUpdated.emit(update);
    };
    ImageListComponent.prototype.removeImage = function (filename) {
        this.imageRemoved.emit(filename);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ImageListComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageListComponent.prototype, "countUpdated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageListComponent.prototype, "imageRemoved", void 0);
    ImageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'image-list',
            template: __webpack_require__(/*! ./image-list.component.html */ "./src/app/mastermold/image-list/image-list.component.html"),
            styles: [__webpack_require__(/*! ./image-list.component.scss */ "./src/app/mastermold/image-list/image-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageListComponent);
    return ImageListComponent;
}());



/***/ }),

/***/ "./src/app/mastermold/mastermold.component.html":
/*!******************************************************!*\
  !*** ./src/app/mastermold/mastermold.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\">\n  <input type=\"file\" id=\"fileInput\" class=\"nes-input\" multiple (change)=\"addImage($event)\"/>\n  <div class=\"d-flex flex-row\">\n    <div class=\"showcase\" id=\"ctrl\">\n      <div class=\"nes-container\">\n        <image-list\n          [data]=\"data\"\n          (countUpdated)=\"updateCount($event)\"\n          (imageRemoved)=\"deleteImage($event)\"></image-list>\n      </div>\n    </div>\n    <div class=\"showcase h-100\">\n      <div class=\"nes-container h-100\">\n        <button class=\"nes-btn\" (click)=\"publish()\">Publish</button>\n        <p></p>\n        <mini-gallery [data]=\"data\"></mini-gallery>\n        <p></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _mini__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mini */ "./src/app/mastermold/mini.ts");
/* harmony import */ var _publish_minis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publish-minis.service */ "./src/app/mastermold/publish-minis.service.ts");




var MastermoldComponent = /** @class */ (function () {
    function MastermoldComponent(pubService) {
        this.pubService = pubService;
        this.images = new Map();
        this.data = [];
    }
    MastermoldComponent.prototype.ngOnInit = function () {
    };
    MastermoldComponent.prototype.updateData = function () {
        this.data = Array.from(this.images.values());
    };
    MastermoldComponent.prototype.updateCount = function (update) {
        this.images.get(update.filename).count = update.count;
        this.updateData();
    };
    MastermoldComponent.prototype.deleteImage = function (filename) {
        this.images.delete(filename);
        this.updateData();
    };
    MastermoldComponent.prototype.addImage = function (e) {
        var files = Array.from(e.target.files);
        var countdown = files.reduce(function (out, file) {
            out[file.name] = true;
            return out;
        }, {});
        console.log(files);
        var me = this;
        if (files.length > 0) {
            files.forEach(function (file) {
                var reader = new FileReader();
                reader.onload = function () {
                    var mini = new _mini__WEBPACK_IMPORTED_MODULE_2__["Mini"]();
                    mini.filename = file.name;
                    mini.count = 1;
                    mini.url = reader.result.toString();
                    me.images.set(file.name, mini);
                    delete countdown[file.name];
                    if (Object.entries(countdown).length == 0) {
                        me.updateData();
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };
    MastermoldComponent.prototype.publish = function () {
        this.pubService.buildMinis(Array.from(this.images.values())).subscribe(function (resp) {
            var html = resp.body;
            console.log(html);
            var w = window.open("", "_blank");
            w.document.write(html);
        });
    };
    MastermoldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mastermold',
            template: __webpack_require__(/*! ./mastermold.component.html */ "./src/app/mastermold/mastermold.component.html"),
            styles: [__webpack_require__(/*! ./mastermold.component.scss */ "./src/app/mastermold/mastermold.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_publish_minis_service__WEBPACK_IMPORTED_MODULE_3__["PublishMinisService"]])
    ], MastermoldComponent);
    return MastermoldComponent;
}());



/***/ }),

/***/ "./src/app/mastermold/mini-gallery/mini-gallery.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/mastermold/mini-gallery/mini-gallery.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let image of data\">\n  <ng-container *ngFor=\"let mini of repeat(image)\">\n    <span title=\"{{mini.filename}}\">\n      <svg [attr.width]=\"20 * scale\" [attr.height]=\"30 * scale\" [attr.viewBox]=\"'0 0 ' + (20 * scale) + ' ' + (30 * scale)\">\n        <rect x=\"0\" y=\"0\" [attr.width]=\"20 * scale\" [attr.height]=\"30 * scale\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n        <image [attr.href]=\"mini.url\" [attr.x]=\"0\" [attr.y]=\"0\" [attr.width]=\"20 * scale\" [attr.height]=\"30 * scale\"/>\n      </svg>\n    </span>\n  </ng-container>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/mastermold/mini-gallery/mini-gallery.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/mastermold/mini-gallery/mini-gallery.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlcm1vbGQvbWluaS1nYWxsZXJ5L21pbmktZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/mastermold/mini-gallery/mini-gallery.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/mastermold/mini-gallery/mini-gallery.component.ts ***!
  \*******************************************************************/
/*! exports provided: MiniGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniGalleryComponent", function() { return MiniGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MiniGalleryComponent = /** @class */ (function () {
    function MiniGalleryComponent() {
        this.scale = 5;
    }
    MiniGalleryComponent.prototype.ngOnInit = function () {
    };
    MiniGalleryComponent.prototype.repeat = function (mini) {
        return Array(mini.count).fill(mini);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MiniGalleryComponent.prototype, "data", void 0);
    MiniGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mini-gallery',
            template: __webpack_require__(/*! ./mini-gallery.component.html */ "./src/app/mastermold/mini-gallery/mini-gallery.component.html"),
            styles: [__webpack_require__(/*! ./mini-gallery.component.scss */ "./src/app/mastermold/mini-gallery/mini-gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MiniGalleryComponent);
    return MiniGalleryComponent;
}());



/***/ }),

/***/ "./src/app/mastermold/mini.ts":
/*!************************************!*\
  !*** ./src/app/mastermold/mini.ts ***!
  \************************************/
/*! exports provided: Mini */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mini", function() { return Mini; });
var Mini = /** @class */ (function () {
    function Mini() {
    }
    return Mini;
}());



/***/ }),

/***/ "./src/app/mastermold/publish-minis.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/mastermold/publish-minis.service.ts ***!
  \*****************************************************/
/*! exports provided: PublishMinisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishMinisService", function() { return PublishMinisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PublishMinisService = /** @class */ (function () {
    function PublishMinisService(client) {
        this.client = client;
    }
    PublishMinisService.prototype.buildMinis = function (minis) {
        console.log(minis);
        console.log(JSON.stringify(minis));
        return this.client.post("/mastermold/publish", minis, { observe: 'response', responseType: 'text' });
    };
    PublishMinisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PublishMinisService);
    return PublishMinisService;
}());



/***/ }),

/***/ "./src/app/mock/http-mock-request-interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/mock/http-mock-request-interceptor.ts ***!
  \*******************************************************/
/*! exports provided: isMock, HttpMockRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMock", function() { return isMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpMockRequestInterceptor", function() { return HttpMockRequestInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _mock_responses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-responses */ "./src/app/mock/mock-responses.ts");




var isMock = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mock;
var HttpMockRequestInterceptor = /** @class */ (function () {
    function HttpMockRequestInterceptor() {
    }
    HttpMockRequestInterceptor.prototype.intercept = function (req, next) {
        if (isMock) {
            console.log("intercepted");
            console.log("url in question: " + req.url);
            for (var _i = 0, MOCK_RESPONSES_1 = _mock_responses__WEBPACK_IMPORTED_MODULE_3__["MOCK_RESPONSES"]; _i < MOCK_RESPONSES_1.length; _i++) {
                var mock = MOCK_RESPONSES_1[_i];
                console.log("mock.path: " + mock.path);
                var regex = new RegExp(mock.path, "g");
                if (regex.test(req.url)) {
                    console.log('Loaded from json : ' + req.url);
                    if (mock.status >= 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(mock.body);
                    }
                    else {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                            status: mock.status || 200,
                            body: mock.body
                        }));
                    }
                }
            }
            console.log('Cannot locate mock for url: ' + req.url);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                status: 500,
                body: []
            }));
        }
        else {
            return next.handle(req);
        }
    };
    return HttpMockRequestInterceptor;
}());



/***/ }),

/***/ "./src/app/mock/mock-responses.ts":
/*!****************************************!*\
  !*** ./src/app/mock/mock-responses.ts ***!
  \****************************************/
/*! exports provided: MOCK_RESPONSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_RESPONSES", function() { return MOCK_RESPONSES; });
var MOCK_RESPONSES = [
    {
        "path": ".*",
        "status": 200,
        "body": []
    }
];


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
/* harmony import */ var _util_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/range */ "./src/app/util/range.ts");
/* harmony import */ var _util_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/point */ "./src/app/util/point.ts");




var PixelCanvasComponent = /** @class */ (function () {
    function PixelCanvasComponent() {
        this.range = _util_range__WEBPACK_IMPORTED_MODULE_2__["Range"];
        this.doOutline = false;
    }
    PixelCanvasComponent.prototype.ngOnInit = function () {
    };
    PixelCanvasComponent.prototype.setColorForPixel = function (x, y) {
        var key = (new _util_point__WEBPACK_IMPORTED_MODULE_3__["Point"](x, y)).toString();
        if (this.pixels[key] === this.colorIndex) {
            delete this.pixels[key];
        }
        else {
            this.pixels[key] = this.colorIndex;
        }
    };
    PixelCanvasComponent.prototype.initOutline = function (e) {
        this.doOutline = true;
        this.initPoint = _util_point__WEBPACK_IMPORTED_MODULE_3__["Point"].parse(e.target.attributes.alt.value);
        this.startCorner = this.initPoint;
        this.outlineDim = new _util_point__WEBPACK_IMPORTED_MODULE_3__["Point"](1, 1);
    };
    PixelCanvasComponent.prototype.adjustOutline = function (e) {
        if (this.doOutline) {
            var temp = _util_point__WEBPACK_IMPORTED_MODULE_3__["Point"].parse(e.target.attributes.alt.value);
            var min = this.initPoint.min(temp);
            var max = this.initPoint.max(temp);
            this.startCorner = min;
            this.outlineDim = max.minus(min).plus(new _util_point__WEBPACK_IMPORTED_MODULE_3__["Point"](1, 1));
        }
    };
    PixelCanvasComponent.prototype.completeOutline = function (e) {
        var _this = this;
        this.doOutline = false;
        console.log("complete");
        _util_range__WEBPACK_IMPORTED_MODULE_2__["Range"].max(this.outlineDim.y).forEach(function (y) {
            _util_range__WEBPACK_IMPORTED_MODULE_2__["Range"].max(_this.outlineDim.x).forEach(function (x) {
                var key = (_this.startCorner.plus(new _util_point__WEBPACK_IMPORTED_MODULE_3__["Point"](x, y))).toString();
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

module.exports = "<svg *ngIf=\"palette && pixels\" [attr.width]=\"width * scale\" [attr.height]=\"height * scale\">\r\n  <rect *ngIf=\"palette[0]\" [attr.width]=\"width * scale\" [attr.height]=\"height * scale\"\r\n        [attr.fill]=\"palette[0]\" stroke=\"none\" stroke-width=\"0\"></rect>\r\n  <ng-container *ngFor=\"let y of range.max(height)\">\r\n    <ng-container *ngFor=\"let x of range.max(width)\">\r\n      <rect\r\n        *ngIf=\"pixels[x + 'x' + y]\"\r\n        [attr.alt]=\"x + 'x' + y\"\r\n        [attr.x]=\"x * scale\"\r\n        [attr.y]=\"y * scale\"\r\n        [attr.width]=\"scale\"\r\n        [attr.height]=\"scale\"\r\n        [attr.fill]=\"palette[pixels[x + 'x' + y]]\"\r\n        style=\"stroke:none;stroke-width:0;\"></rect>\r\n    </ng-container>\r\n  </ng-container>\r\n</svg>\r\n"

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
/* harmony import */ var _util_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/range */ "./src/app/util/range.ts");



var PixelPainterComponent = /** @class */ (function () {
    function PixelPainterComponent() {
        this.range = _util_range__WEBPACK_IMPORTED_MODULE_2__["Range"];
    }
    PixelPainterComponent.prototype.ngOnInit = function () {
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
    PixelPainterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pixel-painter',
            template: __webpack_require__(/*! ./pixel-painter.component.html */ "./src/app/pixel-painter/pixel-painter.component.html"),
            styles: [__webpack_require__(/*! ./pixel-painter.component.scss */ "./src/app/pixel-painter/pixel-painter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PixelPainterComponent);
    return PixelPainterComponent;
}());



/***/ }),

/***/ "./src/app/spritely/spritely-file.service.ts":
/*!***************************************************!*\
  !*** ./src/app/spritely/spritely-file.service.ts ***!
  \***************************************************/
/*! exports provided: SpritelyFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpritelyFileService", function() { return SpritelyFileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _util_download_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/download-link */ "./src/app/util/download-link.ts");




var SpritelyFileService = /** @class */ (function () {
    function SpritelyFileService(client) {
        this.client = client;
        this.downloader = new _util_download_link__WEBPACK_IMPORTED_MODULE_3__["DownloadLink"]();
    }
    SpritelyFileService.prototype.parseLoadData = function (loadData) {
        return this.client.post("/spritely/load", loadData);
    };
    SpritelyFileService.prototype.downloadImage = function (saveData, scale, fileName, after) {
        var _this = this;
        if (after === void 0) { after = (function () { }); }
        this.client.post("/spritely/img64", {
            "art": saveData,
            "scale": scale
        }).subscribe(function (base64) {
            _this.downloader.setFileName(fileName);
            _this.downloader.setPath("data:image/png;base64," + base64);
            _this.downloader.invokeDownload();
            after();
        });
    };
    SpritelyFileService.prototype.downloaddata = function (saveData, fileName, after) {
        var _this = this;
        if (after === void 0) { after = (function () { }); }
        this.client.post("/spritely/rawdata", saveData).subscribe(function (rawdata) {
            _this.downloader.setFileName(fileName);
            _this.downloader.setPath("data:text/plain;," + encodeURIComponent(rawdata.split("\n").join("\r\n")));
            _this.downloader.invokeDownload();
            after();
        });
    };
    SpritelyFileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SpritelyFileService);
    return SpritelyFileService;
}());



/***/ }),

/***/ "./src/app/spritely/spritely.component.html":
/*!**************************************************!*\
  !*** ./src/app/spritely/spritely.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"spritelyForm\" class=\"topic\">\r\n  <div style=\"display: none\">\r\n    <select id=\"palette\" class=\"form-control\" formControlName=\"selectedPalette\" (change)=\"selectColor()\">\r\n      <ng-container *ngFor=\"let color of palette; index as i\">\r\n        <option *ngIf=\"i > 0\" value=\"{{i}}\">{{i}} - {{color||'Transparent'}}</option>\r\n      </ng-container>\r\n    </select>\r\n    <input #colorPicker type=\"color\" id=\"color\" class=\"nes-input form-control\" formControlName=\"color\" value=\"#000001\" (change)=\"setColor()\"/>\r\n  </div>\r\n  <div class=\"showcase col-lg-12\">\r\n    <div class=\"nes-container with-title\">\r\n      <div class=\"title\">\r\n        <label>Spritely </label>\r\n      </div>\r\n      <div class=\"d-flex flex-row small\">\r\n        <div class=\"col-lg-5\">\r\n          <accordian\r\n            tabId=\"fileTab\"\r\n            containerId=\"fileContainer\"\r\n            [initCollapsed]=\"true\"\r\n            label=\"File\">\r\n            <file-form\r\n              [defaultSaveFile]=\"defaultSaveFile\"\r\n              [prepareLoadedData]=\"fileDataReader()\"\r\n              [fileLoadCallback]=\"fileLoadCallback()\"\r\n              [invokeDownload]=\"dataDownloader()\">\r\n            </file-form>\r\n          </accordian>\r\n          <accordian\r\n            tabId=\"directionsTab\"\r\n            containerId=\"directionsContainer\"\r\n            [initCollapsed]=\"true\"\r\n            label=\"Help\">\r\n            <div class=\"nes-balloon from-left\">\r\n              <p>Spritely is a canvas for pixel art.</p>\r\n            </div>\r\n            <div class=\"nes-balloon from-right\">\r\n              <p>Build your palette below, then select a color in the palette to paint pixels that color, or to unpaint pixels already that color.</p>\r\n            </div>\r\n            <div class=\"nes-balloon from-left\">\r\n              <p>Changing the color of a slot in the palette will change the color of all matching pixels.</p>\r\n            </div>\r\n            <div class=\"nes-balloon from-right\">\r\n              <p>Deleting a color will unpaint all pixels that matching color</p>\r\n            </div>\r\n            <div class=\"nes-balloon from-left\">\r\n              <p>Unpainting pixels will return them to the background color.</p>\r\n            </div>\r\n          </accordian>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"showcase\">\r\n                <div class=\"nes-container with-title\">\r\n                  <div class=\"title\">\r\n                    <label>Palette</label>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-5 text-right\">\r\n                      <label for=\"backgroundColor\" class=\"text-brand\">Background Color:</label>\r\n                    </div>\r\n                    <div class=\"col-sm-7\">\r\n                      <input type=\"color\" id=\"backgroundColor\" class=\"nes-input form-control\" formControlName=\"backgroundColor\" value=\"#fffffe\" (change)=\"setBackground()\"/>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12 text-center\">\r\n                      <label for=\"makeTransparent\" class=\"text-brand\">\r\n                        <input type=\"checkbox\" id=\"makeTransparent\" class=\"nes-checkbox\" formControlName=\"makeTransparent\" (change)=\"makeTransparent()\">\r\n                        <span>\r\n                          Make Transparent?\r\n                        </span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <hr/>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12 text-center\">\r\n                      <button class=\"nes-btn is-success\" (click)=\"addColor()\">Add Color</button>\r\n                      <button class=\"nes-btn is-error\" (click)=\"removeColor()\">Remove Color</button>\r\n                    </div>\r\n                  </div>\r\n                  <p></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <accordian\r\n            tabId=\"transformsTab\"\r\n            containerId=\"transformsContainer\"\r\n            [initCollapsed]=\"true\"\r\n            label=\"Transforms\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('turnLeft')\">Turn Left</button>\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('turnRight')\">Turn Right</button>\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('flipOver')\">Flip Over</button>\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('flipDown')\">Flip Down</button>\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('shiftLeft')\">Shift Left</button>\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('shiftRight')\">Shift Right</button>\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('shiftUp')\">Shift Up</button>\r\n                <button class=\"nes-btn is-warning\" (click)=\"transform('shiftDown')\">Shift Down</button>\r\n              </div>\r\n            </div>\r\n          </accordian>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"showcase\">\r\n                <div class=\"nes-container with-title\">\r\n                  <div class=\"title\">\r\n                    <label>Image</label>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-md-6\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                          <label for=\"scale\" class=\"text-brand\">Scale:</label>\r\n                          <input type=\"number\" min=\"1\" max=\"20\" id=\"scale\" class=\"nes-input\" formControlName=\"scale\"/>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                          <label for=\"imgFile\" class=\"text-brand\">Image FileName:</label>\r\n                          <input type=\"text\" id=\"imgFile\" class=\"nes-input\" formControlName=\"imgFile\" placeholder=\"Image File\"/>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-8 text-right\">\r\n                      <button class=\"nes-btn\" (click)=\"downloadImage()\">\r\n                        <pixel-painter\r\n                          [pixels]=\"pixels\"\r\n                          [scale]=\"spritelyForm.value.scale\"\r\n                          [width]=\"spritelyForm.value.width\"\r\n                          [height]=\"spritelyForm.value.height\"\r\n                          [palette]=\"palette\"\r\n                        ></pixel-painter>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-7\">\r\n          <div class=\"showcase\">\r\n            <div class=\"nes-container\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-5 text-right\">\r\n                      <label for=\"width\" class=\"text-brand\">Width:</label>\r\n                    </div>\r\n                    <div class=\"col-sm-7\">\r\n                      <input type=\"number\" min=\"8\" max=\"64\" id=\"width\" class=\"nes-input\" formControlName=\"width\" (change)=\"resize()\"/>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-5 text-right\">\r\n                      <label for=\"height\" class=\"text-brand\">Height:</label>\r\n                    </div>\r\n                    <div class=\"col-sm-7\">\r\n                      <input type=\"number\" min=\"8\" max=\"64\" id=\"height\" class=\"nes-input\" formControlName=\"height\" (change)=\"resize()\"/>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <app-palette-display\r\n                    [palette]=\"palette\"\r\n                    [href]=\"'#/spritely'\"\r\n                    [selectFn]=\"colorIndexSetter()\"\r\n                    [setColorFn]=\"colorSetter()\"\r\n                  ></app-palette-display>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <app-pixel-canvas\r\n                    [pixels]=\"pixels\"\r\n                    [scale]=\"10\"\r\n                    [width]=\"min(spritelyForm.value.width,64)\"\r\n                    [height]=\"min(spritelyForm.value.height,64)\"\r\n                    [palette]=\"palette\"\r\n                    [backgroundColor]=\"spritelyForm.value.backgroundColor\"\r\n                    [colorIndex]=\"spritelyForm.value.selectedPalette\"\r\n                    page=\"spritely\"\r\n                  ></app-pixel-canvas>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<pixel-pending label=\"Download\"></pixel-pending>\r\n"

/***/ }),

/***/ "./src/app/spritely/spritely.component.scss":
/*!**************************************************!*\
  !*** ./src/app/spritely/spritely.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea.pixel-canvas:before {\n  counter-increment: line;\n  content: counter(line);\n  display: inline-block;\n  border-right: 1px solid #ddd;\n  padding: 0 .5em;\n  margin-right: .5em;\n  color: #888; }\n\nhr {\n  border-top: 4px solid black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ByaXRlbHkvQzpcXHByYWN0aWNlXFxjb2RlXFxjYXJhYmluZXJcXGZyb250L3NyY1xcYXBwXFxzcHJpdGVseVxcc3ByaXRlbHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUNGLEVBQUE7O0FBR0Y7RUFDRSwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nwcml0ZWx5L3Nwcml0ZWx5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEucGl4ZWwtY2FudmFzIHtcclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY291bnRlci1pbmNyZW1lbnQ6IGxpbmU7XHJcbiAgICBjb250ZW50OiBjb3VudGVyKGxpbmUpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDAgLjVlbTtcclxuICAgIG1hcmdpbi1yaWdodDogLjVlbTtcclxuICAgIGNvbG9yOiAjODg4XHJcbiAgfVxyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _util_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/point */ "./src/app/util/point.ts");
/* harmony import */ var _util_trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/trigger */ "./src/app/util/trigger.ts");
/* harmony import */ var _spritely_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spritely-file.service */ "./src/app/spritely/spritely-file.service.ts");
/* harmony import */ var _util_pixel_pending_pixel_pending_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/pixel-pending/pixel-pending.component */ "./src/app/util/pixel-pending/pixel-pending.component.ts");







var SpritelyComponent = /** @class */ (function () {
    function SpritelyComponent(fb, sfs) {
        this.fb = fb;
        this.sfs = sfs;
        this.spritelyForm = this.fb.group({
            selectedPalette: [0],
            scale: [5],
            width: [16],
            height: [16],
            color: ['#000001'],
            makeTransparent: [false],
            backgroundColor: ['#fffffe'],
            imgFile: ['']
        });
        this.palette = ['#fffffe'];
        this.pixels = {};
        this.trigger = new _util_trigger__WEBPACK_IMPORTED_MODULE_4__["Trigger"]("redraw-pixels");
        this.startingColors = ["#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ffffff"];
    }
    SpritelyComponent.prototype.ngOnInit = function () {
        this.colorInput = this.colorInputRef.nativeElement;
    };
    SpritelyComponent.prototype.fileDataReader = function () {
        var me = this;
        return function (fileData) {
            return me.sfs.parseLoadData(fileData);
        };
    };
    SpritelyComponent.prototype.fileLoadCallback = function () {
        var me = this;
        return function (load) {
            me.palette = load.palette;
            me.pixels = load.pixels;
            var formValues = {
                width: load.width,
                height: load.height,
            };
            if (me.palette[0]) {
                formValues.makeTransparent = false;
                formValues.backgroundColor = me.palette[0];
            }
            else {
                formValues.makeTransparent = true;
            }
            if (me.palette.length > 1) {
                formValues.selectedPalette = 1;
                formValues.color = me.palette[1];
            }
            me.spritelyForm.patchValue(formValues);
        };
    };
    SpritelyComponent.prototype.saveData = function () {
        return {
            pixels: this.pixels,
            palette: this.palette,
            width: this.spritelyForm.value.width,
            height: this.spritelyForm.value.height
        };
    };
    SpritelyComponent.prototype.dataDownloader = function () {
        var me = this;
        return function (filename) {
            me.pending.block();
            me.sfs.downloaddata(me.saveData(), filename, function () { me.pending.complete(); });
        };
    };
    SpritelyComponent.prototype.downloadImage = function () {
        var _this = this;
        this.pending.block();
        this.sfs.downloadImage(this.saveData(), this.spritelyForm.value.scale, this.spritelyForm.value.imgFile, function () { _this.pending.complete(); });
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
    SpritelyComponent.prototype.colorSetter = function () {
        var me = this;
        return function (index) {
            me.spritelyForm.patchValue({
                selectedPalette: index
            });
            me.selectColor();
            me.colorInput.click();
        };
    };
    SpritelyComponent.prototype.makeTransparent = function () {
        var t = this.spritelyForm.value.makeTransparent;
        this.palette[0] = t ? "none" : this.spritelyForm.value.backgroundColor;
    };
    SpritelyComponent.prototype.setBackground = function () {
        this.palette[0] = this.spritelyForm.value.backgroundColor;
    };
    SpritelyComponent.prototype.setColor = function () {
        this.palette[this.spritelyForm.value.selectedPalette] = this.spritelyForm.value.color;
    };
    SpritelyComponent.prototype.addColor = function () {
        this.palette.push(this.startingColors[(this.palette.length % this.startingColors.length)]);
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
    };
    SpritelyComponent.prototype.transform = function (tf) {
        var width = this.spritelyForm.value.width;
        var height = this.spritelyForm.value.height;
        var pixels = this.pixels;
        var entries = Object.entries(pixels);
        var transformed = {};
        entries.forEach(function (entry) {
            var p = entry[0];
            var newP = _util_point__WEBPACK_IMPORTED_MODULE_3__["Point"].parse(p)[tf](width, height);
            if (newP.isIn(width, height)) {
                transformed[newP.toString()] = entry[1];
            }
            delete pixels[p];
        });
        Object.entries(transformed).forEach(function (entry) {
            pixels[entry[0]] = entry[1];
        });
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_util_pixel_pending_pixel_pending_component__WEBPACK_IMPORTED_MODULE_6__["PixelPendingComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _util_pixel_pending_pixel_pending_component__WEBPACK_IMPORTED_MODULE_6__["PixelPendingComponent"])
    ], SpritelyComponent.prototype, "pending", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('colorPicker'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SpritelyComponent.prototype, "colorInputRef", void 0);
    SpritelyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spritely',
            template: __webpack_require__(/*! ./spritely.component.html */ "./src/app/spritely/spritely.component.html"),
            styles: [__webpack_require__(/*! ./spritely.component.scss */ "./src/app/spritely/spritely.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _spritely_file_service__WEBPACK_IMPORTED_MODULE_5__["SpritelyFileService"]])
    ], SpritelyComponent);
    return SpritelyComponent;
}());



/***/ }),

/***/ "./src/app/util/accordian/accordian.component.html":
/*!*********************************************************!*\
  !*** ./src/app/util/accordian/accordian.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div #accordianTab [attr.id]=\"tabId\" [ngClass]=\"{'col-md-12':true,'hide':(initCollapsed == false)}\">\r\n    <button class=\"nes-btn is-primary nes-accordian\" (click)=\"expand()\">{{label}}</button>\r\n  </div>\r\n  <div #accordianContainer [ngClass]=\"{'col-md-12':true,'hide':initCollapsed}\" [attr.id]=\"containerId\">\r\n    <div class=\"showcase\">\r\n      <div class=\"nes-container with-title\">\r\n        <div class=\"title\">\r\n          <label>{{label}}</label>\r\n        </div>\r\n        <ng-content></ng-content>\r\n        <button class=\"nes-btn is-primary minimize\"  (click)=\"collapse()\">^</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/util/accordian/accordian.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/util/accordian/accordian.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWwvYWNjb3JkaWFuL2FjY29yZGlhbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/util/accordian/accordian.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/util/accordian/accordian.component.ts ***!
  \*******************************************************/
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
            template: __webpack_require__(/*! ./accordian.component.html */ "./src/app/util/accordian/accordian.component.html"),
            styles: [__webpack_require__(/*! ./accordian.component.scss */ "./src/app/util/accordian/accordian.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccordianComponent);
    return AccordianComponent;
}());



/***/ }),

/***/ "./src/app/util/confirm-cancel-dialog/confirm-cancel-dialog.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/util/confirm-cancel-dialog/confirm-cancel-dialog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  confirm-cancel-dialog works!\n</p>\n"

/***/ }),

/***/ "./src/app/util/confirm-cancel-dialog/confirm-cancel-dialog.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/util/confirm-cancel-dialog/confirm-cancel-dialog.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWwvY29uZmlybS1jYW5jZWwtZGlhbG9nL2NvbmZpcm0tY2FuY2VsLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/util/confirm-cancel-dialog/confirm-cancel-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/util/confirm-cancel-dialog/confirm-cancel-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfirmCancelDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmCancelDialogComponent", function() { return ConfirmCancelDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfirmCancelDialogComponent = /** @class */ (function () {
    function ConfirmCancelDialogComponent() {
    }
    ConfirmCancelDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmCancelDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-cancel-dialog',
            template: __webpack_require__(/*! ./confirm-cancel-dialog.component.html */ "./src/app/util/confirm-cancel-dialog/confirm-cancel-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-cancel-dialog.component.scss */ "./src/app/util/confirm-cancel-dialog/confirm-cancel-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfirmCancelDialogComponent);
    return ConfirmCancelDialogComponent;
}());



/***/ }),

/***/ "./src/app/util/dialog-wrapper/dialog-wrapper.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/util/dialog-wrapper/dialog-wrapper.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" name=\"button\" class=\"nes-btn is-success\" (click)=\"open()\">{{triggerBtnName}}</button>\r\n<dialog #myDialog class=\"nes-dialog is-dark is-rounded\">\r\n  <ng-content></ng-content>\r\n  <menu class=\"dialog-menu text-right\">\r\n    <button class=\"nes-btn\" (click)=\"cancel()\">Cancel</button>\r\n    <button class=\"nes-btn is-primary {{allowConfirm?'':'is-disabled'}}\"\r\n            [disabled]=\"!allowConfirm\" (click)=\"confirm()\">Confirm</button>\r\n  </menu>\r\n</dialog>\r\n"

/***/ }),

/***/ "./src/app/util/dialog-wrapper/dialog-wrapper.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/util/dialog-wrapper/dialog-wrapper.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWwvZGlhbG9nLXdyYXBwZXIvZGlhbG9nLXdyYXBwZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/util/dialog-wrapper/dialog-wrapper.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/util/dialog-wrapper/dialog-wrapper.component.ts ***!
  \*****************************************************************/
/*! exports provided: DialogWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogWrapperComponent", function() { return DialogWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogWrapperComponent = /** @class */ (function () {
    function DialogWrapperComponent() {
        this.allowConfirm = true;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DialogWrapperComponent.prototype, "allowConfirm", void 0);
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
            template: __webpack_require__(/*! ./dialog-wrapper.component.html */ "./src/app/util/dialog-wrapper/dialog-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./dialog-wrapper.component.scss */ "./src/app/util/dialog-wrapper/dialog-wrapper.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DialogWrapperComponent);
    return DialogWrapperComponent;
}());



/***/ }),

/***/ "./src/app/util/download-link.ts":
/*!***************************************!*\
  !*** ./src/app/util/download-link.ts ***!
  \***************************************/
/*! exports provided: DownloadLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadLink", function() { return DownloadLink; });
var DownloadLink = /** @class */ (function () {
    function DownloadLink() {
        this.link = document.createElement("a");
        this.link.target = "_blank";
    }
    DownloadLink.prototype.setFileName = function (fileName) {
        this.link.download = fileName;
    };
    DownloadLink.prototype.setPath = function (href) {
        this.link.href = href;
    };
    DownloadLink.prototype.invokeDownload = function () {
        if (this.link.href) {
            this.link.click();
        }
    };
    return DownloadLink;
}());



/***/ }),

/***/ "./src/app/util/file-form/file-form.component.html":
/*!*********************************************************!*\
  !*** ./src/app/util/file-form/file-form.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"fileForm\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 text-center\">\r\n      <dialog-wrapper\r\n        triggerBtnName=\"Load File\"\r\n        [dialogConfirm]=\"fileLoadConfirmer()\"\r\n        [dialogClose]=\"fileLoadCanceler()\">\r\n        <label>Load File:</label>\r\n        <file-load-input [loadedFileCallback]=\"tempDataReader()\" [loadErrorCallback]=\"loadErrorHandler()\"></file-load-input>\r\n        <p *ngIf=\"loadError\" class=\"note nes-text is-error\">{{loadError}}</p>\r\n      </dialog-wrapper>\r\n    </div>\r\n    <div class=\"col-md-6 text-center\">\r\n      <dialog-wrapper\r\n        triggerBtnName=\"Save File\"\r\n        [dialogOpen]=\"saveDialogOpener()\"\r\n        [dialogConfirm]=\"saveDialogConfirmer()\">\r\n        <label for=\"saveFile\">Save:</label>\r\n        <input type=\"text\" id=\"saveFile\" class=\"nes-input\" formControlName=\"saveFile\" placeholder=\"Save File\"/>\r\n      </dialog-wrapper>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/util/file-form/file-form.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/util/file-form/file-form.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWwvZmlsZS1mb3JtL2ZpbGUtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/util/file-form/file-form.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/util/file-form/file-form.component.ts ***!
  \*******************************************************/
/*! exports provided: FileFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFormComponent", function() { return FileFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trigger */ "./src/app/util/trigger.ts");
/* harmony import */ var _download_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../download-link */ "./src/app/util/download-link.ts");
/* harmony import */ var _spritely_spritely_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../spritely/spritely-file.service */ "./src/app/spritely/spritely-file.service.ts");






var FileFormComponent = /** @class */ (function () {
    function FileFormComponent(fb, sf) {
        this.fb = fb;
        this.sf = sf;
        this.fileForm = this.fb.group({
            saveFile: ['']
        });
        this.saveDataUpdateTrigger = new _trigger__WEBPACK_IMPORTED_MODULE_3__["Trigger"]("update-save-data");
        this.readyToSave = false;
        this.downloadLink = new _download_link__WEBPACK_IMPORTED_MODULE_4__["DownloadLink"]();
    }
    FileFormComponent.prototype.ngOnInit = function () {
        var me = this;
        this.saveDataUpdateTrigger.addListener(function (e) {
            me.readyToSave = true;
        });
    };
    FileFormComponent.prototype.tempDataReader = function () {
        var me = this;
        return function (fileData, fileName) {
            me.prepareLoadedData(fileData).subscribe(function (data) {
                console.log(data);
                me.loadedFileData = data;
                me.fileForm.patchValue({
                    saveFile: fileName
                });
            });
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
        };
    };
    FileFormComponent.prototype.saveDialogConfirmer = function () {
        var me = this;
        return function () {
            me.invokeDownload(me.fileForm.value.saveFile);
        };
    };
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileFormComponent.prototype, "saveRoute", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileFormComponent.prototype, "invokeDownload", void 0);
    FileFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'file-form',
            template: __webpack_require__(/*! ./file-form.component.html */ "./src/app/util/file-form/file-form.component.html"),
            styles: [__webpack_require__(/*! ./file-form.component.scss */ "./src/app/util/file-form/file-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _spritely_spritely_file_service__WEBPACK_IMPORTED_MODULE_5__["SpritelyFileService"]])
    ], FileFormComponent);
    return FileFormComponent;
}());



/***/ }),

/***/ "./src/app/util/file-load-input/file-load-input.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/util/file-load-input/file-load-input.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" class=\"nes-input\" (change)=\"loadFile($event)\"/>\n"

/***/ }),

/***/ "./src/app/util/file-load-input/file-load-input.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/util/file-load-input/file-load-input.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWwvZmlsZS1sb2FkLWlucHV0L2ZpbGUtbG9hZC1pbnB1dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/util/file-load-input/file-load-input.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/util/file-load-input/file-load-input.component.ts ***!
  \*******************************************************************/
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
                console.log(e);
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
            template: __webpack_require__(/*! ./file-load-input.component.html */ "./src/app/util/file-load-input/file-load-input.component.html"),
            styles: [__webpack_require__(/*! ./file-load-input.component.scss */ "./src/app/util/file-load-input/file-load-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileLoadInputComponent);
    return FileLoadInputComponent;
}());



/***/ }),

/***/ "./src/app/util/nes-tabs/child-panel/child-panel.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/util/nes-tabs/child-panel/child-panel.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"show\" class=\"showcase nes-tab-body\">\n  <div class=\"nes-container with-title\">\n    <div class=\"title\">\n      <h5>{{label}}</h5>\n    </div>\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/util/nes-tabs/child-panel/child-panel.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/util/nes-tabs/child-panel/child-panel.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWwvbmVzLXRhYnMvY2hpbGQtcGFuZWwvY2hpbGQtcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/util/nes-tabs/child-panel/child-panel.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/util/nes-tabs/child-panel/child-panel.component.ts ***!
  \********************************************************************/
/*! exports provided: ChildPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildPanelComponent", function() { return ChildPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChildPanelComponent = /** @class */ (function () {
    function ChildPanelComponent() {
        this.show = false;
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
            template: __webpack_require__(/*! ./child-panel.component.html */ "./src/app/util/nes-tabs/child-panel/child-panel.component.html"),
            styles: [__webpack_require__(/*! ./child-panel.component.scss */ "./src/app/util/nes-tabs/child-panel/child-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChildPanelComponent);
    return ChildPanelComponent;
}());



/***/ }),

/***/ "./src/app/util/nes-tabs/tabbed-panel/tabbed-panel.component.html":
/*!************************************************************************!*\
  !*** ./src/app/util/nes-tabs/tabbed-panel/tabbed-panel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"showcase\">\n      <div class=\"nes-container with-title\">\n        <div class=\"title\">\n          <h4 style=\"display: inline;\">&nbsp;{{title}}&nbsp;</h4>\n          <ng-container *ngFor=\"let child of children; index as i\">\n            <button class=\"nes-btn nes-tab-btn {{(activeIndex == i) ? activeClass : ''}}\" (click)=\"select(i)\">{{child.label}}</button>\n          </ng-container>\n        </div>\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/util/nes-tabs/tabbed-panel/tabbed-panel.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/util/nes-tabs/tabbed-panel/tabbed-panel.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWwvbmVzLXRhYnMvdGFiYmVkLXBhbmVsL3RhYmJlZC1wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/util/nes-tabs/tabbed-panel/tabbed-panel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/util/nes-tabs/tabbed-panel/tabbed-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: TabbedPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabbedPanelComponent", function() { return TabbedPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _child_panel_child_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../child-panel/child-panel.component */ "./src/app/util/nes-tabs/child-panel/child-panel.component.ts");



var TabbedPanelComponent = /** @class */ (function () {
    function TabbedPanelComponent() {
        this.activeIndex = 0;
    }
    TabbedPanelComponent.prototype.ngOnInit = function () {
        this.activeIndex = this.initActiveIndex;
    };
    TabbedPanelComponent.prototype.ngAfterContentInit = function () {
        this.children.toArray()[this.activeIndex].show = true;
    };
    TabbedPanelComponent.prototype.select = function (index) {
        this.children.toArray()[this.activeIndex].show = false;
        this.activeIndex = index;
        this.children.toArray()[this.activeIndex].show = true;
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
            template: __webpack_require__(/*! ./tabbed-panel.component.html */ "./src/app/util/nes-tabs/tabbed-panel/tabbed-panel.component.html"),
            styles: [__webpack_require__(/*! ./tabbed-panel.component.scss */ "./src/app/util/nes-tabs/tabbed-panel/tabbed-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabbedPanelComponent);
    return TabbedPanelComponent;
}());



/***/ }),

/***/ "./src/app/util/okay-dialog/okay-dialog.component.html":
/*!*************************************************************!*\
  !*** ./src/app/util/okay-dialog/okay-dialog.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  okay-dialog works!\n</p>\n"

/***/ }),

/***/ "./src/app/util/okay-dialog/okay-dialog.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/util/okay-dialog/okay-dialog.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWwvb2theS1kaWFsb2cvb2theS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/util/okay-dialog/okay-dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/util/okay-dialog/okay-dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: OkayDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkayDialogComponent", function() { return OkayDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OkayDialogComponent = /** @class */ (function () {
    function OkayDialogComponent() {
    }
    OkayDialogComponent.prototype.ngOnInit = function () {
    };
    OkayDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-okay-dialog',
            template: __webpack_require__(/*! ./okay-dialog.component.html */ "./src/app/util/okay-dialog/okay-dialog.component.html"),
            styles: [__webpack_require__(/*! ./okay-dialog.component.scss */ "./src/app/util/okay-dialog/okay-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OkayDialogComponent);
    return OkayDialogComponent;
}());



/***/ }),

/***/ "./src/app/util/palette-display/palette-display.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/util/palette-display/palette-display.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\r\n  <div *ngIf=\"palette && (palette.length == (showFirst?0:1))\" class=\"col-sm-12 nes-input text-center\">\r\n    <span>Add colors to your palette to paint.</span>\r\n  </div>\r\n  <div *ngIf=\"palette && (palette.length > (showFirst?0:1))\" class=\"col-sm-12 text-justify palette\" [style.margin]=\"0\">\r\n    <ng-container *ngFor=\"let c of palette; index as i\">\r\n      <a *ngIf=\"showFirst || i > 0\"\r\n        class=\"palette-item\"\r\n        [style.width]=\"((100/(palette.length - (showFirst?0:1))) - 2)+'%'\"\r\n        href=\"{{href}}\"\r\n        (click)=\"select(i)\"\r\n        (dblclick)=\"setColor(i)\"\r\n        >\r\n        <span class=\"nes-input palette-color {{(activeIndex == i)?'is-error':''}}\"\r\n              [style.color]=\"c\"\r\n              [style.backgroundColor]=\"c\"\r\n        >_</span>\r\n      </a>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/util/palette-display/palette-display.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/util/palette-display/palette-display.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWwvcGFsZXR0ZS1kaXNwbGF5L3BhbGV0dGUtZGlzcGxheS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/util/palette-display/palette-display.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/util/palette-display/palette-display.component.ts ***!
  \*******************************************************************/
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
    PaletteDisplayComponent.prototype.select = function (index) {
        this.selectFn(index);
        this.activeIndex = index;
    };
    PaletteDisplayComponent.prototype.setColor = function (index) {
        this.select(index);
        this.setColorFn(index);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], PaletteDisplayComponent.prototype, "setColorFn", void 0);
    PaletteDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-palette-display',
            template: __webpack_require__(/*! ./palette-display.component.html */ "./src/app/util/palette-display/palette-display.component.html"),
            styles: [__webpack_require__(/*! ./palette-display.component.scss */ "./src/app/util/palette-display/palette-display.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaletteDisplayComponent);
    return PaletteDisplayComponent;
}());



/***/ }),

/***/ "./src/app/util/pixel-pending/pixel-pending.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/util/pixel-pending/pixel-pending.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dialog #pendingDialog  class=\"nes-dialog is-dark is-rounded\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      {{label}} pending ...\n    </div>\n    <div class=\"col-12\">\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"10\" y=\"10\" width=\"20\" height=\"20\" fill=\"white\">\n          <animate id=\"anim1\" attributeType=\"XML\" attributeName=\"fill\" from=\"white\" to=\"black\" begin=\"0s; anim2.end\" dur=\"1s\" repeatCount=\"\"/>\n          <animate id=\"anim2\" attributeType=\"XML\" attributeName=\"fill\" from=\"black\" to=\"white\" begin=\"anim1.end\" dur=\"1s\" repeatCount=\"\"/>\n        </rect>\n      </svg>\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" version=\"1.1\"\n           xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"10\" y=\"10\" width=\"20\" height=\"20\" fill=\"white\">\n          <animate id=\"anim3\" attributeType=\"XML\" attributeName=\"fill\" from=\"white\" to=\"red\" begin=\"0.5s; anim4.end\" dur=\"1s\" repeatCount=\"\"/>\n          <animate id=\"anim4\" attributeType=\"XML\" attributeName=\"fill\" from=\"red\" to=\"white\" begin=\"anim3.end\" dur=\"1s\" repeatCount=\"\"/>\n        </rect>\n      </svg>\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"10\" y=\"10\" width=\"20\" height=\"20\" fill=\"white\">\n          <animate id=\"anim5\" attributeType=\"XML\" attributeName=\"fill\" from=\"white\" to=\"green\" begin=\"1s; anim6.end\" dur=\"1s\" repeatCount=\"\"/>\n          <animate id=\"anim6\" attributeType=\"XML\" attributeName=\"fill\" from=\"green\" to=\"white\" begin=\"anim5.end\" dur=\"1s\" repeatCount=\"\"/>\n        </rect>\n      </svg>\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"10\" y=\"10\" width=\"20\" height=\"20\" fill=\"white\">\n          <animate id=\"anim7\" attributeType=\"XML\" attributeName=\"fill\" from=\"white\" to=\"blue\" begin=\"1.5s; anim8.end\" dur=\"1s\" repeatCount=\"\"/>\n          <animate id=\"anim8\" attributeType=\"XML\" attributeName=\"fill\" from=\"blue\" to=\"white\" begin=\"anim7.end\" dur=\"1s\" repeatCount=\"\"/>\n        </rect>\n      </svg>\n    </div>\n  </div>\n</dialog>\n"

/***/ }),

/***/ "./src/app/util/pixel-pending/pixel-pending.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/util/pixel-pending/pixel-pending.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWwvcGl4ZWwtcGVuZGluZy9waXhlbC1wZW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/util/pixel-pending/pixel-pending.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/util/pixel-pending/pixel-pending.component.ts ***!
  \***************************************************************/
/*! exports provided: PixelPendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelPendingComponent", function() { return PixelPendingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PixelPendingComponent = /** @class */ (function () {
    function PixelPendingComponent() {
        this.label = "";
    }
    PixelPendingComponent.prototype.ngOnInit = function () {
        this.dialog = this.dialogRef.nativeElement;
    };
    PixelPendingComponent.prototype.block = function () {
        console.log("blocking");
        this.dialog.showModal();
    };
    PixelPendingComponent.prototype.complete = function () {
        console.log("pending complete");
        this.dialog.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pendingDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PixelPendingComponent.prototype, "dialogRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PixelPendingComponent.prototype, "label", void 0);
    PixelPendingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pixel-pending',
            template: __webpack_require__(/*! ./pixel-pending.component.html */ "./src/app/util/pixel-pending/pixel-pending.component.html"),
            styles: [__webpack_require__(/*! ./pixel-pending.component.scss */ "./src/app/util/pixel-pending/pixel-pending.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PixelPendingComponent);
    return PixelPendingComponent;
}());



/***/ }),

/***/ "./src/app/util/point.ts":
/*!*******************************!*\
  !*** ./src/app/util/point.ts ***!
  \*******************************/
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

/***/ "./src/app/util/range.ts":
/*!*******************************!*\
  !*** ./src/app/util/range.ts ***!
  \*******************************/
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

/***/ "./src/app/util/trigger.ts":
/*!*********************************!*\
  !*** ./src/app/util/trigger.ts ***!
  \*********************************/
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
    production: false,
    mock: false
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