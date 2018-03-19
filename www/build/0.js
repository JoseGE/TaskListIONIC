webpackJsonp([0],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarPageModule", function() { return AgregarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agregar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AgregarPageModule = (function () {
    function AgregarPageModule() {
    }
    AgregarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agregar__["a" /* AgregarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agregar__["a" /* AgregarPage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], AgregarPageModule);
    return AgregarPageModule;
}());

//# sourceMappingURL=agregar.module.js.map

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

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_class_index__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lista_deseos_lista_deseos__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgregarPage = (function () {
    function AgregarPage(_service, alertCtrl, navCtrl) {
        this._service = _service;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.nameList = "";
        this.nameItem = "";
        this.items = [];
    }
    AgregarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgregarPage');
    };
    AgregarPage.prototype.addItem = function () {
        if (this.nameItem.length == 0) {
            return;
        }
        var item = new __WEBPACK_IMPORTED_MODULE_2__app_class_index__["a" /* ListaItem */]();
        item.nombre = this.nameItem;
        this.items.push(item);
        this.nameItem = "";
    };
    AgregarPage.prototype.deleteItem = function (item) {
        if (item > -1) {
            this.items.splice(item, 1);
        }
    };
    AgregarPage.prototype.saveList = function () {
        if (this.nameList.length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: "Información",
                message: "Debe ingresar el nombre de la lista",
                buttons: ["OK"]
            });
            alert_1.present();
        }
        else {
            var list = new __WEBPACK_IMPORTED_MODULE_2__app_class_index__["b" /* Listas */](this.nameList);
            list.items = this.items;
            this._service.addList(list);
            this.navCtrl.pop();
        }
    };
    AgregarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agregar',template:/*ion-inline-start:"E:\programacion\Angular\deseosapp\src\pages\agregar\agregar.html"*/'<ion-header>\n\n    <ion-navbar color="danger">\n        <ion-title> {{nameList | cPlaceholder:"Nueva lista"}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            <ion-item>\n                <ion-label floating>Lista</ion-label>\n                <ion-input type="text" [(ngModel)]="nameList" name="nameList"></ion-input>\n            </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-item>\n                <ion-label floating>item:</ion-label>\n                <ion-input type="text" (keyup.enter)="addItem()" [(ngModel)]="nameItem" name="nameItem"></ion-input>\n            </ion-item>\n            <button ion-button block (click)="addItem()">Agregar</button>\n        </ion-card-content>\n    </ion-card>\n    <!-- items -->\n    <ion-card *ngIf="items.length > 0">\n        <ion-card-header>\n            <h3>Items agregados {{items.length}}</h3>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-list>\n                <ion-item *ngFor="let item of items; let i = index">\n                    <button ion-button color="dark" clear> {{item.nombre}}</button>\n                    <button ion-button outline item-right color="danger" (click)="deleteItem(i)">\n                        <ion-icon name="trash"></ion-icon>\n                    </button>\n                </ion-item>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n\n    <button (click)="saveList()" ion-button block icon-left color="secondary">\n      <ion-icon name="add"></ion-icon>\n      Agregar Lista\n    </button>\n</ion-content>'/*ion-inline-end:"E:\programacion\Angular\deseosapp\src\pages\agregar\agregar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_lista_deseos_lista_deseos__["a" /* ListaDeseosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AgregarPage);
    return AgregarPage;
}());

//# sourceMappingURL=agregar.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lista_item__ = __webpack_require__(287);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lista_item__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Listas__ = __webpack_require__(288);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Listas__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaItem; });
var ListaItem = (function () {
    function ListaItem() {
    }
    return ListaItem;
}());

//# sourceMappingURL=lista-item.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Listas; });
var Listas = (function () {
    function Listas(_nombre) {
        this.nombre = _nombre;
        this.completado = false;
    }
    return Listas;
}());

//# sourceMappingURL=Listas.js.map

/***/ })

});
//# sourceMappingURL=0.js.map