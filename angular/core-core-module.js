(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-core-module"],{

/***/ "./src/app/core/core.component.ts":
/*!****************************************!*\
  !*** ./src/app/core/core.component.ts ***!
  \****************************************/
/*! exports provided: CoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreComponent", function() { return CoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.service */ "./src/app/core/core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoreComponent = /** @class */ (function () {
    function CoreComponent(coreService) {
        this.coreService = coreService;
    }
    CoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-core',
            template: "\n        <mat-sidenav-container style=\"position: fixed; height: 100%; width: 100%;\">\n            <mat-sidenav\n                style=\"width: 250px;\"\n                [opened]=\"this.coreService.sidenavOpened$ | async\"\n                (closedStart)=\"this.coreService.sidenavOpened$.next(false)\"\n            >\n\n                <app-nav-item\n                    icon=\"search\"\n                    title=\"Search\"\n                    (navigate)=\"this.coreService.navigate(['app', 'search'])\"\n                ></app-nav-item>\n\n                <app-nav-item\n                    icon=\"folder\"\n                    title=\"Folders\"\n                    (navigate)=\"this.coreService.navigate(['app', 'folders'])\"\n                ></app-nav-item>\n\n                <app-nav-item\n                    icon=\"person\"\n                    title=\"Account\"\n                    (navigate)=\"this.coreService.navigate(['app', 'account'])\"\n                ></app-nav-item>\n\n                <app-nav-item\n                    icon=\"power_settings_new\"\n                    title=\"Logout\"\n                    (navigate)=\"this.coreService.logout()\"\n                ></app-nav-item>\n            </mat-sidenav>\n\n            <mat-sidenav-content>\n                <app-tool-bar\n                    [toolbarTitle]=\"this.coreService.toolbarTitle$ | async\"\n                    (sidenavToggle)=\"this.coreService.sidenavOpened$.next(!this.coreService.sidenavOpened$.getValue())\"\n                ></app-tool-bar>\n\n                <app-loading *ngIf=\"this.coreService.loading$ | async\"></app-loading>\n\n                <router-outlet></router-outlet>\n\n            </mat-sidenav-content>\n        </mat-sidenav-container>\n    ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"]])
    ], CoreComponent);
    return CoreComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core.service */ "./src/app/core/core.service.ts");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core.component */ "./src/app/core/core.component.ts");
/* harmony import */ var _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tool-bar/tool-bar.component */ "./src/app/core/tool-bar/tool-bar.component.ts");
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-item/nav-item.component */ "./src/app/core/nav-item/nav-item.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/core/loading/loading.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _core_component__WEBPACK_IMPORTED_MODULE_5__["CoreComponent"], children: [
                            { path: '', redirectTo: 'search', pathMatch: 'full' },
                            { path: 'search', loadChildren: '../search/search.module#SearchModule' },
                            { path: 'language', loadChildren: '../language/language.module#LanguageModule' },
                            { path: 'article', loadChildren: '../article/article.module#ArticleModule' },
                            { path: 'folders', loadChildren: '../folders/folders.module#FoldersModule' },
                            { path: 'cards', loadChildren: '../cards/cards.module#CardsModule' },
                            { path: 'account', loadChildren: '../account/account.module#AccountModule' },
                        ] },
                ])
            ],
            declarations: [
                _core_component__WEBPACK_IMPORTED_MODULE_5__["CoreComponent"],
                _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_6__["ToolBarComponent"],
                _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_7__["NavItemComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"]
            ],
            providers: [_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/loading/loading.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/loading/loading.component.ts ***!
  \***************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: "\n        <div class=\"mat-headline\">Loading...</div>\n    ",
            styles: ["\n    div {\n        position: absolute;\n        background: white;\n        top: 64px;\n        left: 0px;\n        right: 0px;\n        bottom: 0px;\n        z-index: 1000;\n        display: flex;\n        justify-content: center;\n        place-items: center;\n    }\n"]
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/core/nav-item/nav-item.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/nav-item/nav-item.component.ts ***!
  \*****************************************************/
/*! exports provided: NavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemComponent", function() { return NavItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavItemComponent = /** @class */ (function () {
    function NavItemComponent() {
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavItemComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavItemComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "navigate", void 0);
    NavItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-item',
            template: "\n        <a (click)=\"navigate.emit()\" mat-button>\n            <mat-icon mat-list-icon>{{ this.icon }}</mat-icon>\n            <span mat-line>{{ this.title }}</span>\n        </a>\n    ",
            styles: ["\n        a {\n            width: 100%;\n            text-align: left;\n            padding-top: 6px;\n            padding-bottom: 6px;\n            border-bottom: 1px solid #ddd;\n        }\n        a:hover {\n            opacity: .8;\n        }\n        mat-icon {\n            color: rgba(0, 0, 0, 0.54);\n        }\n        span {\n            font-size: 15px;\n            font-weight: 400;\n            margin-left: 16px;\n        }\n    "]
        })
    ], NavItemComponent);
    return NavItemComponent;
}());



/***/ }),

/***/ "./src/app/core/tool-bar/tool-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/tool-bar/tool-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: ToolBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarComponent", function() { return ToolBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolBarComponent = /** @class */ (function () {
    function ToolBarComponent() {
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToolBarComponent.prototype, "toolbarTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ToolBarComponent.prototype, "sidenavToggle", void 0);
    ToolBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tool-bar',
            template: "\n        <mat-toolbar color=\"primary\">\n            <button (click)=\"this.sidenavToggle.emit()\" mat-icon-button>\n                <mat-icon class=\"material-icons\">menu</mat-icon>\n            </button>\n            <span id=\"toolbar-title\">{{ this.toolbarTitle || '' }}</span>\n        </mat-toolbar>\n    ",
            styles: ["\n        mat-toolbar {\n            height: 64px !important;\n        }\n        #toolbar-title {\n            text-transform: capitalize;\n        }\n    "]
        })
    ], ToolBarComponent);
    return ToolBarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=core-core-module.js.map