(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/core.service */ "./src/app/core/core.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/account.service */ "./src/app/account/services/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = /** @class */ (function () {
    function AccountComponent(coreService, accountService) {
        this.coreService = coreService;
        this.accountService = accountService;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.coreService.toolbarTitle$.next('Account');
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: "\n        <app-form-card>\n            <app-email-form\n                [pending]=\"this.accountService.pending$ | async\"\n                (saveEmail)=\"this.accountService.saveEmail($event)\"\n                (clearError)=\"this.accountService.error$.next('')\"\n            ></app-email-form>\n            <app-password-form\n                [pending]=\"this.accountService.pending$ | async\"\n                (savePassword)=\"this.accountService.savePassword($event)\"\n                (clearError)=\"this.accountService.error$.next('')\"\n            ></app-password-form>\n            <p class=\"mat-caption error\">{{ this.accountService.error$ | async }}</p>\n            <button (click)=\"this.accountService.deleteAccount()\" color=\"warn\" mat-button>\n                Delete Account\n            </button>\n        </app-form-card>\n    ",
            styles: ["\n        button {\n            width: 100%;\n            margin-top: 16px;\n        }\n        .error {\n            color: #f44336;\n            padding: 8px;\n            text-align: center;\n        }\n    "],
            providers: [_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]]
        }),
        __metadata("design:paramtypes", [_core_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"],
            _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-form/email-form.component */ "./src/app/account/email-form/email-form.component.ts");
/* harmony import */ var _password_form_password_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password-form/password-form.component */ "./src/app/account/password-form/password-form.component.ts");
/* harmony import */ var _form_card_form_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-card/form-card.component */ "./src/app/account/form-card/form-card.component.ts");
/* harmony import */ var _delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delete-account/delete-account.component */ "./src/app/account/delete-account/delete-account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules





// Module Components





var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"] },
                ])
            ],
            declarations: [
                _account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"],
                _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_6__["EmailFormComponent"],
                _password_form_password_form_component__WEBPACK_IMPORTED_MODULE_7__["PasswordFormComponent"],
                _form_card_form_card_component__WEBPACK_IMPORTED_MODULE_8__["FormCardComponent"],
                _delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_9__["DeleteAccountComponent"]
            ],
            entryComponents: [_delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_9__["DeleteAccountComponent"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/delete-account/delete-account.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/account/delete-account/delete-account.component.ts ***!
  \********************************************************************/
/*! exports provided: DeleteAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAccountComponent", function() { return DeleteAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular

var DeleteAccountComponent = /** @class */ (function () {
    function DeleteAccountComponent() {
    }
    DeleteAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-account',
            template: "\n        <div mat-dialog-title>Confirm Delete</div>\n        <mat-dialog-content>Are you sure you want to delete your account?</mat-dialog-content>\n        <mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <button [mat-dialog-close] color=\"warn\" mat-button>Cancel</button>\n            <button [mat-dialog-close]=\"true\" color=\"primary\" mat-button>Confirm</button>\n        </mat-dialog-actions>\n    ",
            styles: ["\n        mat-dialog-actions {\n            display: flex;\n            justify-content: space-between;\n            place-content: center;\n        }\n    "]
        })
    ], DeleteAccountComponent);
    return DeleteAccountComponent;
}());



/***/ }),

/***/ "./src/app/account/email-form/email-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/account/email-form/email-form.component.ts ***!
  \************************************************************/
/*! exports provided: EmailFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailFormComponent", function() { return EmailFormComponent; });
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


var EmailFormComponent = /** @class */ (function () {
    function EmailFormComponent() {
        this.saveEmail = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EmailFormComponent.prototype, "pending", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmailFormComponent.prototype, "saveEmail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmailFormComponent.prototype, "clearError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], EmailFormComponent.prototype, "form", void 0);
    EmailFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-form',
            template: "\n        <form #form=\"ngForm\" (ngSubmit)=\"this.saveEmail.emit(this.form)\">\n            <mat-form-field>\n                <input\n                    [(ngModel)]=\"this.email\"\n                    [disabled]=\"this.pending\"\n                    (ngModelChange)=\"this.clearError.emit()\"\n                    type=\"email\"\n                    name=\"email\"\n                    placeholder=\"Email\"\n                    autocorrect=\"off\"\n                    autocomplete=\"off\"\n                    matInput\n                    required\n                />\n            </mat-form-field>\n            <button\n                [disabled]=\"this.form.invalid || this.pending\"\n                id=\"save-btn\"\n                type=\"submit\"\n                color=\"primary\"\n                mat-icon-button\n            >\n                <mat-icon>save</mat-icon>\n            </button>\n        </form>\n    ",
            styles: ["\n        form {\n            display: flex;\n            flex-direction: row;\n        }\n        p {\n            text-align: center;\n            color: #F44336;\n        }\n        mat-form-field {\n            width: 100%;\n        }\n    "],
        })
    ], EmailFormComponent);
    return EmailFormComponent;
}());



/***/ }),

/***/ "./src/app/account/form-card/form-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/account/form-card/form-card.component.ts ***!
  \**********************************************************/
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
            template: "\n        <mat-card>\n            <mat-card-title>Update Account</mat-card-title>\n            <ng-content></ng-content>\n        </mat-card>\n    ",
            styles: ["\n        :host {\n            position: fixed;\n            width: 100%;\n            top: 64px;\n            bottom: 0px;\n            left: 0px;\n            right: 0px;\n            background: #eee;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            place-items: center;\n        }\n        mat-card {\n            width: 280px;\n            margin: 0px 8px 64px;\n        }\n    "]
        })
    ], FormCardComponent);
    return FormCardComponent;
}());



/***/ }),

/***/ "./src/app/account/password-form/password-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/account/password-form/password-form.component.ts ***!
  \******************************************************************/
/*! exports provided: PasswordFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordFormComponent", function() { return PasswordFormComponent; });
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


var PasswordFormComponent = /** @class */ (function () {
    function PasswordFormComponent() {
        this.savePassword = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PasswordFormComponent.prototype, "pending", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PasswordFormComponent.prototype, "savePassword", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PasswordFormComponent.prototype, "clearError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], PasswordFormComponent.prototype, "form", void 0);
    PasswordFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-form',
            template: "\n        <form #form=\"ngForm\" (ngSubmit)=\"this.savePassword.emit(this.form)\">\n            <mat-form-field>\n                <input\n                    [(ngModel)]=\"this.password\"\n                    [disabled]=\"this.pending\"\n                    (ngModelChange)=\"this.clearError.emit()\"\n                    type=\"text\"\n                    name=\"password\"\n                    placeholder=\"Password\"\n                    autocorrect=\"off\"\n                    autocomplete=\"off\"\n                    matInput\n                    required\n                />\n            </mat-form-field>\n            <button\n                [disabled]=\"this.form.invalid || this.pending\"\n                id=\"password-btn\"\n                type=\"submit\"\n                color=\"primary\"\n                mat-icon-button\n            >\n                <mat-icon>save</mat-icon>\n            </button>\n        </form>\n    ",
            styles: ["\n        form {\n            display: flex;\n            flex-direction: row;\n        }\n        p {\n            text-align: center;\n            color: #F44336;\n        }\n        mat-form-field {\n            width: 100%;\n        }\n    "],
        })
    ], PasswordFormComponent);
    return PasswordFormComponent;
}());



/***/ }),

/***/ "./src/app/account/services/account.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/account/services/account.service.ts ***!
  \*****************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../delete-account/delete-account.component */ "./src/app/account/delete-account/delete-account.component.ts");
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


// Shared

// Module Components

var AccountService = /** @class */ (function () {
    function AccountService(matDialog, angularFireAuth, ngFireService) {
        this.matDialog = matDialog;
        this.angularFireAuth = angularFireAuth;
        this.ngFireService = ngFireService;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pending$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AccountService.prototype.saveEmail = function (form) {
        var _this = this;
        this.pending$.next(true);
        this.angularFireAuth.auth.currentUser.updateEmail(form.value.email)
            .then(function (_) {
            _this.pending$.next(false);
            form.resetForm();
        })
            .catch(function (error) {
            _this.pending$.next(false);
            _this.error$.next(error);
        });
    };
    AccountService.prototype.savePassword = function (form) {
        var _this = this;
        this.pending$.next(true);
        this.angularFireAuth.auth.currentUser.updatePassword(form.value.password)
            .then(function (_) {
            _this.pending$.next(false);
            form.resetForm();
        })
            .catch(function (error) {
            _this.pending$.next(false);
            _this.error$.next(error);
        });
    };
    AccountService.prototype.deleteAccount = function () {
        var _this = this;
        this.matDialog.open(_delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_5__["DeleteAccountComponent"], { width: '280px' })
            .afterClosed()
            .subscribe(function (confirm) {
            if (confirm) {
                _this.pending$.next(true);
                _this.ngFireService.delete('users', _this.angularFireAuth.auth.currentUser.uid)
                    .then(function (_) {
                    _this.pending$.next(false);
                    _this.angularFireAuth.auth.signOut();
                })
                    .catch(function (error) {
                    _this.pending$.next(false);
                    _this.error$.next(error);
                });
            }
        });
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["NgFireService"]])
    ], AccountService);
    return AccountService;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map