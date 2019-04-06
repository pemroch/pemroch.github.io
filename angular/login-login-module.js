(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/confirmation-snackbar/confirmation-snackbar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/login/confirmation-snackbar/confirmation-snackbar.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConfirmationSnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationSnackbarComponent", function() { return ConfirmationSnackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular

var ConfirmationSnackbarComponent = /** @class */ (function () {
    function ConfirmationSnackbarComponent() {
    }
    ConfirmationSnackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-snackbar',
            template: "\n        <p>Password reset email sent successfully</p>\n    ",
            styles: ["\n        p {\n            text-align: center;\n        }\n    "]
        })
    ], ConfirmationSnackbarComponent);
    return ConfirmationSnackbarComponent;
}());



/***/ }),

/***/ "./src/app/login/form-card/form-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/login/form-card/form-card.component.ts ***!
  \********************************************************/
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
            template: "\n        <mat-card>\n            <mat-card-title>Login</mat-card-title>\n            <ng-content></ng-content>\n        </mat-card>\n    ",
            styles: ["\n        :host {\n            position: fixed;\n            width: 100%;\n            top: 64px;\n            bottom: 0px;\n            left: 0px;\n            right: 0px;\n            background: #eee;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            place-items: center;\n        }\n        mat-card {\n            width: 280px;\n            margin: 0px 8px 64px;\n        }\n    "]
        })
    ], FormCardComponent);
    return FormCardComponent;
}());



/***/ }),

/***/ "./src/app/login/login-form/login-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
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


var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent() {
        this.login = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resetPassword = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoginFormComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoginFormComponent.prototype, "pending", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "login", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "clearError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "resetPassword", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], LoginFormComponent.prototype, "form", void 0);
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: "\n        <form #form=\"ngForm\" (ngSubmit)=\"this.login.emit(this.form)\">\n            <mat-form-field>\n                <mat-icon matPrefix>email</mat-icon>\n                <input\n                    [(ngModel)]=\"this.email\"\n                    [disabled]=\"this.pending\"\n                    (ngModelChange)=\"this.clearError.emit()\"\n                    type=\"email\"\n                    name=\"email\"\n                    placeholder=\"Email\"\n                    autocorrect=\"off\"\n                    autocomplete=\"off\"\n                    matInput\n                    required\n                />\n            </mat-form-field>\n            <mat-form-field>\n                <mat-icon matPrefix>vpn_key</mat-icon>\n                <input\n                    [(ngModel)]=\"this.password\"\n                    [disabled]=\"this.pending\"\n                    (ngModelChange)=\"this.clearError.emit()\"\n                    type=\"password\"\n                    name=\"password\"\n                    placeholder=\"Password\"\n                    autocorrect=\"off\"\n                    autocomplete=\"off\"\n                    matInput\n                    required\n                />\n            </mat-form-field>\n            <button\n                [disabled]=\"this.pending\"\n                (click)=\"this.resetPassword.emit()\"\n                type=\"button\"\n                mat-button\n            >\n                Reset Password\n            </button>\n            <p class=\"mat-caption\">{{ this.error }}</p>\n            <button\n                [disabled]=\"this.form.invalid || this.pending\"\n                id=\"login-btn\"\n                type=\"submit\"\n                color=\"primary\"\n                mat-raised-button\n            >\n                Login\n            </button>\n        </form>\n    ",
            styles: ["\n        app-form-card {\n            width: 280px;\n            margin: 0px 8px 64px;\n        }\n        mat-icon {\n            margin-right: 16px;\n            color: rgba(0, 0, 0, 0.54);\n        }\n        form {\n            text-align: right;\n        }\n        p {\n            text-align: center;\n            color: #F44336;\n        }\n        mat-form-field,\n        #login-btn {\n            width: 100%;\n            margin-top: 16px;\n        }\n    "],
        })
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/login.service */ "./src/app/login/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: "\n        <app-tool-bar></app-tool-bar>\n        <app-form-card>\n            <app-login-form\n                [error]=\"this.loginService.error$ | async\"\n                [pending]=\"this.loginService.pending$ | async\"\n                (login)=\"this.loginService.login($event)\"\n                (clearError)=\"this.loginService.error$.next('')\"\n                (resetPassword)=\"this.loginService.resetPassword()\"\n            ></app-login-form>\n        </app-form-card>\n    ",
            providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tool-bar/tool-bar.component */ "./src/app/login/tool-bar/tool-bar.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login/login-form/login-form.component.ts");
/* harmony import */ var _form_card_form_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-card/form-card.component */ "./src/app/login/form-card/form-card.component.ts");
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-password.component */ "./src/app/login/reset-password.component.ts");
/* harmony import */ var _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reset-password-form/reset-password-form.component */ "./src/app/login/reset-password-form/reset-password-form.component.ts");
/* harmony import */ var _confirmation_snackbar_confirmation_snackbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./confirmation-snackbar/confirmation-snackbar.component */ "./src/app/login/confirmation-snackbar/confirmation-snackbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules





// Module Components







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                ])
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_6__["ToolBarComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__["LoginFormComponent"],
                _form_card_form_card_component__WEBPACK_IMPORTED_MODULE_8__["FormCardComponent"],
                _reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"],
                _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordFormComponent"],
                _confirmation_snackbar_confirmation_snackbar_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationSnackbarComponent"]
            ],
            entryComponents: [_confirmation_snackbar_confirmation_snackbar_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationSnackbarComponent"], _reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/reset-password-form/reset-password-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/login/reset-password-form/reset-password-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: ResetPasswordFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordFormComponent", function() { return ResetPasswordFormComponent; });
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


var ResetPasswordFormComponent = /** @class */ (function () {
    function ResetPasswordFormComponent() {
        this.emailChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sendResetPasswordEmail = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closResetPasswordDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ResetPasswordFormComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ResetPasswordFormComponent.prototype, "pending", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ResetPasswordFormComponent.prototype, "emailChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ResetPasswordFormComponent.prototype, "sendResetPasswordEmail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ResetPasswordFormComponent.prototype, "closResetPasswordDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ResetPasswordFormComponent.prototype, "form", void 0);
    ResetPasswordFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password-form',
            template: "\n        <form #form=\"ngForm\" (ngSubmit)=\"this.sendResetPasswordEmail.emit(this.form)\">\n            <mat-form-field>\n                <input\n                    [(ngModel)]=\"this.email\"\n                    [disabled]=\"this.pending\"\n                    (ngModelChange)=\"this.emailChange.emit$\"\n                    type=\"email\"\n                    name=\"email\"\n                    placeholder=\"Email\"\n                    autocorrect=\"off\"\n                    autocomplete=\"off\"\n                    matInput\n                    required\n                >\n            </mat-form-field>\n            <p class=\"mat-caption\">{{ this.error }}</p>\n            <div id=\"btn-container\">\n                <button\n                    (click)=\"this.closResetPasswordDialog.emit()\"\n                    [disabled]=\"this.pending\"\n                    type=\"button\"\n                    mat-button\n                >\n                    Cancel\n                </button>\n                <button\n                    [disabled]=\"this.form.invalid || this.pending\"\n                    type=\"submit\"\n                    color=\"primary\"\n                    mat-button\n                >\n                    Send Reset Email\n                </button>\n            </div>\n        </form>\n    ",
            styles: ["\n        mat-form-field {\n            width: 100%;\n        }\n        p {\n            text-align: center;\n            color: #F44336;\n        }\n        .btn-container {\n            display: flex;\n            flex-direction: row-reverse;\n            margin-top: 16px;\n        }\n    "],
        })
    ], ResetPasswordFormComponent);
    return ResetPasswordFormComponent;
}());



/***/ }),

/***/ "./src/app/login/reset-password.component.ts":
/*!***************************************************!*\
  !*** ./src/app/login/reset-password.component.ts ***!
  \***************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reset_password_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/reset-password.service */ "./src/app/login/services/reset-password.service.ts");
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

// Component Service

var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(resetPasswordService) {
        this.resetPasswordService = resetPasswordService;
    }
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: "\n        <app-reset-password-form\n            [error]=\"this.resetPasswordService.error$ | async\"\n            [pending]=\"this.resetPasswordService.pending$ | async\"\n            (emailChange)=\"this.resetPasswordService.emailChange()\"\n            (sendResetPasswordEmail)=\"this.resetPasswordService.sendResetPasswordEmail($event)\"\n            (closResetPasswordDialog)=\"this.resetPasswordService.closResetPasswordDialog()\"\n        ></app-reset-password-form>\n    ",
            providers: [_services_reset_password_service__WEBPACK_IMPORTED_MODULE_1__["ResetPasswordService"]]
        }),
        __metadata("design:paramtypes", [_services_reset_password_service__WEBPACK_IMPORTED_MODULE_1__["ResetPasswordService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/services/login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/login/services/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reset-password.component */ "./src/app/login/reset-password.component.ts");
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


// rxjs


// Module Components

var LoginService = /** @class */ (function () {
    function LoginService(matDialog, angularFireAuth) {
        this.matDialog = matDialog;
        this.angularFireAuth = angularFireAuth;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pending$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LoginService.prototype.login = function (form) {
        var _this = this;
        this.pending$.next(true);
        this.angularFireAuth.auth.signInWithEmailAndPassword(form.value.email, form.value.password)
            .catch(function (error) {
            _this.pending$.next(false);
            _this.error$.next(error);
        });
    };
    LoginService.prototype.resetPassword = function () {
        this.matDialog.open(_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"], { width: '280px' });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/services/reset-password.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/login/services/reset-password.service.ts ***!
  \**********************************************************/
/*! exports provided: ResetPasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordService", function() { return ResetPasswordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _confirmation_snackbar_confirmation_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirmation-snackbar/confirmation-snackbar.component */ "./src/app/login/confirmation-snackbar/confirmation-snackbar.component.ts");
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



// rxjs

// Modules Components

var ResetPasswordService = /** @class */ (function () {
    function ResetPasswordService(angularFireAuth, matDialog, matSnackBar) {
        this.angularFireAuth = angularFireAuth;
        this.matDialog = matDialog;
        this.matSnackBar = matSnackBar;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.pending$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ResetPasswordService.prototype.closResetPasswordDialog = function () {
        this.matDialog.closeAll();
    };
    ResetPasswordService.prototype.sendResetPasswordEmail = function (form) {
        var _this = this;
        this.pending$.next(true);
        this.angularFireAuth.auth.sendPasswordResetEmail(form.value.email)
            .then(function (_) {
            _this.pending$.next(false);
            _this.matDialog.closeAll();
            _this.matSnackBar.openFromComponent(_confirmation_snackbar_confirmation_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationSnackbarComponent"], {
                duration: 4000,
            });
        })
            .catch(function (error) {
            _this.error$.next(error);
            _this.pending$.next(false);
        });
    };
    ResetPasswordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ResetPasswordService);
    return ResetPasswordService;
}());



/***/ }),

/***/ "./src/app/login/tool-bar/tool-bar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login/tool-bar/tool-bar.component.ts ***!
  \******************************************************/
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
            template: "\n        <mat-toolbar style=\"height: 64px\" color=\"primary\">\n            <span>Click Wik</span>\n            <span id=\"spacer\"></span>\n            <button routerLink=\"/create-account\" mat-button>Create Account</button>\n        </mat-toolbar>\n    ",
            styles: ["\n        #spacer {\n            display: flex;\n            flex: 1;\n        }\n    "]
        })
    ], ToolBarComponent);
    return ToolBarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map