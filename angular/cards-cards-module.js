(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cards-cards-module"],{

/***/ "./src/app/cards/cards-list/cards-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cards/cards-list/cards-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CardsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsListComponent", function() { return CardsListComponent; });
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

var CardsListComponent = /** @class */ (function () {
    function CardsListComponent() {
        this.previous = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteCard = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CardsListComponent.prototype, "cards", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CardsListComponent.prototype, "activeIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardsListComponent.prototype, "previous", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardsListComponent.prototype, "next", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardsListComponent.prototype, "deleteCard", void 0);
    CardsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards-list',
            template: "\n        <ng-container *ngFor=\"let card of this.cards; let i = index\">\n            <mat-card *ngIf=\"this.activeIndex === i\">\n                <mat-card-title>\n                    <span>{{ card.header }}</span>\n                    <button (click)=\"this.deleteCard.emit({ card: card, cards: this.cards})\" color=\"warn\" mat-icon-button>\n                        <mat-icon>delete</mat-icon>\n                    </button>\n                </mat-card-title>\n                <mat-card-content>{{ card.text }}</mat-card-content>\n                <mat-card-actions>\n                    <button (click)=\"this.previous.emit()\" [disabled]=\"i === 0\" color=\"warn\" mat-button>\n                        <mat-icon>arrow_back</mat-icon>\n                    </button>\n                    <button (click)=\"this.next.emit()\" [disabled]=\"i === this.cards.length - 1\" color=\"primary\" mat-button>\n                        <mat-icon>arrow_forward</mat-icon>\n                    </button>\n                </mat-card-actions>\n            </mat-card>\n        </ng-container>\n    ",
            styles: ["\n        mat-card {\n            position: absolute;\n            top: 136px;\n            left: 24px;\n            right: 24px;\n            bottom: 16px;\n        }\n        mat-card-title {\n            display: flex;\n            place-items: center;\n            justify-content: space-between;\n        }\n        mat-card-content {\n            border-top: 1px solid #ddd;\n            overflow: auto;\n            padding: 16px 0px 16px;\n            position: absolute;\n            bottom: 72px;\n            top: 68px;\n            left: 24px;\n            right: 24px;\n        }\n        mat-card-actions {\n            background: white;\n            width: 100%;\n            border-top: 1px solid #ddd;\n            position: absolute;\n            margin-bottom: 0px !important;\n            left: 16px;\n            right: 16px;\n            bottom: 0px;\n            padding: 8px 0px 8px !important;\n            display: flex;\n            justify-content: space-evenly;\n        }\n        mat-card-actions > button {\n            width: 49%;\n            margin: 0px;\n        }\n        active {\n            display: block;\n        }\n        inActive {\n            display: none;\n        }\n    "]
        })
    ], CardsListComponent);
    return CardsListComponent;
}());



/***/ }),

/***/ "./src/app/cards/cards.component.ts":
/*!******************************************!*\
  !*** ./src/app/cards/cards.component.ts ***!
  \******************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _core_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/core.service */ "./src/app/core/core.service.ts");
/* harmony import */ var _cards_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards.service */ "./src/app/cards/cards.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CardsComponent = /** @class */ (function () {
    function CardsComponent(activatedRoute, ngFireService, coreService, cardsService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.ngFireService = ngFireService;
        this.coreService = coreService;
        this.cardsService = cardsService;
        this.title$ = this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) { return _this.ngFireService.loadDocument('folders', params.folderId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (folder) { return folder.folderName; }));
        this.cards$ = this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) { return _this.ngFireService.load1Condition('cards', 'folder.id', '==', params.folderId); }));
    }
    CardsComponent.prototype.ngOnInit = function () {
        this.coreService.toolbarTitle$.next('Cards');
    };
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards',
            template: "\n        <app-tool-bar [cards]=\"this.cards$ | async\" [title]=\"this.title$ | async\"></app-tool-bar>\n        <app-cards-list\n            [cards]=\"this.cards$ | async\"\n            [activeIndex]=\"this.cardsService.activeIndex$ | async\"\n            (previous)=\"this.cardsService.previous()\"\n            (next)=\"this.cardsService.next()\"\n            (deleteCard)=\"this.cardsService.deleteCard($event)\"\n        ></app-cards-list>\n    ",
            providers: [_cards_service__WEBPACK_IMPORTED_MODULE_5__["CardsService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["NgFireService"],
            _core_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"],
            _cards_service__WEBPACK_IMPORTED_MODULE_5__["CardsService"]])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/cards/cards.module.ts":
/*!***************************************!*\
  !*** ./src/app/cards/cards.module.ts ***!
  \***************************************/
/*! exports provided: CardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsModule", function() { return CardsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cards.component */ "./src/app/cards/cards.component.ts");
/* harmony import */ var _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tool-bar/tool-bar.component */ "./src/app/cards/tool-bar/tool-bar.component.ts");
/* harmony import */ var _cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards-list/cards-list.component */ "./src/app/cards/cards-list/cards-list.component.ts");
/* harmony import */ var _delete_card_dialog_delete_card_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete-card-dialog/delete-card-dialog.component */ "./src/app/cards/delete-card-dialog/delete-card-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
    CardsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: ':folderId', component: _cards_component__WEBPACK_IMPORTED_MODULE_4__["CardsComponent"] }
                ])
            ],
            declarations: [
                _cards_component__WEBPACK_IMPORTED_MODULE_4__["CardsComponent"],
                _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_5__["ToolBarComponent"],
                _cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_6__["CardsListComponent"],
                _delete_card_dialog_delete_card_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteCardDialogComponent"]
            ],
            entryComponents: [_delete_card_dialog_delete_card_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteCardDialogComponent"]]
        })
    ], CardsModule);
    return CardsModule;
}());



/***/ }),

/***/ "./src/app/cards/cards.service.ts":
/*!****************************************!*\
  !*** ./src/app/cards/cards.service.ts ***!
  \****************************************/
/*! exports provided: CardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsService", function() { return CardsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _delete_card_dialog_delete_card_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete-card-dialog/delete-card-dialog.component */ "./src/app/cards/delete-card-dialog/delete-card-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CardsService = /** @class */ (function () {
    function CardsService(matDialog, ngFireService) {
        this.matDialog = matDialog;
        this.ngFireService = ngFireService;
        this.activeIndex$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
    }
    CardsService.prototype.previous = function () {
        this.activeIndex$.next(this.activeIndex$.getValue() - 1);
    };
    CardsService.prototype.next = function () {
        this.activeIndex$.next(this.activeIndex$.getValue() + 1);
    };
    CardsService.prototype.deleteCard = function (data) {
        var _this = this;
        this.matDialog.open(_delete_card_dialog_delete_card_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteCardDialogComponent"])
            .afterClosed()
            .subscribe(function (confirm) {
            if (confirm) {
                var batch_1 = Object(firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"])().batch();
                var folder_1 = {
                    cardsLength: data.card.folder.cardsLength - 1,
                    folderName: data.card.folder.folderName,
                    id: data.card.folder.id,
                    userUid: data.card.folder.userUid,
                };
                data.cards.forEach(function (card) {
                    if (card.id !== data.card.id) {
                        var cardRef = Object(firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"])().collection('cards').doc(card.id);
                        batch_1.update(cardRef, { folder: folder_1 });
                    }
                });
                _this.activeIndex$.next((_this.activeIndex$.getValue() === (data.cards.length - 1)) ? (data.cards.length - 2) : _this.activeIndex$.getValue());
                _this.ngFireService.update('folders', data.card.folder.id, { cardsLength: folder_1.cardsLength });
                _this.ngFireService.delete('cards', data.card.id);
                batch_1.commit();
            }
        });
    };
    CardsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["NgFireService"]])
    ], CardsService);
    return CardsService;
}());



/***/ }),

/***/ "./src/app/cards/delete-card-dialog/delete-card-dialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/cards/delete-card-dialog/delete-card-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: DeleteCardDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCardDialogComponent", function() { return DeleteCardDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DeleteCardDialogComponent = /** @class */ (function () {
    function DeleteCardDialogComponent() {
    }
    DeleteCardDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-card-dialog',
            template: "\n        <h2 mat-dialog-title>Confirm Delete</h2>\n        <mat-dialog-content>Are you sure you want to delete this card?</mat-dialog-content>\n        <mat-dialog-actions>\n            <button color=\"warn\" mat-dialog-close mat-button>Cancel</button>\n            <button color=\"primary\" [mat-dialog-close]=\"true\" mat-button>Confirm</button>\n        </mat-dialog-actions>\n    ",
            styles: ["\n        mat-dialog-actions {\n            justify-content: flex-end;\n            margin-top: 8px;\n        }\n    "]
        })
    ], DeleteCardDialogComponent);
    return DeleteCardDialogComponent;
}());



/***/ }),

/***/ "./src/app/cards/tool-bar/tool-bar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cards/tool-bar/tool-bar.component.ts ***!
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolBarComponent = /** @class */ (function () {
    function ToolBarComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToolBarComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToolBarComponent.prototype, "cards", void 0);
    ToolBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tool-bar',
            template: "\n        <mat-toolbar class=\"mat-elevation-z4\">\n            <button routerLink=\"/app/folders\" color=\"primary\" mat-icon-button>\n                <mat-icon>arrow_back</mat-icon>\n            </button>\n            <span id=\"title\">{{ this.cards.length ? this.title : 'No Cards In Folder' }}</span>\n            <span id=\"spacer\"></span>\n        </mat-toolbar>\n    ",
            styles: ["\n        mat-toolbar {\n            background: #ECEFF1;\n            display: flex;\n            justify-content: space-between;\n            z-index: 1;\n            position: absolute;\n        }\n        #title {\n            opacity: 0.6;\n        }\n        #space {\n            width: 40px;\n        }\n    "]
        })
    ], ToolBarComponent);
    return ToolBarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=cards-cards-module.js.map