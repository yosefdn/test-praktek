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
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photos/photos.component */ "./src/app/photos/photos.component.ts");





var routes = [
    { path: 'contacts', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"] },
    { path: 'photos', component: _photos_photos_component__WEBPACK_IMPORTED_MODULE_4__["PhotosComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"]];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>\n<!-- <mat-tab-group animationDuration=\"1000ms\">\n  <mat-tab label=\"Contacts\" >\n    <app-contacts></app-contacts>\n  </mat-tab>\n  <mat-tab label=\"Photos\" >\n    <app-photos></app-photos>  \n  </mat-tab>\n</mat-tab-group>\n-->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: #000000;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%; }\n\nh2, h3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter; }\n\nbody {\n  margin: 2em; }\n\nbody, input[text], button {\n  color: #888;\n  font-family: Cambria, Georgia; }\n\na {\n  cursor: pointer;\n  cursor: hand; }\n\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  padding: 5px 10px;\n  cursor: pointer;\n  cursor: hand; }\n\nbutton:hover {\n  background-color: #cfd8dc; }\n\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto; }\n\n/* Navigation link styles */\n\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  /*background-color: #eee;*/\n  /*border-radius: 4px;*/ }\n\nnav a:visited, a:link {\n  color: #607D8B; }\n\nnav a:hover {\n  color: #039be5;\n  border-bottom-color: #039be5;\n  border-color: #039be5; }\n\nnav a.active {\n  color: #039be5; }\n\n/* items class */\n\n.items {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding-left: 0;\n  width: 10em; }\n\n.items li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em;\n  height: 1.6em;\n  /*border-radius: 4px;*/ }\n\n.items li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em; }\n\n.items li.selected:hover {\n  background-color: #BBD8DC;\n  color: white; }\n\n.items .text {\n  position: relative;\n  top: -3px; }\n\n.items li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em;\n  height: 1.6em;\n  /*border-radius: 4px;*/ }\n\n.items .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  /*border-radius: 4px 0 0 4px;*/ }\n\n.items li.selected {\n  background-color: #CFD8DC;\n  color: white; }\n\n/* everywhere else */\n\n* {\n  font-family: Arial, Helvetica, sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGFuZ3VsYXJcXHRlc3QtcHJha3Rlay9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLHlDQUF5QztFQUN6QyxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsV0FBVztFQUNYLHlDQUF5QztFQUN6QyxvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBRWQ7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZCwyQkFBQTs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiwwQkFBQTtFQUNBLHNCQUFBLEVBQXVCOztBQUV6QjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGNBQWMsRUFBQTs7QUFHaEIsZ0JBQUE7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQUEsRUFBdUI7O0FBRXpCO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixVQUFVLEVBQUE7O0FBRVo7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBQSxFQUF1Qjs7QUFHekI7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDhCQUFBLEVBQStCOztBQUVqQztFQUNFLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBRWQsb0JBQUE7O0FBQ0E7RUFDRSx5Q0FBeUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwOyBcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyAgIFxyXG4gICAgZm9udC1zaXplOiAyNTAlO1xyXG4gIH1cclxuICBoMiwgaDMgeyBcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7ICAgXHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICB9XHJcbiAgYm9keSB7IFxyXG4gICAgbWFyZ2luOiAyZW07IFxyXG4gIH1cclxuICBib2R5LCBpbnB1dFt0ZXh0XSwgYnV0dG9uIHsgXHJcbiAgICBjb2xvcjogIzg4ODsgXHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTsgXHJcbiAgfVxyXG4gIGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY3Vyc29yOiBoYW5kO1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY3Vyc29yOiBoYW5kO1xyXG4gIH1cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxuICB9XHJcbiAgYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBjb2xvcjogI2FhYTsgXHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE5hdmlnYXRpb24gbGluayBzdHlsZXMgKi9cclxuICBuYXYgYSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNlZWU7Ki9cclxuICAgIC8qYm9yZGVyLXJhZGl1czogNHB4OyovXHJcbiAgfVxyXG4gIG5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XHJcbiAgICBjb2xvcjogIzYwN0Q4QjtcclxuICB9XHJcbiAgbmF2IGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMzliZTU7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDM5YmU1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDM5YmU1O1xyXG4gIH1cclxuICBuYXYgYS5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMzliZTU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGl0ZW1zIGNsYXNzICovXHJcbiAgLml0ZW1zIHtcclxuICAgIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwZW07XHJcbiAgfVxyXG4gIC5pdGVtcyBsaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICAgIG1hcmdpbjogLjVlbTtcclxuICAgIHBhZGRpbmc6IC4zZW07XHJcbiAgICBoZWlnaHQ6IDEuNmVtO1xyXG4gICAgLypib3JkZXItcmFkaXVzOiA0cHg7Ki9cclxuICB9XHJcbiAgLml0ZW1zIGxpOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNjA3RDhCO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgIGxlZnQ6IC4xZW07XHJcbiAgfVxyXG4gIC5pdGVtcyBsaS5zZWxlY3RlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuaXRlbXMgLnRleHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gIH1cclxuICBcclxuICAuaXRlbXMgbGkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgICBtYXJnaW46IC41ZW07XHJcbiAgICBwYWRkaW5nOiAuM2VtO1xyXG4gICAgaGVpZ2h0OiAxLjZlbTtcclxuICAgIC8qYm9yZGVyLXJhZGl1czogNHB4OyovXHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtcyAuYmFkZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xcHg7XHJcbiAgICB0b3A6IC00cHg7XHJcbiAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gICAgLypib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDsqL1xyXG4gIH1cclxuICAuaXRlbXMgbGkuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLyogZXZlcnl3aGVyZSBlbHNlICovXHJcbiAgKiB7IFxyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IFxyXG4gIH0iXX0= */"

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
        this.title = 'Tset-Praktek';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./photos/photos.component */ "./src/app/photos/photos.component.ts");







// Component



// Service
// import { ContactsService } from './contacts.service';
// import { PhotosService } from './photos.service';
// import { Contacts } from './contacts.model';
// @angular/Matrial
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {
// MatTabsModule,
// MatCardModule,
// MatTableModule } from '@angular/material/';
// import 'hammerjs';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routingComponents"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"],
                _photos_photos_component__WEBPACK_IMPORTED_MODULE_9__["PhotosComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
            ],
            providers: [
            // ContactsService,
            // PhotosService
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts.service.ts":
/*!*************************************!*\
  !*** ./src/app/contacts.service.ts ***!
  \*************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");






var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this._usersURL = 'https://jsonplaceholder.typicode.com/users';
    }
    ApiService.prototype.getUsers = function () {
        return this.http
            .get(this._usersURL)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiService.prototype.handleError = function (error) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.statusText);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"card\" *ngFor=\"let user of _usersArray\">\r\n        <div class=\"left\">\r\n            <h1>{{user.username}}</h1>\r\n            <h3>{{user.name}}</h3>\r\n        </div>\r\n\r\n        <div class=\"right\">\r\n            <p>{{user.address.city}}</p>\r\n            <p>{{user.email}}</p>\r\n            <p>{{user.website}}</p>\r\n        </div>\r\n    </div>  \r\n     \r\n    <p>25 Form XXX Contact</p>\r\n</div>"

/***/ }),

/***/ "./src/app/contacts/contacts.component.scss":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 10px 15% 10px 15%; }\n\n.container p {\n  color: gray;\n  font-size: 18px;\n  text-align: center; }\n\nh1 {\n  font-weight: 700;\n  display: unset; }\n\n.card {\n  height: 130px;\n  width: auto;\n  margin: 50px 70px 50px 70px;\n  border-radius: 15px;\n  display: block;\n  padding: 15px 30px 15px 30px;\n  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2); }\n\n.card .left {\n  margin: 0;\n  padding: 10px 0 0 20px;\n  background-color: white;\n  height: 100%;\n  width: 50%;\n  display: block;\n  float: left; }\n\n.card .right {\n  margin: 0;\n  padding: 0;\n  background-color: white;\n  border-left: 2px solid gray;\n  height: 100%;\n  width: 40%;\n  display: block;\n  float: right; }\n\n.card .right p {\n  text-align: left;\n  margin-left: 30%;\n  margin-top: 15px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvRDpcXGFuZ3VsYXJcXHRlc3QtcHJha3Rlay9zcmNcXGFwcFxcY29udGFjdHNcXGNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUztFQUNULHlDQUF5QztFQUN6QywwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksYUFBYTtFQUNiLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCw0QkFBNEI7RUFHNUIsK0NBQWdELEVBQUE7O0FBR3BEO0VBQ0ksU0FBUztFQUNULHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFVBQVU7RUFDVixjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUdmO0VBQ0ksU0FBUztFQUNULFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMTBweCAxNSUgMTBweCAxNSU7XHJcbn1cclxuXHJcbi5jb250YWluZXIgcHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IDUwcHggNzBweCA1MHB4IDcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoMCwwLDAsMC4yMCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSgwLDAsMCwwLjIwKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxufVxyXG5cclxuLmNhcmQgLmxlZnR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNhcmQgLnJpZ2h0e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBncmF5O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2FyZCAucmlnaHQgcHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contacts.service */ "./src/app/contacts.service.ts");



var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(apiService) {
        this.apiService = apiService;
    }
    ContactsComponent.prototype.getUsers = function () {
        var _this = this;
        this.apiService.getUsers()
            .subscribe(function (resultArray) { return _this._usersArray = resultArray; }, function (error) { return console.log('Error :: ' + error); });
    };
    ContactsComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            providers: [_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/contacts/contacts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <img src=\"https://scontent.fcgk10-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/40037121_1834094229972146_8133960213653880832_n.jpg?_nc_cat=105&_nc_ht=scontent.fcgk10-1.fna&oh=8a8cb8a902aeefcbb9845977c2890fde&oe=5CBF80E0\" class=\"myphoto\">\n  <div style=\"text-align:left\">\n    <h1>{{textJudul}}</h1>\n  </div>\n  <nav>\n    <a (click)=\"textJudul='All Contacts'\" routerLink=\"/contacts\" routerLinkActive=\"active\">Contacts</a>\n    <a (click)=\"textJudul='All Photos'\" routerLink=\"/photos\" routerLinkActive=\"active\">Photos</a>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Header Styles */\nh1 {\n  color: #000000;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 300%;\n  font-weight: 700;\n  padding-left: 35px; }\na {\n  font-size: 18px;\n  cursor: pointer;\n  cursor: hand; }\n/* Navigation link styles */\n.box {\n  padding: 20px 20% 0 15%;\n  box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.13); }\nnav a {\n  padding: 15px 0;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  border-bottom: 5px solid white; }\nnav a:visited, a:link {\n  color: black;\n  text-align: center;\n  width: 150px; }\nnav a:hover {\n  border-bottom: 5px solid #058bce; }\nnav a.active {\n  color: black;\n  font-weight: bold;\n  border-bottom: 5px solid  #53c6ff; }\n.myphoto {\n  width: 155px;\n  height: 155px;\n  background: rgba(128, 128, 128, 0.288);\n  border-radius: 100%;\n  -moz-border-radius: 100%;\n  -webkit-border-radius: 100%;\n  float: right;\n  display: inline; }\n/* everywhere else */\n* {\n  font-family: Arial, Helvetica, sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxhbmd1bGFyXFx0ZXN0LXByYWt0ZWsvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBQ0E7RUFDSSxjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVksRUFBQTtBQUVkLDJCQUFBO0FBQ0Y7RUFDSSx1QkFBdUI7RUFHdkIsZ0RBQWdELEVBQUE7QUFFcEQ7RUFDSSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsOEJBQThCLEVBQUE7QUFFbEM7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtBQUVoQjtFQUNJLGdDQUFnQyxFQUFBO0FBRXBDO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQ0FBa0MsRUFBQTtBQUd0QztFQUNFLFlBQVk7RUFDYixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3JDLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixlQUFlLEVBQUE7QUFHZixvQkFBQTtBQUNGO0VBQ0kseUNBQXlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVhZGVyIFN0eWxlcyAqL1xyXG5oMSB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDsgXHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgICBcclxuICAgIGZvbnQtc2l6ZTogMzAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7IFxyXG4gIH1cclxuXHJcbmEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY3Vyc29yOiBoYW5kO1xyXG59XHJcbiAgLyogTmF2aWdhdGlvbiBsaW5rIHN0eWxlcyAqL1xyXG4uYm94e1xyXG4gICAgcGFkZGluZzogMjBweCAyMCUgMCAxNSU7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggMTVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XHJcbn1cclxubmF2IGEge1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5uYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbm5hdiBhOmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMDU4YmNlO1xyXG59XHJcbm5hdiBhLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAgIzUzYzZmZiA7XHJcbn1cclxuXHJcbi5teXBob3RvIHtcclxuICB3aWR0aDogMTU1cHg7XHJcblx0aGVpZ2h0OiAxNTVweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjg4KSA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbiAgLyogZXZlcnl3aGVyZSBlbHNlICovXHJcbiogeyBcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.textJudul = 'Test Praktek';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/photos.service.ts":
/*!***********************************!*\
  !*** ./src/app/photos.service.ts ***!
  \***********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");






var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this._photosURL = 'https://jsonplaceholder.typicode.com/photos';
    }
    ApiService.prototype.getUsers = function () {
        return this.http
            .get(this._photosURL)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiService.prototype.handleError = function (error) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.statusText);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/photos/photos.component.html":
/*!**********************************************!*\
  !*** ./src/app/photos/photos.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n    <div class=\"album\">    \r\n        <div class=\"head\">\r\n            <h1>Album {{album.number}}</h1>\r\n            <h3>XX Photos</h3>\r\n        </div>\r\n        <div class=\"view1\">\r\n            <div class=\"data\"></div>\r\n            <h3>Photo Description {{photos.id}}</h3>\r\n        </div>\r\n        <div class=\"view2\">\r\n            <div class=\"data\"></div>\r\n            <h3>Photo Description</h3>\r\n        </div>\r\n        <div class=\"view3\">\r\n            <div class=\"data\"></div>\r\n            <h3>Photo Description</h3>\r\n        </div>\r\n        <div class=\"view4\">\r\n            <div class=\"data\"></div>\r\n            <h3>Photo Description</h3>\r\n        </div>\r\n        <div class=\"view5\">\r\n            <div class=\"data\"></div>\r\n            <h3>Photo Description</h3>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"album\">\r\n        <div class=\"head\">\r\n            <h1>Album {{album.number}}</h1>\r\n            <h3>XX Photos</h3>\r\n        </div>\r\n        <div class=\"view1\">\r\n            <div class=\"data\"></div>\r\n            <h3>Photo Description</h3>\r\n        </div>\r\n        <div class=\"view2\">\r\n            <div class=\"data\"></div>\r\n            <h3>Photo Description</h3>\r\n        </div>\r\n        <div class=\"view3\">\r\n            <div class=\"data\"></div>\r\n            <h3>Photo Description</h3>\r\n        </div>\r\n        <div class=\"view4\">\r\n            <div class=\"data\"></div>\r\n            <h3>Photo Description</h3>\r\n        </div>\r\n        <div class=\"view5\">\r\n            <div class=\"data\"></div>\r\n            <h3>Photo Description</h3>\r\n        </div>\r\n    </div>\r\n    <p>50 Form XXX Photos</p>\r\n</div>"

/***/ }),

/***/ "./src/app/photos/photos.component.scss":
/*!**********************************************!*\
  !*** ./src/app/photos/photos.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 0;\n  padding: 50px 15% 10px 15%;\n  font-family: Arial, Helvetica, sans-serif; }\n\n.album {\n  padding-left: 50px;\n  padding-right: 50px;\n  margin-bottom: 100px; }\n\n.head h1 {\n  width: 60%;\n  display: inline-block; }\n\n.head h3 {\n  text-align: right;\n  width: 30%;\n  display: inline-block; }\n\n.view1 {\n  height: 350px;\n  width: 60%;\n  display: inline-block;\n  margin-bottom: 50px; }\n\n.view2 {\n  height: 350px;\n  width: 30%;\n  display: inline-block; }\n\n.view3 {\n  height: 350px;\n  width: 30%;\n  display: inline-block; }\n\n.view4 {\n  height: 350px;\n  width: 30%;\n  display: inline-block; }\n\n.view5 {\n  height: 350px;\n  width: 30%;\n  display: inline-block; }\n\n.data {\n  height: 80%;\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  border-radius: 15px;\n  background-color: gray; }\n\n.view1 .data {\n  width: 97%; }\n\n.album h3 {\n  margin-left: 20px; }\n\n.container p {\n  color: gray;\n  font-size: 18px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zL0Q6XFxhbmd1bGFyXFx0ZXN0LXByYWt0ZWsvc3JjXFxhcHBcXHBob3Rvc1xccGhvdG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUztFQUNULDBCQUEwQjtFQUMxQix5Q0FBeUMsRUFBQTs7QUFFN0M7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBOztBQUV4QjtFQUNJLFVBQVU7RUFDVixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGFBQWE7RUFDYixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGFBQWE7RUFDYixVQUFVO0VBQ1YscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksYUFBYTtFQUNiLFVBQVU7RUFDVixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxhQUFhO0VBQ2IsVUFBVTtFQUNWLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGFBQWE7RUFDYixVQUFVO0VBQ1YscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Bob3Rvcy9waG90b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogNTBweCAxNSUgMTBweCAxNSU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG4uYWxidW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcbi5oZWFkIGgxe1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uaGVhZCBoM3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4udmlldzEge1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi52aWV3MiB7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4udmlldzMge1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnZpZXc0IHtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi52aWV3NSB7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uZGF0YXtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcbi52aWV3MSAuZGF0YXtcclxuICAgIHdpZHRoOiA5NyU7XHJcbn1cclxuLmFsYnVtIGgze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmNvbnRhaW5lciBwe1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/photos/photos.component.ts":
/*!********************************************!*\
  !*** ./src/app/photos/photos.component.ts ***!
  \********************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _photos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photos.service */ "./src/app/photos.service.ts");



var PhotosComponent = /** @class */ (function () {
    function PhotosComponent(apiService) {
        this.apiService = apiService;
    }
    PhotosComponent.prototype.getUsers = function () {
        var _this = this;
        this.apiService.getUsers()
            .subscribe(function (resultArray) { return _this._photosArray = resultArray; }, function (error) { return console.log('Error :: ' + error); });
    };
    PhotosComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    PhotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photos',
            template: __webpack_require__(/*! ./photos.component.html */ "./src/app/photos/photos.component.html"),
            providers: [_photos_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
            styles: [__webpack_require__(/*! ./photos.component.scss */ "./src/app/photos/photos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_photos_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], PhotosComponent);
    return PhotosComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! D:\angular\test-praktek\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map