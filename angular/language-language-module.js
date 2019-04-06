(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["language-language-module"],{

/***/ "./src/app/language/language-list/language-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/language/language-list/language-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: LanguageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageListComponent", function() { return LanguageListComponent; });
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

var LanguageListComponent = /** @class */ (function () {
    function LanguageListComponent() {
        this.setLanguage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LanguageListComponent.prototype, "languageSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LanguageListComponent.prototype, "languages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LanguageListComponent.prototype, "setLanguage", void 0);
    LanguageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-language-list',
            template: "\n        <mat-list>\n            <mat-list-item\n                *ngFor=\"let language of this.languages\"\n                [ngClass]=\"{ isSelected: this.languageSelected === language.value }\"\n                (click)=\"this.setLanguage.emit(language.value)\"\n            >\n                {{ language.lang }}\n            </mat-list-item>\n        </mat-list>\n    ",
            styles: ["\n        :host {\n            width: 100%;\n            position: absolute;\n            bottom: 0px;\n            top: 120px;\n            overflow: auto;\n        }\n        mat-list-item {\n            cursor: pointer;\n            border-bottom: 1px solid #ddd;\n        }\n        .isSelected,\n        mat-list-item:hover {\n            background: #ddd;\n        }\n    "]
        })
    ], LanguageListComponent);
    return LanguageListComponent;
}());



/***/ }),

/***/ "./src/app/language/language.component.ts":
/*!************************************************!*\
  !*** ./src/app/language/language.component.ts ***!
  \************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/core.service */ "./src/app/core/core.service.ts");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.service */ "./src/app/language/language.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguageComponent = /** @class */ (function () {
    function LanguageComponent(coreService, languageService) {
        this.coreService = coreService;
        this.languageService = languageService;
    }
    LanguageComponent.prototype.ngOnInit = function () {
        this.coreService.toolbarTitle$.next('Language');
    };
    LanguageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-language',
            template: "\n        <app-tool-bar></app-tool-bar>\n        <app-language-list\n            [languages]=\"this.languageService.languages\"\n            [languageSelected]=\"this.languageService.languageSelected$ | async\"\n            (setLanguage)=\"this.languageService.setLanguage($event)\"\n        ></app-language-list>\n    ",
            providers: [_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]]
        }),
        __metadata("design:paramtypes", [_core_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"],
            _language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]])
    ], LanguageComponent);
    return LanguageComponent;
}());



/***/ }),

/***/ "./src/app/language/language.module.ts":
/*!*********************************************!*\
  !*** ./src/app/language/language.module.ts ***!
  \*********************************************/
/*! exports provided: LanguageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageModule", function() { return LanguageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _language_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./language.component */ "./src/app/language/language.component.ts");
/* harmony import */ var _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tool-bar/tool-bar.component */ "./src/app/language/tool-bar/tool-bar.component.ts");
/* harmony import */ var _language_list_language_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./language-list/language-list.component */ "./src/app/language/language-list/language-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LanguageModule = /** @class */ (function () {
    function LanguageModule() {
    }
    LanguageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _language_component__WEBPACK_IMPORTED_MODULE_5__["LanguageComponent"] }
                ])
            ],
            declarations: [
                _language_component__WEBPACK_IMPORTED_MODULE_5__["LanguageComponent"],
                _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_6__["ToolBarComponent"],
                _language_list_language_list_component__WEBPACK_IMPORTED_MODULE_7__["LanguageListComponent"]
            ]
        })
    ], LanguageModule);
    return LanguageModule;
}());



/***/ }),

/***/ "./src/app/language/language.service.ts":
/*!**********************************************!*\
  !*** ./src/app/language/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LanguageService = /** @class */ (function () {
    function LanguageService(router, angularFireAuth, ngFireService) {
        var _this = this;
        this.router = router;
        this.angularFireAuth = angularFireAuth;
        this.ngFireService = ngFireService;
        this.languages = [
            { lang: 'العربية', value: 'ar' },
            { lang: 'Беларуская (Акадэмічная)', value: 'be' },
            { lang: 'Български', value: 'bg' },
            { lang: 'Català', value: 'ca' },
            { lang: 'Čeština', value: 'cs' },
            { lang: 'Dansk', value: 'da' },
            { lang: 'Deutsch', value: 'de' },
            { lang: 'Ελληνικά', value: 'el' },
            { lang: 'English', value: 'en' },
            { lang: 'Español', value: 'es' },
            { lang: 'Esperanto', value: 'eo' },
            { lang: 'Eesti', value: 'et' },
            { lang: 'Euskara', value: 'eu' },
            { lang: 'فارسی', value: 'fa' },
            { lang: 'Français', value: 'fr' },
            { lang: 'Galego', value: 'gl' },
            { lang: '한국어', value: 'ko' },
            { lang: 'Հայերեն', value: 'hy' },
            { lang: 'हिन्दी', value: 'hi' },
            { lang: 'Hrvatski', value: 'hr' },
            { lang: 'Bahasa Indonesia', value: 'id' },
            { lang: 'Italiano', value: 'it' },
            { lang: 'עברית', value: 'he' },
            { lang: 'Latina', value: 'la' },
            { lang: 'Lietuvių', value: 'lt' },
            { lang: 'Magyar', value: 'hu' },
            { lang: 'Bahasa Melayu', value: 'ms' },
            { lang: 'Bahaso Minangkabau', value: 'min' },
            { lang: 'Nederlands', value: 'nl' },
            { lang: '日本語', value: 'ja' },
            { lang: 'Norsk (Bokmål)', value: 'no' },
            { lang: 'Norsk (Nynorsk)', value: 'nn' },
            { lang: 'Нохчийн', value: 'ce' },
            { lang: 'Oʻzbekcha / Ўзбекча', value: 'uz' },
            { lang: 'Polski', value: 'pl' },
            { lang: 'Português', value: 'pt' },
            { lang: 'Қазақша / Qazaqşa / قازاقشا', value: 'kk' },
            { lang: 'Română', value: 'ro' },
            { lang: 'Русский', value: 'ru' },
            { lang: 'Simple English', value: 'simple' },
            { lang: 'Sinugboanong Binisaya', value: 'ceb' },
            { lang: 'Slovenčina', value: 'sk' },
            { lang: 'Slovenščina', value: 'sl' },
            { lang: 'Српски / Srpski', value: 'sr' },
            { lang: 'Srpskohrvatski / Српскохрватски', value: 'sh' },
            { lang: 'Suomi', value: 'fi' },
            { lang: 'Svenska', value: 'sv' },
            { lang: 'Türkçe', value: 'tr' },
            { lang: 'Українська', value: 'uk' },
            { lang: 'Tiếng Việt', value: 'vi' },
            { lang: 'Volapük', value: 'vo' },
            { lang: 'Winaray', value: 'war' },
            { lang: '中文', value: 'zh' }
        ];
        this.languageSelected$ = this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) { return _this.ngFireService.loadDocument('users', user.uid); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return user.language || 'en'; }));
    }
    LanguageService.prototype.setLanguage = function (value) {
        var _this = this;
        var user = this.angularFireAuth.auth.currentUser;
        this.ngFireService.update('users', user.uid, { language: value })
            .then(function (_) { return _this.router.navigate(['app', 'search']); });
    };
    LanguageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["NgFireService"]])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/app/language/tool-bar/tool-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/language/tool-bar/tool-bar.component.ts ***!
  \*********************************************************/
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

var ToolBarComponent = /** @class */ (function () {
    function ToolBarComponent() {
    }
    ToolBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tool-bar',
            template: "\n        <mat-toolbar class=\"mat-elevation-z4\">\n            <button color=\"primary\" mat-icon-button>\n                <mat-icon routerLink=\"/app/search\">arrow_back</mat-icon>\n            </button>\n        </mat-toolbar>\n    ",
            styles: ["\n        mat-toolbar {\n            background: #ECEFF1;\n            display: flex;\n            justify-content: space-between;\n            z-index: 1;\n            position: absolute;\n        }\n    "]
        })
    ], ToolBarComponent);
    return ToolBarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=language-language-module.js.map