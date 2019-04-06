(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folders-folders-module"],{

/***/ "./src/app/folders/folders-list/folders-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/folders/folders-list/folders-list.component.ts ***!
  \****************************************************************/
/*! exports provided: FoldersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldersListComponent", function() { return FoldersListComponent; });
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

var FoldersListComponent = /** @class */ (function () {
    function FoldersListComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FoldersListComponent.prototype, "folders", void 0);
    FoldersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-folders-list',
            template: "\n        <mat-list>\n            <h3 mat-subheader>Folders</h3>\n            <mat-list-item *ngFor=\"let folder of this.folders\" [routerLink]=\"'/app/cards/' + this.folder.id\">\n                <mat-icon [matBadge]=\"folder.cardsLength\" mat-list-icon>folder</mat-icon>\n                <h4 mat-line>{{ folder.folderName }}</h4>\n            </mat-list-item>\n        </mat-list>\n    ",
            styles: ["\n        :host {\n            width: 100%;\n            position: absolute;\n            bottom: 0px;\n            top: 64px;\n            overflow: auto;\n        }\n        h3 {\n            position: sticky;\n            top: 0px;\n            background: #eee;\n            z-index: 1;\n        }\n        h3,\n        mat-list-item {\n            outline: none;\n            padding-top: 8px;\n            border-bottom: 1px solid #ddd;\n        }\n        mat-list-item {\n            cursor: pointer;\n        }\n        mat-list-item:hover {\n            background: #ddd;\n        }\n        mat-icon {\n            color: rgba(0, 0, 0, 0.54);\n        }\n    "]
        })
    ], FoldersListComponent);
    return FoldersListComponent;
}());



/***/ }),

/***/ "./src/app/folders/folders.component.ts":
/*!**********************************************!*\
  !*** ./src/app/folders/folders.component.ts ***!
  \**********************************************/
/*! exports provided: FoldersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldersComponent", function() { return FoldersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/core.service */ "./src/app/core/core.service.ts");
/* harmony import */ var _folders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folders.service */ "./src/app/folders/folders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoldersComponent = /** @class */ (function () {
    function FoldersComponent(coreService, foldersService) {
        this.coreService = coreService;
        this.foldersService = foldersService;
    }
    FoldersComponent.prototype.ngOnInit = function () {
        this.coreService.toolbarTitle$.next('Folders');
    };
    FoldersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-folders',
            template: "\n        <app-folders-list [folders]=\"this.foldersService.folders$ | async\"></app-folders-list>\n    ",
            providers: [_folders_service__WEBPACK_IMPORTED_MODULE_2__["FoldersService"]]
        }),
        __metadata("design:paramtypes", [_core_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"],
            _folders_service__WEBPACK_IMPORTED_MODULE_2__["FoldersService"]])
    ], FoldersComponent);
    return FoldersComponent;
}());



/***/ }),

/***/ "./src/app/folders/folders.module.ts":
/*!*******************************************!*\
  !*** ./src/app/folders/folders.module.ts ***!
  \*******************************************/
/*! exports provided: FoldersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldersModule", function() { return FoldersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _folders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./folders.component */ "./src/app/folders/folders.component.ts");
/* harmony import */ var _folders_list_folders_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folders-list/folders-list.component */ "./src/app/folders/folders-list/folders-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FoldersModule = /** @class */ (function () {
    function FoldersModule() {
    }
    FoldersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _folders_component__WEBPACK_IMPORTED_MODULE_4__["FoldersComponent"] }
                ])
            ],
            declarations: [
                _folders_component__WEBPACK_IMPORTED_MODULE_4__["FoldersComponent"],
                _folders_list_folders_list_component__WEBPACK_IMPORTED_MODULE_5__["FoldersListComponent"]
            ]
        })
    ], FoldersModule);
    return FoldersModule;
}());



/***/ }),

/***/ "./src/app/folders/folders.service.ts":
/*!********************************************!*\
  !*** ./src/app/folders/folders.service.ts ***!
  \********************************************/
/*! exports provided: FoldersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldersService", function() { return FoldersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoldersService = /** @class */ (function () {
    function FoldersService(angularFireAuth, ngFireService) {
        var _this = this;
        this.angularFireAuth = angularFireAuth;
        this.ngFireService = ngFireService;
        this.folders$ = this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (user) { return _this.ngFireService.load1Condition('folders', 'userUid', '==', user.uid); }));
    }
    FoldersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["NgFireService"]])
    ], FoldersService);
    return FoldersService;
}());



/***/ })

}]);
//# sourceMappingURL=folders-folders-module.js.map