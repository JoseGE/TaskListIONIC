webpackJsonp([4],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePageModule", function() { return DetallePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetallePageModule = (function () {
    function DetallePageModule() {
    }
    DetallePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalle__["a" /* DetallePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle__["a" /* DetallePage */]),
            ],
        })
    ], DetallePageModule);
    return DetallePageModule;
}());

//# sourceMappingURL=detalle.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePage; });
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



var DetallePage = (function () {
    function DetallePage(_listadeseos, alertCtrl, navCtrl, navParams) {
        this._listadeseos = _listadeseos;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.idx = this.navParams.get("idx");
        this.lista = this.navParams.get("lista");
    }
    DetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallePage');
    };
    DetallePage.prototype.updateState = function (item) {
        item.completado = !item.completado;
        var completado = true;
        for (var _i = 0, _a = this.lista.items; _i < _a.length; _i++) {
            var item_1 = _a[_i];
            if (!item_1.completado) {
                completado = false;
                break;
            }
        }
        console.log(this._listadeseos.listas);
        this.lista.completado = completado;
        this._listadeseos.updateStorage();
    };
    DetallePage.prototype.deleteList = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirmación',
            message: 'Seguro que desea eliminar la lista?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this._listadeseos.deleteList(_this.idx);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    };
    DetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle',template:/*ion-inline-start:"E:\programacion\Angular\deseosapp\src\pages\detalle\detalle.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>{{lista.nombre}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            <ion-item>\n                <ion-label floating>Username</ion-label>\n                <ion-input type="text" [(ngModel)]="lista.nombre"></ion-input>\n            </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-list>\n                <ion-item *ngFor="let item of lista.items" (click)="updateState(item)">\n                    <ion-icon item-left *ngIf="!item.completado" name="square-outline"></ion-icon>\n                    <ion-icon item-left *ngIf="item.completado" name="checkbox-outline"></ion-icon>\n                    <h2 [class.tachado]="item.completado">{{item.nombre}}</h2>\n                </ion-item>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n    <hr>\n    <button ion-button block color="danger" (click)="deleteList()">Lista completada</button>\n</ion-content>'/*ion-inline-end:"E:\programacion\Angular\deseosapp\src\pages\detalle\detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_lista_deseos_lista_deseos__["a" /* ListaDeseosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetallePage);
    return DetallePage;
}());

//# sourceMappingURL=detalle.js.map

/***/ })

});
//# sourceMappingURL=4.js.map