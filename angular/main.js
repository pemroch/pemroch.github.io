(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../account/account.module": [
		"./src/app/account/account.module.ts",
		"account-account-module~article-article-module~cards-cards-module~core-core-module~create-account-cre~994bbe14",
		"common",
		"account-account-module"
	],
	"../article/article.module": [
		"./src/app/article/article.module.ts",
		"account-account-module~article-article-module~cards-cards-module~core-core-module~create-account-cre~994bbe14",
		"common",
		"article-article-module"
	],
	"../cards/cards.module": [
		"./src/app/cards/cards.module.ts",
		"account-account-module~article-article-module~cards-cards-module~core-core-module~create-account-cre~994bbe14",
		"common",
		"cards-cards-module"
	],
	"../folders/folders.module": [
		"./src/app/folders/folders.module.ts",
		"account-account-module~article-article-module~cards-cards-module~core-core-module~create-account-cre~994bbe14",
		"common",
		"folders-folders-module"
	],
	"../language/language.module": [
		"./src/app/language/language.module.ts",
		"account-account-module~article-article-module~cards-cards-module~core-core-module~create-account-cre~994bbe14",
		"common",
		"language-language-module"
	],
	"../search/search.module": [
		"./src/app/search/search.module.ts",
		"account-account-module~article-article-module~cards-cards-module~core-core-module~create-account-cre~994bbe14",
		"common",
		"search-search-module"
	],
	"./core/core.module": [
		"./src/app/core/core.module.ts",
		"account-account-module~article-article-module~cards-cards-module~core-core-module~create-account-cre~994bbe14",
		"common",
		"core-core-module"
	],
	"./create-account/create-account.module": [
		"./src/app/create-account/create-account.module.ts",
		"account-account-module~article-article-module~cards-cards-module~core-core-module~create-account-cre~994bbe14",
		"common",
		"create-account-create-account-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"account-account-module~article-article-module~cards-cards-module~core-core-module~create-account-cre~994bbe14",
		"common",
		"login-login-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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

var AppComponent = /** @class */ (function () {
    function AppComponent(router, angularFireAuth) {
        this.router = router;
        this.angularFireAuth = angularFireAuth;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user) {
                _this.router.navigate(['/app/search']);
            }
            else {
                _this.router.navigate(['/login']);
            }
        })).subscribe();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n        <router-outlet></router-outlet>\n    "
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp({
                    apiKey: 'AIzaSyAMBiLz5d4cV1nhq6IIs8JJSpksTetqCOk',
                    authDomain: 'clickwik-6f562.firebaseapp.com',
                    databaseURL: 'https://clickwik-6f562.firebaseio.com',
                    projectId: 'clickwik-6f562',
                    storageBucket: 'clickwik-6f562.appspot.com',
                    messagingSenderId: '934548411316'
                }),
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'app', pathMatch: 'full' },
                    { path: 'login', loadChildren: './login/login.module#LoginModule' },
                    { path: 'create-account', loadChildren: './create-account/create-account.module#CreateAccountModule' },
                    { path: 'app', loadChildren: './core/core.module#CoreModule' },
                    { path: '**', redirectTo: 'app', pathMatch: 'full' }
                ], { useHash: true }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: NgFireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ng_fire_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-fire.service */ "./src/app/shared/services/ng-fire.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgFireService", function() { return _ng_fire_service__WEBPACK_IMPORTED_MODULE_0__["NgFireService"]; });




/***/ }),

/***/ "./src/app/shared/services/ng-fire.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/ng-fire.service.ts ***!
  \****************************************************/
/*! exports provided: NgFireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFireService", function() { return NgFireService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
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


var NgFireService = /** @class */ (function () {
    function NgFireService(angularFirestore) {
        this.angularFirestore = angularFirestore;
    }
    NgFireService.prototype.loadDocument = function (collection, document) {
        return this.angularFirestore
            .collection(collection)
            .doc(document)
            .valueChanges();
    };
    NgFireService.prototype.loadCollection = function (collection, orderBy, sort) {
        return orderBy ?
            this.angularFirestore
                .collection(collection, function (ref) { return ref
                .orderBy(orderBy, sort); })
                .valueChanges() :
            this.angularFirestore
                .collection(collection, function (ref) { return ref; })
                .valueChanges();
    };
    NgFireService.prototype.loadCollectionLimit = function (collection, limit, orderBy, sort) {
        return orderBy ?
            this.angularFirestore
                .collection(collection, function (ref) { return ref
                .orderBy(orderBy, sort).limit(limit); })
                .valueChanges() :
            this.angularFirestore
                .collection(collection, function (ref) { return ref.limit(limit); })
                .valueChanges();
    };
    NgFireService.prototype.load1Condition = function (collection, field1, operator1, value1, orderBy, sort) {
        return orderBy ?
            this.angularFirestore
                .collection(collection, function (ref) { return ref
                .where(field1, operator1, value1)
                .orderBy(orderBy, sort); }).valueChanges() :
            this.angularFirestore
                .collection(collection, function (ref) { return ref
                .where(field1, operator1, value1); }).valueChanges();
    };
    NgFireService.prototype.load2Conditions = function (collection, field1, operator1, value1, field2, operator2, value2, orderBy, sort) {
        return orderBy ?
            this.angularFirestore
                .collection(collection, function (ref) { return ref
                .where(field1, operator1, value1)
                .where(field2, operator2, value2)
                .orderBy(orderBy, sort); }).valueChanges() :
            this.angularFirestore
                .collection(collection, function (ref) { return ref
                .where(field1, operator1, value1)
                .where(field2, operator2, value2); }).valueChanges();
    };
    NgFireService.prototype.load3Conditions = function (collection, field1, operator1, value1, field2, operator2, value2, field3, operator3, value3, orderBy, sort) {
        return orderBy ?
            this.angularFirestore
                .collection(collection, function (ref) { return ref
                .where(field1, operator1, value1)
                .where(field2, operator2, value2)
                .where(field3, operator3, value3)
                .orderBy(orderBy, sort); }).valueChanges() :
            this.angularFirestore
                .collection(collection, function (ref) { return ref
                .where(field1, operator1, value1)
                .where(field2, operator2, value2)
                .where(field3, operator3, value3); }).valueChanges();
    };
    NgFireService.prototype.load4Conditions = function (collection, field1, operator1, value1, field2, operator2, value2, field3, operator3, value3, field4, operator4, value4, orderBy, sort) {
        return orderBy ?
            this.angularFirestore
                .collection(collection, function (ref) { return ref
                .where(field1, operator1, value1)
                .where(field2, operator2, value2)
                .where(field3, operator3, value3)
                .where(field4, operator4, value4)
                .orderBy(orderBy, sort); }).valueChanges() :
            this.angularFirestore
                .collection(collection, function (ref) { return ref
                .where(field1, operator1, value1)
                .where(field2, operator2, value2)
                .where(field3, operator3, value3)
                .where(field4, operator4, value4); }).valueChanges();
    };
    NgFireService.prototype.load6Conditions = function (collection, field1, operator1, value1, field2, operator2, value2, field3, operator3, value3, field4, operator4, value4, field5, operator5, value5, field6, operator6, value6, orderBy, sort) {
        return orderBy ?
            this.angularFirestore
                .collection(collection, function (ref) { return ref
                .where(field1, operator1, value1)
                .where(field2, operator2, value2)
                .where(field3, operator3, value3)
                .where(field4, operator4, value4)
                .where(field5, operator5, value5)
                .where(field6, operator6, value6)
                .orderBy(orderBy, sort); }).valueChanges() :
            this.angularFirestore
                .collection(collection, function (ref) { return ref
                .where(field1, operator1, value1)
                .where(field2, operator2, value2)
                .where(field3, operator3, value3)
                .where(field4, operator4, value4)
                .where(field5, operator5, value5)
                .where(field6, operator6, value6); }).valueChanges();
    };
    NgFireService.prototype.add = function (collection, obj) {
        var ref = this.angularFirestore.firestore.collection(collection).doc();
        obj.id = ref.id;
        return this.angularFirestore.collection(collection).doc(obj.id).set(obj);
    };
    NgFireService.prototype.addBatch = function (collection, arr) {
        // Create variable to hold batch data.
        var batch = this.angularFirestore.firestore.batch();
        // Loop through array and set array data to batch.
        for (var i = 0; i < arr.length; i++) {
            var ref = this.angularFirestore.firestore.collection(collection).doc();
            arr[i].id = ref.id;
            batch.set(ref, arr[i]);
        }
        // Commit batch to database.
        return batch.commit();
    };
    NgFireService.prototype.set = function (collection, document, obj) {
        return this.angularFirestore.collection(collection).doc(document).set(obj);
    };
    NgFireService.prototype.setBatchMerge = function (arr, collection, propDocIdRef) {
        // Create variable to hold batch data.
        var batch = this.angularFirestore.firestore.batch();
        // Loop through array and set array data to batch.
        for (var i = 0; i < arr.length; i++) {
            var ref = this.angularFirestore.firestore.collection(collection).doc(arr[i][propDocIdRef]);
            batch.set(ref, arr[i], { merge: true });
        }
        // Commit batch to database.
        return batch.commit();
    };
    NgFireService.prototype.update = function (collection, document, obj) {
        return this.angularFirestore.collection(collection).doc(document).update(obj);
    };
    NgFireService.prototype.delete = function (collection, docId) {
        return this.angularFirestore.collection(collection).doc(docId).delete();
    };
    NgFireService.prototype.deleteBatch = function (arr, collection, propDocIdRef) {
        // Create variable to hold batch data.
        var batch = this.angularFirestore.firestore.batch();
        // Loop through array and set array data to batch.
        for (var i = 0; i < arr.length; i++) {
            var ref = this.angularFirestore.firestore.collection(collection).doc(arr[i][propDocIdRef]);
            batch.delete(ref);
        }
        // Commit batch to database.
        return batch.commit();
    };
    NgFireService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], NgFireService);
    return NgFireService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules


// Shared Services

var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [_shared_services__WEBPACK_IMPORTED_MODULE_2__["NgFireService"]]
        })
    ], SharedModule);
    return SharedModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pedrorocha/Development/ClickWik/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map