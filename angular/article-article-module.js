(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["article-article-module"],{

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.service */ "./src/app/core/core.service.ts");
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/article.service */ "./src/app/article/services/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(coreService, activatedRoute, articleService) {
        this.coreService = coreService;
        this.activatedRoute = activatedRoute;
        this.articleService = articleService;
        this.title$ = this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (params) { return params.title; }));
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coreService.toolbarTitle$.next('Article');
        this.sectionsSub = this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) { return _this.articleService.loadSections(params); })).subscribe();
    };
    ArticleComponent.prototype.ngOnDestroy = function () {
        this.sectionsSub.unsubscribe();
    };
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-component',
            template: "\n        <app-tool-bar\n            [title]=\"this.title$ | async\"\n            [isSelectedListLength]=\"this.articleService.isSelectedList.length\"\n            (save)=\"this.articleService.save()\"\n        ></app-tool-bar>\n        <app-sections\n            [sections]=\"this.articleService.sections$ | async\"\n            (select)=\"this.articleService.select($event)\"\n        ></app-sections>\n    ",
            providers: [_services_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"]]
        }),
        __metadata("design:paramtypes", [_core_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/article/article.module.ts":
/*!*******************************************!*\
  !*** ./src/app/article/article.module.ts ***!
  \*******************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _save_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save-dialog.component */ "./src/app/article/save-dialog.component.ts");
/* harmony import */ var _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tool-bar/tool-bar.component */ "./src/app/article/tool-bar/tool-bar.component.ts");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/sections.component */ "./src/app/article/sections/sections.component.ts");
/* harmony import */ var _save_dialog_form_save_dialog_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./save-dialog-form/save-dialog-form.component */ "./src/app/article/save-dialog-form/save-dialog-form.component.ts");
/* harmony import */ var _save_dialog_folders_save_dialog_folders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./save-dialog-folders/save-dialog-folders.component */ "./src/app/article/save-dialog-folders/save-dialog-folders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ArticleModule = /** @class */ (function () {
    function ArticleModule() {
    }
    ArticleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: ':language/:title', component: _article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"] }
                ])
            ],
            declarations: [
                _article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"],
                _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_7__["ToolBarComponent"],
                _save_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SaveDialogComponent"],
                _sections_sections_component__WEBPACK_IMPORTED_MODULE_8__["SectionsComponent"],
                _save_dialog_form_save_dialog_form_component__WEBPACK_IMPORTED_MODULE_9__["SaveDialogFormComponent"],
                _save_dialog_folders_save_dialog_folders_component__WEBPACK_IMPORTED_MODULE_10__["SaveDialogFoldersComponent"]
            ],
            entryComponents: [_save_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SaveDialogComponent"]]
        })
    ], ArticleModule);
    return ArticleModule;
}());



/***/ }),

/***/ "./src/app/article/save-dialog-folders/save-dialog-folders.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/article/save-dialog-folders/save-dialog-folders.component.ts ***!
  \******************************************************************************/
/*! exports provided: SaveDialogFoldersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveDialogFoldersComponent", function() { return SaveDialogFoldersComponent; });
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

var SaveDialogFoldersComponent = /** @class */ (function () {
    function SaveDialogFoldersComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SaveDialogFoldersComponent.prototype, "folders", void 0);
    SaveDialogFoldersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-save-dialog-folders',
            template: "\n        <mat-list>\n            <h3 mat-subheader>Folders</h3>\n            <mat-list-item *ngFor=\"let folder of this.folders\" class=\"folder-list-item\">\n                <mat-icon [matBadge]=\"folder.cardsLength\" mat-list-icon>folder</mat-icon>\n                <button [mat-dialog-close]=\"folder\" mat-button>{{ folder.folderName }}</button>\n            </mat-list-item>\n        </mat-list>\n    ",
            styles: ["\n        mat-list {\n            border: 1px solid #ddd;\n            margin-top: 16px;\n            overflow: auto;\n            max-height: 300px;\n                padding-top: 0px;\n        }\n        mat-list-item {\n            border-bottom: 1px solid #ddd;\n            cursor: pointer;\n        }\n        mat-list-item:hover {\n            background: #ddd !important;\n        }\n        mat-icon {\n            color: rgba(0, 0, 0, 0.54);\n        }\n        button {\n            width: 100%;\n            height: 100%;\n            text-align: left;\n            font-weight: 400;\n            position: absolute;\n            padding-left: 48px;\n        }\n        button:hover {\n            background: none !important;\n        }\n        h3 {\n            border-bottom: 1px solid #ddd;\n            background: #eee;\n            position: sticky;\n            top: 0px;\n            z-index: 1;\n            margin-bottom: 8px !important;\n        }\n    "]
        })
    ], SaveDialogFoldersComponent);
    return SaveDialogFoldersComponent;
}());



/***/ }),

/***/ "./src/app/article/save-dialog-form/save-dialog-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/article/save-dialog-form/save-dialog-form.component.ts ***!
  \************************************************************************/
/*! exports provided: SaveDialogFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveDialogFormComponent", function() { return SaveDialogFormComponent; });
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


var SaveDialogFormComponent = /** @class */ (function () {
    function SaveDialogFormComponent() {
        this.addFolder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SaveDialogFormComponent.prototype, "addFolder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newFolderName'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SaveDialogFormComponent.prototype, "newFolderName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SaveDialogFormComponent.prototype, "form", void 0);
    SaveDialogFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-save-dialog-form',
            template: "\n        <form #form=\"ngForm\">\n            <mat-form-field>\n                <input\n                    #newFolderName\n                    type=\"text\"\n                    placeholder=\"Add Folder\"\n                    autocorrect=\"off\"\n                    autocomplete=\"off\"\n                    matInput\n                />\n            </mat-form-field>\n            <div id=\"btn-container\">\n                <button color=\"warn\" mat-dialog-close mat-button> Cancel </button>\n                <button\n                    (click)=\"this.addFolder.emit(newFolderName.value)\"\n                    color=\"primary\"\n                    mat-button\n                >\n                    Save\n                </button>\n            </div>\n        </form>\n    "
        })
    ], SaveDialogFormComponent);
    return SaveDialogFormComponent;
}());



/***/ }),

/***/ "./src/app/article/save-dialog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/article/save-dialog.component.ts ***!
  \**************************************************/
/*! exports provided: SaveDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveDialogComponent", function() { return SaveDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_save_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/save-dialog.service */ "./src/app/article/services/save-dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaveDialogComponent = /** @class */ (function () {
    function SaveDialogComponent(saveDialogService) {
        this.saveDialogService = saveDialogService;
    }
    SaveDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-save-dialog',
            template: "\n        <app-save-dialog-form (addFolder)=\"this.saveDialogService.addFolder($event)\"></app-save-dialog-form>\n        <app-save-dialog-folders [folders]=\"this.saveDialogService.folders$ | async\"></app-save-dialog-folders>\n    ",
            providers: [_services_save_dialog_service__WEBPACK_IMPORTED_MODULE_1__["SaveDialogService"]]
        }),
        __metadata("design:paramtypes", [_services_save_dialog_service__WEBPACK_IMPORTED_MODULE_1__["SaveDialogService"]])
    ], SaveDialogComponent);
    return SaveDialogComponent;
}());



/***/ }),

/***/ "./src/app/article/sections/sections.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article/sections/sections.component.ts ***!
  \********************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
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

var SectionsComponent = /** @class */ (function () {
    function SectionsComponent() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SectionsComponent.prototype, "sections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SectionsComponent.prototype, "select", void 0);
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sections',
            template: "\n        <ng-container *ngFor=\"let section of this.sections\">\n            <ng-container *ngIf=\"section.paragraphs.length\">\n                <div *ngIf=\"section.header\" class=\"section-header mat-headline\">{{ section.header }}</div>\n                <ng-container *ngIf=\"!section.isSaved\">\n                    <mat-card *ngFor=\"let paragraph of section.paragraphs\">\n                        <mat-card-content [ngClass]=\"{ 'isSelected-content': paragraph.isSelected }\">{{ paragraph.text }}</mat-card-content>\n                        <mat-card-actions [ngClass]=\"{ 'isSelected-actions': paragraph.isSelected }\">\n                            <button\n                                *ngIf=\"paragraph.isSelected\"\n                                (click)=\"this.select.emit(paragraph)\"\n                                color=\"primary\"\n                                mat-button\n                            >\n                                {{ section.isSaved }} REMOVE\n                            </button>\n                            <button\n                                *ngIf=\"!paragraph.isSelected\"\n                                (click)=\"this.select.emit(paragraph)\"\n                                color=\"primary\"\n                                mat-button\n                            >\n                                SELECT\n                            </button>\n                        </mat-card-actions>\n                    </mat-card>\n                </ng-container>\n            </ng-container>\n        </ng-container>\n    ",
            styles: ["\n        :host {\n            position: absolute;\n            bottom: 0px;\n            top: 120px;\n            overflow: auto;\n            background: #eee;\n        }\n        .section-header {\n            padding: 24px 16px 16px;\n            margin-top: 48px;\n            font-weight: 600;\n            text-align: center;\n            border-bottom: 1px solid #ddd;\n        }\n        mat-card {\n            padding: 0px;\n            margin: 24px 24px 48px;\n        }\n        mat-card-content {\n            padding: 24px;\n            margin: 0px;\n            font-size: 16px;\n        }\n        mat-card-actions {\n            padding: 8px !important;\n            margin: 0px 0px 16px;\n            border-top: 1px solid #ddd;\n            text-align: center;\n        }\n        button {\n            width: 100%;\n        }\n        .isSelected-content {\n            background: rgb(204, 204, 204);\n            border-bottom-color: rgb(170, 170, 170);\n        }\n        .isSelected-actions {\n            background: rgb(221, 221, 221);\n        }\n    "]
        })
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/article/services/article.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/article/services/article.service.ts ***!
  \*****************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _save_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../save-dialog.component */ "./src/app/article/save-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArticleService = /** @class */ (function () {
    function ArticleService(http, ngFireService, matDialog) {
        this.http = http;
        this.ngFireService = ngFireService;
        this.matDialog = matDialog;
        this.isSelectedList = [];
        this.sections$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    ArticleService.prototype.loadSections = function (params) {
        var _this = this;
        return this.http.get("https://" + params.language + ".wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts|images&redirects=true&titles=" + params.title).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var responseHtml = response.json().query.pages[Object.keys(response.json().query.pages)[0]].extract;
            return responseHtml.match(/<h(.)>.*?<\/h\1>|<p>.*?<\/p>/g)
                .reduce(function (prev, curr, i) {
                var tmp = document.createElement('DIV');
                tmp.innerHTML = curr;
                var text = tmp.textContent || tmp.innerText || '';
                if (curr.match(/<h(.)>.*?<\/h\1>/g) && text) {
                    prev.push({
                        header: text,
                        paragraphs: [],
                        sectionIndex: prev.length
                    });
                }
                else if (curr.match(/<p>.*?<\/p>/g) && text) {
                    prev[prev.length - 1].paragraphs.push({
                        header: prev[prev.length - 1].header,
                        isSelected: false,
                        isSaved: false,
                        paragraphId: i,
                        paragraphIndex: prev[prev.length - 1].paragraphs.length,
                        sectionIndex: prev[prev.length - 1].sectionIndex,
                        text: text
                    });
                }
                return prev;
            }, [{ header: '', paragraphs: [], sectionIndex: 0 }]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (sections) { return _this.sections$.next(sections); }));
    };
    ArticleService.prototype.select = function (paragraph) {
        paragraph.isSelected = !paragraph.isSelected;
        this.isSelectedList = paragraph.isSelected ? [paragraph].concat(this.isSelectedList) :
            this.isSelectedList.filter(function (p) { return p.paragraphId !== paragraph.paragraphId; });
    };
    ArticleService.prototype.save = function () {
        var _this = this;
        this.matDialog.open(_save_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SaveDialogComponent"])
            .afterClosed()
            .subscribe(function (folder) {
            if (folder) {
                var newFolder_1 = {
                    cardsLength: folder.cardsLength + _this.isSelectedList.length,
                    folderName: folder.folderName,
                    id: folder.id,
                    userUid: folder.userUid,
                };
                var selectedSections = _this.isSelectedList.reduce(function (prev, curr) {
                    prev.push({
                        folder: newFolder_1,
                        header: curr.header || null,
                        paragraphIndex: curr.paragraphIndex,
                        sectionIndex: curr.sectionIndex,
                        text: curr.text
                    });
                    return prev;
                }, []);
                var saveCards = _this.ngFireService.addBatch('cards', selectedSections);
                var updateFolder = _this.ngFireService.update('folders', newFolder_1.id, { cardsLength: newFolder_1.cardsLength });
                Promise.all([saveCards, updateFolder])
                    .then(function (_) {
                    var isSelectedListIds = _this.isSelectedList.map(function (paragraph) { return paragraph.paragraphId; });
                    _this.sections$.next(_this.sections$.getValue().map(function (section) {
                        return Object.assign({}, section, {
                            paragraphs: section.paragraphs.filter(function (paragraph) { return !isSelectedListIds.includes(paragraph.paragraphId); })
                        });
                    }));
                })
                    .then(function (_) { return _this.isSelectedList = []; });
            }
        });
    };
    ArticleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _shared_services__WEBPACK_IMPORTED_MODULE_5__["NgFireService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "./src/app/article/services/save-dialog.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/article/services/save-dialog.service.ts ***!
  \*********************************************************/
/*! exports provided: SaveDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveDialogService", function() { return SaveDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SaveDialogService = /** @class */ (function () {
    function SaveDialogService(ngFireService) {
        this.ngFireService = ngFireService;
        this.folders$ = this.ngFireService.load1Condition('folders', 'userUid', '==', Object(firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"])().currentUser.uid);
    }
    SaveDialogService.prototype.addFolder = function (folderName) {
        this.ngFireService.add('folders', {
            cardsLength: 0,
            folderName: folderName.trim(),
            userUid: Object(firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"])().currentUser.uid
        });
    };
    SaveDialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_2__["NgFireService"]])
    ], SaveDialogService);
    return SaveDialogService;
}());



/***/ }),

/***/ "./src/app/article/tool-bar/tool-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article/tool-bar/tool-bar.component.ts ***!
  \********************************************************/
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
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToolBarComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToolBarComponent.prototype, "isSelectedListLength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ToolBarComponent.prototype, "save", void 0);
    ToolBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tool-bar',
            template: "\n        <mat-toolbar class=\"mat-elevation-z4\">\n            <button color=\"primary\" mat-icon-button>\n                <mat-icon routerLink=\"/app/search\">arrow_back</mat-icon>\n            </button>\n            <span id=\"title\">{{ title }}</span>\n            <button (click)=\"this.save.emit()\" [disabled]=\"!this.isSelectedListLength\" color=\"primary\" mat-icon-button>\n                <mat-icon>save</mat-icon>\n            </button>\n        </mat-toolbar>\n    ",
            styles: ["\n        mat-toolbar {\n            background: #ECEFF1;\n            display: flex;\n            justify-content: space-between;\n            z-index: 1;\n            position: absolute;\n        }\n        #title {\n            opacity: 0.6;\n            text-transform: capitalize;\n        }\n    "]
        })
    ], ToolBarComponent);
    return ToolBarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=article-article-module.js.map