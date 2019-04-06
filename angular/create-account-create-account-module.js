(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-account-create-account-module"],{

/***/ "./src/app/create-account/create-account.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-account/create-account.component.ts ***!
  \************************************************************/
/*! exports provided: CreateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountComponent", function() { return CreateAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _create_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-account.service */ "./src/app/create-account/create-account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateAccountComponent = /** @class */ (function () {
    function CreateAccountComponent(createAccountService) {
        this.createAccountService = createAccountService;
    }
    CreateAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-account',
            template: "\n        <app-tool-bar></app-tool-bar>\n        <app-form-card>\n            <app-form\n                [error]=\"this.createAccountService.error$ | async\"\n                [pending]=\"this.createAccountService.pending$ | async\"\n                (createAccount)=\"this.createAccountService.createAccount($event)\"\n                (clearError)=\"this.createAccountService.error$.next('')\"\n            ></app-form>\n        </app-form-card>\n    ",
            providers: [_create_account_service__WEBPACK_IMPORTED_MODULE_1__["CreateAccountService"]]
        }),
        __metadata("design:paramtypes", [_create_account_service__WEBPACK_IMPORTED_MODULE_1__["CreateAccountService"]])
    ], CreateAccountComponent);
    return CreateAccountComponent;
}());



/***/ }),

/***/ "./src/app/create-account/create-account.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/create-account/create-account.module.ts ***!
  \*********************************************************/
/*! exports provided: CreateAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountModule", function() { return CreateAccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-account.component */ "./src/app/create-account/create-account.component.ts");
/* harmony import */ var _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tool-bar/tool-bar.component */ "./src/app/create-account/tool-bar/tool-bar.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/form.component */ "./src/app/create-account/form/form.component.ts");
/* harmony import */ var _form_card_form_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-card/form-card.component */ "./src/app/create-account/form-card/form-card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CreateAccountModule = /** @class */ (function () {
    function CreateAccountModule() {
    }
    CreateAccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _create_account_component__WEBPACK_IMPORTED_MODULE_5__["CreateAccountComponent"] },
                ])
            ],
            declarations: [
                _create_account_component__WEBPACK_IMPORTED_MODULE_5__["CreateAccountComponent"],
                _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_6__["ToolBarComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"],
                _form_card_form_card_component__WEBPACK_IMPORTED_MODULE_8__["FormCardComponent"]
            ]
        })
    ], CreateAccountModule);
    return CreateAccountModule;
}());



/***/ }),

/***/ "./src/app/create-account/create-account.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/create-account/create-account.service.ts ***!
  \**********************************************************/
/*! exports provided: CreateAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountService", function() { return CreateAccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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





var CreateAccountService = /** @class */ (function () {
    function CreateAccountService(router, angularFireAuth, ngFireService) {
        this.router = router;
        this.angularFireAuth = angularFireAuth;
        this.ngFireService = ngFireService;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.pending$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    CreateAccountService.prototype.clearError = function () {
        this.error$.next('');
    };
    CreateAccountService.prototype.createAccount = function (form) {
        var _this = this;
        this.pending$.next(true);
        this.angularFireAuth.auth.createUserWithEmailAndPassword(form.value.email, form.value.password)
            .then(function () {
            _this.angularFireAuth.auth.signInWithEmailAndPassword(form.value.email, form.value.password)
                .then(function (userData) {
                _this.ngFireService.set('users', userData.user.uid, {
                    email: userData.user.email,
                    language: 'en',
                    uid: userData.user.uid
                })
                    .catch(function (error) {
                    _this.pending$.next(false);
                    _this.error$.next(error);
                });
            });
        })
            .catch(function (error) {
            _this.pending$.next(false);
            _this.error$.next(error);
        });
    };
    CreateAccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["NgFireService"]])
    ], CreateAccountService);
    return CreateAccountService;
}());



/***/ }),

/***/ "./src/app/create-account/form-card/form-card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/create-account/form-card/form-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCardComponent", function() { return FormCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormCardComponent = /** @class */ (function () {
    function FormCardComponent() {
    }
    FormCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-card',
            template: "\n        <mat-card>\n            <mat-card-title>Create Account</mat-card-title>\n            <ng-content></ng-content>\n        </mat-card>\n    ",
            styles: ["\n        :host {\n            position: fixed;\n            width: 100%;\n            top: 64px;\n            bottom: 0px;\n            left: 0px;\n            right: 0px;\n            background: #eee;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            place-items: center;\n        }\n        mat-card {\n            width: 280px;\n            margin: 0px 8px 64px;\n        }\n    "]
        })
    ], FormCardComponent);
    return FormCardComponent;
}());



/***/ }),

/***/ "./src/app/create-account/form/form.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/create-account/form/form.component.ts ***!
  \*******************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular


var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.createAccount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FormComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormComponent.prototype, "pending", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "createAccount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "clearError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], FormComponent.prototype, "form", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: "\n        <form #form=\"ngForm\" (ngSubmit)=\"this.createAccount.emit(this.form)\">\n            <mat-form-field>\n                <input\n                    [(ngModel)]=\"this.email\"\n                    [disabled]=\"this.pending\"\n                    (ngModelChange)=\"this.clearError.emit()\"\n                    type=\"email\"\n                    name=\"email\"\n                    placeholder=\"Email\"\n                    autocorrect=\"off\"\n                    autocomplete=\"off\"\n                    matInput\n                    required\n                />\n            </mat-form-field>\n            <mat-form-field>\n                <input\n                    [(ngModel)]=\"this.password\"\n                    [disabled]=\"this.pending\"\n                    (ngModelChange)=\"this.clearError.emit()\"\n                    type=\"password\"\n                    name=\"password\"\n                    placeholder=\"Password\"\n                    autocorrect=\"off\"\n                    autocomplete=\"off\"\n                    matInput\n                    required\n                />\n            </mat-form-field>\n            <p class=\"mat-caption\">{{ this.error }}</p>\n            <button\n                [disabled]=\"this.form.invalid || this.pending\"\n                id=\"create-account-btn\"\n                type=\"submit\"\n                color=\"primary\"\n                mat-raised-button\n            >\n                Create Account\n            </button>\n        </form>\n    ",
            styles: ["\n        app-form-card {\n            width: 280px;\n            margin: 0px 8px 64px;\n        }\n        form {\n            text-align: right;\n        }\n        p {\n            text-align: center;\n            color: #F44336;\n        }\n        mat-form-field,\n        #create-account-btn {\n            width: 100%;\n            margin-top: 16px;\n        }\n    "],
        })
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/create-account/tool-bar/tool-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/create-account/tool-bar/tool-bar.component.ts ***!
  \***************************************************************/
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
// Angular

var ToolBarComponent = /** @class */ (function () {
    function ToolBarComponent() {
    }
    ToolBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tool-bar',
            template: "\n        <mat-toolbar style=\"height: 64px\" color=\"primary\">\n            <span>Click Wik</span>\n            <span id=\"spacer\"></span>\n            <button routerLink=\"/login\" mat-button>Login</button>\n        </mat-toolbar>\n    ",
            styles: ["\n        #spacer {\n            display: flex;\n            flex: 1;\n        }\n    "]
        })
    ], ToolBarComponent);
    return ToolBarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=create-account-create-account-module.js.map