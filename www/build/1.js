webpackJsonp([1],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminadosPageModule", function() { return TerminadosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminados__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TerminadosPageModule = (function () {
    function TerminadosPageModule() {
    }
    TerminadosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terminados__["a" /* TerminadosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terminados__["a" /* TerminadosPage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], TerminadosPageModule);
    return TerminadosPageModule;
}());

//# sourceMappingURL=terminados.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c_placeholder_c_placeholder__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pendientes_pendientes__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule_1 = PipesModule;
    PipesModule.forRoot = function () {
        return {
            ngModule: PipesModule_1,
            providers: [],
        };
    };
    PipesModule = PipesModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__c_placeholder_c_placeholder__["a" /* CPlaceholderPipe */],
                __WEBPACK_IMPORTED_MODULE_2__pendientes_pendientes__["a" /* PendientesPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__c_placeholder_c_placeholder__["a" /* CPlaceholderPipe */],
                __WEBPACK_IMPORTED_MODULE_2__pendientes_pendientes__["a" /* PendientesPipe */]]
        })
    ], PipesModule);
    return PipesModule;
    var PipesModule_1;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CPlaceholderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the CPlaceholderPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var CPlaceholderPipe = (function () {
    function CPlaceholderPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    CPlaceholderPipe.prototype.transform = function (value, defecto) {
        return (value) ? value : defecto;
    };
    CPlaceholderPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'cPlaceholder',
        })
    ], CPlaceholderPipe);
    return CPlaceholderPipe;
}());

//# sourceMappingURL=c-placeholder.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendientesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PendientesPipe = (function () {
    function PendientesPipe() {
    }
    PendientesPipe.prototype.transform = function (lists, state) {
        if (state === void 0) { state = false; }
        return lists.filter(function (list) { return list.completado === state; });
    };
    PendientesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'pendientes',
            pure: false
        })
    ], PendientesPipe);
    return PendientesPipe;
}());

//# sourceMappingURL=pendientes.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lista_deseos_lista_deseos__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TerminadosPage = (function () {
    function TerminadosPage(_service, navCtrl, navParams) {
        this._service = _service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TerminadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TerminadosPage');
    };
    TerminadosPage.prototype.details = function (lista, idx) {
        this.navCtrl.push("DetallePage", {
            lista: lista, idx: idx
        });
    };
    TerminadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terminados',template:/*ion-inline-start:"E:\programacion\Angular\deseosapp\src\pages\terminados\terminados.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>Terminados</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let lista of _service.listas | pendientes:true; let i = index">\n        <ion-item color="dark">\n            <h2>{{lista.nombre}}</h2>\n            <ion-note item-right>\n                {{lista.items.length}} items\n            </ion-note>\n        </ion-item>\n        <ion-item *ngFor="let item of lista.items | slice:0:2">\n            <ion-icon item-left *ngIf="!item.completado" name="square-outline"></ion-icon>\n            <ion-icon item-left *ngIf="item.completado" name="checkbox-outline"></ion-icon>\n            <h2 [class.tachado]="item.completado">{{item.nombre}}</h2>\n        </ion-item>\n        <ion-item text-center *ngIf="lista.items.length > 2" (click)="details(lista, i)">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n        </ion-item>\n    </ion-card>\n    <ion-fab right bottom>\n        <button ion-fab (click)="irAgregar()" color="primary"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"E:\programacion\Angular\deseosapp\src\pages\terminados\terminados.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_lista_deseos_lista_deseos__["a" /* ListaDeseosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_lista_deseos_lista_deseos__["a" /* ListaDeseosProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object])
    ], TerminadosPage);
    return TerminadosPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=terminados.js.map

/***/ })

});
//# sourceMappingURL=1.js.map