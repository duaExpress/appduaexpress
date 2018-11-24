webpackJsonp([10],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expedientes_expedientes__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuarios_usuarios__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout_logout__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.home = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.records = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__expedientes_expedientes__["a" /* ExpedientesPage */]);
    };
    HomePage.prototype.users = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__usuarios_usuarios__["a" /* UsuariosPage */]);
    };
    HomePage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__logout_logout__["a" /* LogoutPage */]);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar class="home-navbar">\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      <img class="logo" src="assets/imgs/duaexpress.png"/>\n    </ion-title>\n\n    <ion-buttons end>\n      <button class="home-button" ion-button (click)="home()">Home</button>\n\n      <button class="home-button" ion-button (click)="records()">Expedientes</button>\n\n      <button class="home-button" ion-button (click)="users()">Usuarios</button>\n\n      <button class="home-button" ion-button (click)="logout()">Desconectar</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n'/*ion-inline-end:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_global_enum__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_services__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__usuarios_usuarios__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operators__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



//import { AngularFireList, AngularFireDatabase, AngularFireObject} from 'angularfire2/database';










/**
* Generated class for the RegisterPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, auth, alertCtrl, formBuilder, database, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.database = database;
        this.userService = userService;
        this.submitAttempt = false;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"]();
        this.isUserEditable = false;
        var emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.idUser = navParams.get('idUser');
        this.isUserEditable = false;
        if (this.idUser != null) {
            this.users = userService.getUsers();
            this.usuario = this.userService.getUserObsById(this.idUser);
            this.isUserEditable = true;
            this.registerForm = formBuilder.group({
                name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                cif: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(9), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z]{1}[0-9]{8}'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                company: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                postalCode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[0-9]{5}'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                tel: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[0-9\- ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            });
        }
        else {
            this.usuario = null;
            this.registerForm = formBuilder.group({
                email: [navParams.get("emailPresent"), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(emailRegex), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                password: [navParams.get("passwordPresent"), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                cif: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(9), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z]{1}[0-9]{8}'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                company: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                postalCode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[0-9]{5}'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
                tel: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[0-9\- ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            });
        }
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.idUser != null) {
            this.usuario = this.usuario.pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["tap"])(function (user) { return _this.registerForm.patchValue(user); }));
        }
    };
    RegisterPage.prototype.registerUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isUserRegistered, alert_1, alert_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitAttempt = true;
                        if (!this.registerForm.valid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userService.isUserAlreadyRegistered(this.registerForm.value.email)];
                    case 1:
                        isUserRegistered = _a.sent();
                        if (isUserRegistered) {
                            alert_1 = this.alertCtrl.create({
                                title: 'Error',
                                subTitle: "El email ya está registrado en la aplicación",
                                buttons: ['Aceptar']
                            });
                            alert_1.present();
                        }
                        else {
                            this.auth.registerUser(this.registerForm.value.email, this.registerForm.value.password).then(function (success) {
                                _this.authUser = JSON.parse(window.localStorage.getItem('user'));
                                _this.user = _this.userService.getUserById(_this.authUser.uid);
                                _this.user.set({
                                    email: _this.authUser.email,
                                    active: true,
                                    address: _this.registerForm.value.address,
                                    cif: _this.registerForm.value.cif,
                                    city: _this.registerForm.value.city,
                                    company: _this.registerForm.value.company,
                                    name: _this.registerForm.value.name,
                                    postalCode: _this.registerForm.value.postalCode,
                                    state: _this.registerForm.value.state,
                                    tel: _this.registerForm.value.tel,
                                    profile: __WEBPACK_IMPORTED_MODULE_6__models_global_enum__["b" /* Profile */].User,
                                    emailNotif: _this.authUser.email
                                });
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        alert_2 = this.alertCtrl.create({
                            title: 'Error',
                            subTitle: "Complete todos los datos del formulario correctamente",
                            buttons: ['Aceptar']
                        });
                        alert_2.present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.updateUser = function () {
        this.submitAttempt = true;
        if (this.registerForm.valid) {
            //Hacemos mix del formulario y lo que tenemos en memoria
            var userToUpdate = new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */]();
            userToUpdate.uid = this.idUser;
            userToUpdate.name = this.registerForm.value.name;
            userToUpdate.cif = this.registerForm.value.cif;
            userToUpdate.company = this.registerForm.value.company;
            userToUpdate.address = this.registerForm.value.address;
            userToUpdate.postalCode = this.registerForm.value.postalCode;
            userToUpdate.city = this.registerForm.value.city;
            userToUpdate.state = this.registerForm.value.state;
            userToUpdate.tel = this.registerForm.value.tel;
            this.userService.updateUserFromRegistry(userToUpdate);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__usuarios_usuarios__["a" /* UsuariosPage */]);
        }
        else {
            //TODO poner en una función generica
            var alert_3 = this.alertCtrl.create({
                title: 'Error',
                subTitle: "Complete todos los datos del formulario correctamente",
                buttons: ['Aceptar']
            });
            alert_3.present();
        }
    };
    RegisterPage.prototype.close = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.hide = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__usuarios_usuarios__["a" /* UsuariosPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/register/register.html"*/'<!--\nGenerated template for the RegisterPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n\n<p *ngIf="submitAttempt" style="color: #ea6153;">Por favor, rellena todos los campos corectamente</p>\n<ion-content padding class="form-content">\n  <div class="wrapper" *ngIf="isUserEditable">\n    <form class="form-app"  *ngIf="usuario | async; else loading" [formGroup]="registerForm">\n      <ion-row>\n        <ion-title class="form-title">Formulario de Registro</ion-title>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input class="form-control" placeholder="Nombre" formControlName="name" type="text" autocapitalize="off" maxlength="70"\n              [class.invalid]="!registerForm.controls.name.valid && (registerForm.controls.name.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.name.valid  && (registerForm.controls.name.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo nombre es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="CIF" formControlName="cif" type="text" autocapitalize="off" maxlength="9"\n              [class.invalid]="!registerForm.controls.cif.valid && (registerForm.controls.cif.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.cif.valid  && (registerForm.controls.cif.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Por favor, inserta un CIF válido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Empresa" formControlName="company" type="text" autocapitalize="off" maxlength="50"\n              [class.invalid]="!registerForm.controls.company.valid && (registerForm.controls.company.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.company.valid  && (registerForm.controls.company.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo empresa es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Direccion" formControlName="address" type="text" autocapitalize="off" maxlength="70"\n              [class.invalid]="!registerForm.controls.address.valid && (registerForm.controls.address.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.address.valid  && (registerForm.controls.address.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo dirección es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Código Postal" formControlName="postalCode" type="text" autocapitalize="off" maxlength="5"\n              [class.invalid]="!registerForm.controls.postalCode.valid && (registerForm.controls.postalCode.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.postalCode.valid  && (registerForm.controls.postalCode.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Por favor, inserta un código postal válido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Ciudad" formControlName="city" type="text" autocapitalize="off" maxlength="50"\n              [class.invalid]="!registerForm.controls.city.valid && (registerForm.controls.city.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.city.valid  && (registerForm.controls.city.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo ciudad es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Provincia" formControlName="state" type="text" autocapitalize="off" maxlength="50"\n              [class.invalid]="!registerForm.controls.state.valid && (registerForm.controls.state.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.state.valid  && (registerForm.controls.state.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo provincia es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Teléfono" formControlName="tel" type="text" autocapitalize="off" maxlength="30"\n              [class.invalid]="!registerForm.controls.tel.valid && (registerForm.controls.tel.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.tel.valid  && (registerForm.controls.tel.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Por favor, inserta un número de teléfono válido</p>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n        </ion-col>\n\n        <ion-col class="signup-col">\n          <button ion-button class="register-btn" block clear  (click)="updateUser()">Actualizar</button>\n        </ion-col>\n\n        <ion-col class="signup-col">\n          <button ion-button class="close-btn" block clear  (click)="hide()">Cerrar</button>\n        </ion-col>\n\n        <ion-col class="signup-col">\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n\n\n  <div class="wrapper" *ngIf="!isUserEditable"><!-- puesto aquí por el observable usuario . Poner la parte común en un template y añadir email + password -->\n    <form class="form-app" [formGroup]="registerForm">\n      <ion-row>\n        <ion-title class="form-title">Formulario de Registro</ion-title>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item *ngIf="!isUserEditable">\n              <ion-input class="form-control" placeholder="Email" formControlName="email" type="text" autocapitalize="off" maxlength="50"\n              [class.invalid]="!registerForm.controls.email.valid && (registerForm.controls.email.dirty || submitAttempt)" disabled="{{isUserEditable}}"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!isUserEditable && !registerForm.controls.email.valid  && (registerForm.controls.email.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Por favor, inserta un email válido</p>\n            </ion-item>\n\n            <ion-item *ngIf="!isUserEditable">\n              <ion-input class="form-control" placeholder="Password" type="password" formControlName="password"\n              [class.invalid]="!registerForm.controls.password.valid && (registerForm.controls.password.dirty || submitAttempt)" disabled="{{isUserEditable}}"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!isUserEditable && !registerForm.controls.password.valid  && (registerForm.controls.password.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo password es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Nombre" formControlName="name" type="text" autocapitalize="off" maxlength="70"\n              [class.invalid]="!registerForm.controls.name.valid && (registerForm.controls.name.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.name.valid  && (registerForm.controls.name.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo nombre es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="CIF" formControlName="cif" type="text" autocapitalize="off" maxlength="9"\n              [class.invalid]="!registerForm.controls.cif.valid && (registerForm.controls.cif.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.cif.valid  && (registerForm.controls.cif.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Por favor, inserta un CIF válido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Empresa" formControlName="company" type="text" autocapitalize="off" maxlength="50"\n              [class.invalid]="!registerForm.controls.company.valid && (registerForm.controls.company.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.company.valid  && (registerForm.controls.company.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo empresa es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Direccion" formControlName="address" type="text" autocapitalize="off" maxlength="70"\n              [class.invalid]="!registerForm.controls.address.valid && (registerForm.controls.address.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.address.valid  && (registerForm.controls.address.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo dirección es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Código Postal" formControlName="postalCode" type="text" autocapitalize="off" maxlength="5"\n              [class.invalid]="!registerForm.controls.postalCode.valid && (registerForm.controls.postalCode.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.postalCode.valid  && (registerForm.controls.postalCode.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Por favor, inserta un código postal válido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Ciudad" formControlName="city" type="text" autocapitalize="off" maxlength="50"\n              [class.invalid]="!registerForm.controls.city.valid && (registerForm.controls.city.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.city.valid  && (registerForm.controls.city.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo ciudad es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Provincia" formControlName="state" type="text" autocapitalize="off" maxlength="50"\n              [class.invalid]="!registerForm.controls.state.valid && (registerForm.controls.state.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.state.valid  && (registerForm.controls.state.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo provincia es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Teléfono" formControlName="tel" type="text" autocapitalize="off" maxlength="30"\n              [class.invalid]="!registerForm.controls.tel.valid && (registerForm.controls.tel.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.tel.valid  && (registerForm.controls.tel.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Por favor, inserta un número de teléfono válido</p>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n        </ion-col>\n\n        <ion-col class="signup-col">\n          <button ion-button class="register-btn" block clear  (click)="registerUser()">Registrarse</button>\n        </ion-col>\n\n        <ion-col class="signup-col">\n          <button ion-button class="close-btn" block clear  (click)="close()">Cerrar</button>\n        </ion-col>\n\n        <ion-col class="signup-col">\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>\n\n<ng-template #loading>\n  Cargando Usuario....\n</ng-template>\n'/*ion-inline-end:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_7__services_user_services__["a" /* UserService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutPage = /** @class */ (function () {
    function LogoutPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.auth.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    }
    LogoutPage.prototype.ionViewDidLoad = function () { };
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-logout',template:/*ion-inline-start:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/logout/logout.html"*/'\n'/*ion-inline-end:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/logout/logout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpedienteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExpedienteService = /** @class */ (function () {
    function ExpedienteService(database, datepipe) {
        this.database = database;
        this.datepipe = datepipe;
        this.expedientes = this.getExpedientes();
    }
    ExpedienteService.prototype.saveExpediente = function (expediente) {
        var id = this.database.createId();
        this.database.doc("expedientes/" + id).set({
            id: id,
            numExpediente: this.getValueFromString(expediente.numExpediente),
            referencia: this.getValueFromString(expediente.referencia),
            numConocimiento: this.getValueFromString(expediente.numConocimiento),
            empresa: this.getValueFromString(expediente.empresa),
            partida: this.getValueFromString(expediente.partida),
            fechaVuelo: this.getValueFromString(expediente.fechaVuelo),
            //peso: this.getValueFromNumber(expediente.peso),
            fecha: this.getDateNow()
        });
    };
    ExpedienteService.prototype.updateExpediente = function (expediente) {
        this.expedientes.doc(expediente.id).update({
            numExpediente: this.getValueFromString(expediente.numExpediente),
            referencia: this.getValueFromString(expediente.referencia),
            numConocimiento: this.getValueFromString(expediente.numConocimiento),
            empresa: this.getValueFromString(expediente.empresa),
            partida: this.getValueFromString(expediente.partida),
            fechaVuelo: this.getValueFromString(expediente.fechaVuelo),
        });
    };
    ExpedienteService.prototype.deleteExpediente = function (id) {
        this.expedientes.doc(id).delete();
    };
    ExpedienteService.prototype.getExpedientes = function () {
        return this.database.collection("expedientes");
    };
    ExpedienteService.prototype.getDateNow = function () {
        return this.datepipe.transform(new Date(), 'dd-MM-yyyy HH:mm:ss');
    };
    ExpedienteService.prototype.getValueFromString = function (value) {
        if (value === undefined || value == null) {
            return '';
        }
        else {
            return value;
        }
    };
    ExpedienteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]])
    ], ExpedienteService);
    return ExpedienteService;
}());

//# sourceMappingURL=expediente.services.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Profile; });
/* unused harmony export ExpedienteTipo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpedienteSubTipo; });
var Profile;
(function (Profile) {
    Profile["User"] = "U";
    Profile["Administrator"] = "A";
    Profile["Superadministrator"] = "S";
})(Profile || (Profile = {}));
var ExpedienteTipo;
(function (ExpedienteTipo) {
    ExpedienteTipo["Maritimo"] = "M";
    ExpedienteTipo["Aereo"] = "A";
})(ExpedienteTipo || (ExpedienteTipo = {}));
var ExpedienteSubTipo;
(function (ExpedienteSubTipo) {
    //Aereo
    ExpedienteSubTipo["DocEntega"] = "DE";
    ExpedienteSubTipo["DespachoAereoExportacion"] = "AEX";
    ExpedienteSubTipo["DespachoAereoImportacion"] = "AIM";
    ExpedienteSubTipo["DocRecogida"] = "DR";
    ExpedienteSubTipo["DAE"] = "DAE";
    ExpedienteSubTipo["RevisionFisica"] = "RF";
    //Marítimo
    ExpedienteSubTipo["DespachoMaritimoExportacion"] = "MEX";
})(ExpedienteSubTipo || (ExpedienteSubTipo = {}));
//# sourceMappingURL=global.enum.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var UserService = /** @class */ (function () {
    function UserService(database) {
        this.database = database;
        //Auth user
        this.authUser = JSON.parse(window.localStorage.getItem('user'));
        //App User
        if (this.authUser != null) {
            this.user = this.getUserById(this.authUser.uid);
        }
    }
    UserService.prototype.getUserById = function (id) {
        // return this.database.object('/users/' + id);
        return this.database.doc('/users/' + id);
    };
    UserService.prototype.getUserObsById = function (id) {
        return this.database.doc('/users/' + id).valueChanges();
    };
    UserService.prototype.getLocalUser = function () {
        return this.authUser;
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.prototype.getUsers = function () {
        return this.database.collection('/users');
    };
    UserService.prototype.getAppUsers = function () {
        var appUsers;
        this.users = this.getUsers();
        appUsers = this.users.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (a) {
                var user = a.payload.doc.data();
                var id = a.payload.doc.id;
                user.uid = id;
                //console.log('id: ' + id);
                return user;
            });
        }));
        return appUsers;
    };
    UserService.prototype.updateUser = function (userParam) {
        this.users.doc(userParam.uid).update({
            //email: userParam.email, Not Editable
            name: userParam.name,
            company: userParam.company,
            tel: userParam.tel,
            cif: userParam.cif,
            active: userParam.active,
            profile: userParam.profile,
            address: userParam.address,
            postalCode: userParam.postalCode,
            city: userParam.city,
            state: userParam.state,
            emailNotif: userParam.emailNotif
        });
    };
    UserService.prototype.updateUserFromRegistry = function (userParam) {
        this.users.doc(userParam.uid).update({
            //Solo estos campos
            name: userParam.name,
            company: userParam.company,
            tel: userParam.tel,
            cif: userParam.cif,
            address: userParam.address,
            postalCode: userParam.postalCode,
            city: userParam.city,
            state: userParam.state
        });
    };
    UserService.prototype.deleteUser = function (uid) {
        this.users.doc(uid).delete();
    };
    UserService.prototype.isUserAlreadyRegistered = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var db, queryRef, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        db = this.database.firestore;
                        queryRef = db.collection("users").where("email", '==', email);
                        result = false;
                        return [4 /*yield*/, queryRef.get().then(function (querySnapshot) {
                                if (querySnapshot.empty) {
                                    result = false;
                                }
                                else {
                                    result = true;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.services.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpedienteEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_expediente__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_expediente_services__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__expedientes_expedientes__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
* Generated class for the ExpedienteEditPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ExpedienteEditPage = /** @class */ (function () {
    function ExpedienteEditPage(navCtrl, navParams, alertCtrl, formBuilder, database, expedienteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.database = database;
        this.expedienteService = expedienteService;
        this.expedienteForm = formBuilder.group({
            numExpediente: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(35), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            referencia: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(35), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            numConocimiento: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(35), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            empresa: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            partida: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(16), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            fechaVuelo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
        });
    }
    ExpedienteEditPage.prototype.ionViewDidLoad = function () { };
    ExpedienteEditPage.prototype.saveExpediente = function (event) {
        if (this.expedienteForm.valid) {
            var expediente = new __WEBPACK_IMPORTED_MODULE_4__models_expediente__["a" /* Expediente */]();
            expediente.numExpediente = this.expedienteForm.value.numExpediente;
            expediente.empresa = this.expedienteForm.value.empresa;
            expediente.referencia = this.expedienteForm.value.referencia;
            expediente.numConocimiento = this.expedienteForm.value.numConocimiento;
            expediente.fechaVuelo = this.expedienteForm.value.fechaVuelo;
            expediente.partida = this.expedienteForm.value.partida;
            //expediente.peso = this.expedienteForm.value.peso;
            this.expedienteService.saveExpediente(expediente);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: "Complete todos los datos del formulario correctamente",
                buttons: ['Aceptar']
            });
            alert_1.present();
        }
    };
    ExpedienteEditPage.prototype.close = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__expedientes_expedientes__["a" /* ExpedientesPage */]);
    };
    ExpedienteEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-expediente-edit',template:/*ion-inline-start:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/expediente-edit/expediente-edit.html"*/'<!--\nGenerated template for the ExpedienteEditPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n\n<p *ngIf="submitAttempt" style="color: #ea6153;">Por favor, rellena todos los campos corectamente</p>\n<ion-content padding class="form-content">\n  <div class="wrapper">\n    <form class="form-app" [formGroup]="expedienteForm">\n      <ion-row>\n        <ion-col>\n          <h2 class="text-center">Formulario Expediente</h2>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-input class="form-control" placeholder="Empresa" formControlName="empresa" type="text" autocapitalize="off" maxlength="70"\n            [class.invalid]="!expedienteForm.controls.empresa.valid && (expedienteForm.controls.empresa.dirty || submitAttempt)"></ion-input>\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!expedienteForm.controls.empresa.valid  && (expedienteForm.controls.empresa.dirty || submitAttempt)">\n            <p style="color: #ea6153;">Campo empresa es requerido</p>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input class="form-control" placeholder="Nº Expediente" formControlName="numExpediente" type="text" autocapitalize="off" maxlength="35"\n            [class.invalid]="!expedienteForm.controls.numExpediente.valid && (expedienteForm.controls.numExpediente.dirty || submitAttempt)"></ion-input>\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!expedienteForm.controls.numExpediente.valid  && (expedienteForm.controls.numExpediente.dirty || submitAttempt)">\n            <p style="color: #ea6153;">Campo Número de Expediente es requerido</p>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n          <ion-input class="form-control" placeholder="Nº Conocimiento" formControlName="numConocimiento" type="text" autocapitalize="off" maxlength="35"\n          [class.invalid]="!expedienteForm.controls.numConocimiento.valid && (expedienteForm.controls.numConocimiento.dirty || submitAttempt)"></ion-input>\n        </ion-item>\n\n        <ion-item class="invalid" *ngIf="!expedienteForm.controls.numConocimiento.valid  && (expedienteForm.controls.numConocimiento.dirty || submitAttempt)">\n          <p style="color: #ea6153;">Campo Número de Conocimiento es requerido</p>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-input class="form-control" placeholder="Referencia" formControlName="referencia" type="text" autocapitalize="off" maxlength="35"\n            [class.invalid]="!expedienteForm.controls.referencia.valid && (expedienteForm.controls.referencia.dirty || submitAttempt)"></ion-input>\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!expedienteForm.controls.referencia.valid  && (expedienteForm.controls.referencia.dirty || submitAttempt)">\n            <p style="color: #ea6153;">Campo Referencia es requerido</p>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-datetime class="form-control" placeholder="Fecha de Vuelo" formControlName="fechaVuelo" type="date" autocapitalize="off" maxlength="10" displayFormat="DD/MM/YYYY" doneText="Hecho" cancelText="Cancelar"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input class="form-control" placeholder="Partida" formControlName="partida" type="text" autocapitalize="off" maxlength="16"\n            [class.invalid]="!expedienteForm.controls.partida.valid && (expedienteForm.controls.partida.dirty || submitAttempt)"></ion-input>\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!expedienteForm.controls.partida.valid  && (expedienteForm.controls.partida.dirty || submitAttempt)">\n            <p style="color: #ea6153;">Campo Partida es requerido</p>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <br/>\n          <br/>\n          <br/>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n        </ion-col>\n\n        <ion-col class="signup-col">\n          <button ion-button class="expediente-btn" block clear  (click)="saveExpediente()">Guardar</button>\n        </ion-col>\n\n        <ion-col class="signup-col">\n          <button ion-button class="close-btn" block clear  (click)="close()">Cerrar</button>\n        </ion-col>\n\n        <ion-col class="signup-col">\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/expediente-edit/expediente-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_5__services_expediente_services__["a" /* ExpedienteService */]])
    ], ExpedienteEditPage);
    return ExpedienteEditPage;
}());

//# sourceMappingURL=expediente-edit.js.map

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 228;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/expediente-edit/expediente-edit.module": [
		606,
		9
	],
	"../pages/expedientes/aereo-despacho/aereo-despacho.module": [
		607,
		8
	],
	"../pages/expedientes/dae/dae.module": [
		608,
		7
	],
	"../pages/expedientes/entrega-documentacion/entrega-documentacion.module": [
		609,
		6
	],
	"../pages/expedientes/expedientes.module": [
		610,
		5
	],
	"../pages/expedientes/maritimo-despacho/maritimo-despacho.module": [
		611,
		4
	],
	"../pages/login/login.module": [
		612,
		3
	],
	"../pages/logout/logout.module": [
		613,
		2
	],
	"../pages/register/register.module": [
		614,
		1
	],
	"../pages/usuarios/usuarios.module": [
		615,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 270;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AereoDespachoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AereoDespachoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AereoDespachoPage = /** @class */ (function () {
    function AereoDespachoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AereoDespachoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AereoDespachoPage');
    };
    AereoDespachoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-aereo-despacho',template:/*ion-inline-start:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/expedientes/aereo-despacho/aereo-despacho.html"*/'<!--\n  Generated template for the AereoDespachoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>aereo-despacho</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/expedientes/aereo-despacho/aereo-despacho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AereoDespachoPage);
    return AereoDespachoPage;
}());

//# sourceMappingURL=aereo-despacho.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DaePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DaePage = /** @class */ (function () {
    function DaePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DaePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DaePage');
    };
    DaePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-dae',template:/*ion-inline-start:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/expedientes/dae/dae.html"*/'<!--\n  Generated template for the DaePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>dae</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/expedientes/dae/dae.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DaePage);
    return DaePage;
}());

//# sourceMappingURL=dae.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntregaDocumentacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EntregaDocumentacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntregaDocumentacionPage = /** @class */ (function () {
    function EntregaDocumentacionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EntregaDocumentacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EntregaDocumentacionPage');
    };
    EntregaDocumentacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-entrega-documentacion',template:/*ion-inline-start:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/expedientes/entrega-documentacion/entrega-documentacion.html"*/'<!--\n  Generated template for the EntregaDocumentacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>entrega-documentacion</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/expedientes/entrega-documentacion/entrega-documentacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EntregaDocumentacionPage);
    return EntregaDocumentacionPage;
}());

//# sourceMappingURL=entrega-documentacion.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaritimoDespachoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MaritimoDespachoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaritimoDespachoPage = /** @class */ (function () {
    function MaritimoDespachoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MaritimoDespachoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaritimoDespachoPage');
    };
    MaritimoDespachoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-maritimo-despacho',template:/*ion-inline-start:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/expedientes/maritimo-despacho/maritimo-despacho.html"*/'<!--\n  Generated template for the MaritimoDespachoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>maritimo-despacho</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/expedientes/maritimo-despacho/maritimo-despacho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MaritimoDespachoPage);
    return MaritimoDespachoPage;
}());

//# sourceMappingURL=maritimo-despacho.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(455);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_usuarios_usuarios__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_expedientes_expedientes__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_expedientes_aereo_despacho_aereo_despacho__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_expedientes_dae_dae__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_expedientes_maritimo_despacho_maritimo_despacho__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_expedientes_entrega_documentacion_entrega_documentacion__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_expediente_edit_expediente_edit__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_list_list__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_firestore__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_user_services__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_expediente_services__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_smart_table__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_router__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_logout_logout__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var firebaseConfig = {
    apiKey: "AIzaSyCb7no2ZguQECh7appTgDkrLOrwcW5_9x4",
    authDomain: "duaexpress-online.firebaseapp.com",
    databaseURL: "https://duaexpress-online.firebaseio.com",
    projectId: "duaexpress-online",
    storageBucket: "duaexpress-online.appspot.com",
    messagingSenderId: "1020292615326"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_expedientes_expedientes__["a" /* ExpedientesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_expediente_edit_expediente_edit__["a" /* ExpedienteEditPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_expedientes_aereo_despacho_aereo_despacho__["a" /* AereoDespachoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_expedientes_dae_dae__["a" /* DaePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_expedientes_maritimo_despacho_maritimo_despacho__["a" /* MaritimoDespachoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_expedientes_entrega_documentacion_entrega_documentacion__["a" /* EntregaDocumentacionPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_usuarios_usuarios__["a" /* UsuariosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_logout_logout__["a" /* LogoutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/expediente-edit/expediente-edit.module#ExpedienteEditPageModule', name: 'ExpedienteEditPage', segment: 'expediente-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expedientes/aereo-despacho/aereo-despacho.module#AereoDespachoPageModule', name: 'AereoDespachoPage', segment: 'aereo-despacho', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expedientes/dae/dae.module#DaePageModule', name: 'DaePage', segment: 'dae', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expedientes/entrega-documentacion/entrega-documentacion.module#EntregaDocumentacionPageModule', name: 'EntregaDocumentacionPage', segment: 'entrega-documentacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expedientes/expedientes.module#ExpedientesPageModule', name: 'ExpedientesPage', segment: 'expedientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expedientes/maritimo-despacho/maritimo-despacho.module#MaritimoDespachoPageModule', name: 'MaritimoDespachoPage', segment: 'maritimo-despacho', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuarios/usuarios.module#UsuariosPageModule', name: 'UsuariosPage', segment: 'usuarios', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_24_ng2_smart_table__["a" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_firestore__["AngularFirestoreModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_expedientes_expedientes__["a" /* ExpedientesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_expediente_edit_expediente_edit__["a" /* ExpedienteEditPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_usuarios_usuarios__["a" /* UsuariosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_logout_logout__["a" /* LogoutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_22__services_user_services__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_23__services_expediente_services__["a" /* ExpedienteService */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Expediente; });
var Expediente = /** @class */ (function () {
    function Expediente() {
    }
    return Expediente;
}());

//# sourceMappingURL=expediente.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_expedientes_expedientes__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_usuarios_usuarios__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_logout_logout__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.initializeApp(auth);
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
            { title: 'Expedientes', component: __WEBPACK_IMPORTED_MODULE_4__pages_expedientes_expedientes__["a" /* ExpedientesPage */] },
            { title: 'Usuarios', component: __WEBPACK_IMPORTED_MODULE_5__pages_usuarios_usuarios__["a" /* UsuariosPage */] },
            { title: 'Desconectar', component: __WEBPACK_IMPORTED_MODULE_9__pages_logout_logout__["a" /* LogoutPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function (auth) {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            auth.Session.subscribe(function (session) {
                if (session) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
                }
            });
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth) {
        this.afAuth = afAuth;
    }
    // Registro de usuario
    AuthProvider.prototype.registerUser = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            window.localStorage.setItem('user', JSON.stringify(res));
        }).catch(function (err) { return Promise.reject(err); });
    };
    // Login de usuario
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    Object.defineProperty(AuthProvider.prototype, "Session", {
        // Devuelve la session
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    // Logout de usuario
    AuthProvider.prototype.logout = function () {
        this.afAuth.auth.signOut().then(function () {
            // hemos salido
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["AngularFireAuth"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpedientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_expediente_services__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expediente_edit_expediente_edit__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_global_enum__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExpedientesPage = /** @class */ (function () {
    function ExpedientesPage(navCtrl, navParams, database, expedienteService, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.expedienteService = expedienteService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.expTipoArray = [
            { id: __WEBPACK_IMPORTED_MODULE_5__models_global_enum__["a" /* ExpedienteSubTipo */].DespachoAereoExportacion, label: 'Despacho Aéreo Exportación' },
            { id: __WEBPACK_IMPORTED_MODULE_5__models_global_enum__["a" /* ExpedienteSubTipo */].DespachoAereoImportacion, label: 'Despacho Aéreo Importación' },
            { id: __WEBPACK_IMPORTED_MODULE_5__models_global_enum__["a" /* ExpedienteSubTipo */].DocEntega, label: 'Entrega Documentación' },
            { id: __WEBPACK_IMPORTED_MODULE_5__models_global_enum__["a" /* ExpedienteSubTipo */].DocRecogida, label: 'Recogida Documentos' },
            { id: __WEBPACK_IMPORTED_MODULE_5__models_global_enum__["a" /* ExpedienteSubTipo */].DAE, label: 'DAE' },
            { id: __WEBPACK_IMPORTED_MODULE_5__models_global_enum__["a" /* ExpedienteSubTipo */].RevisionFisica, label: 'Revisión Física' }
        ];
        this.settings = {
            actions: {
                columnTitle: 'Acciones',
                position: 'right',
                add: false
            },
            columns: {
                empresa: {
                    title: 'Empresa',
                    width: '18%',
                },
                numExpediente: {
                    title: 'Nº Expediente',
                    width: '18%',
                },
                numConocimiento: {
                    title: 'Nº Conocimiento',
                    width: '18%',
                },
                referencia: {
                    title: 'Referencia',
                    width: '18%',
                },
                fecha: {
                    title: 'Fecha',
                    width: '18%',
                }
            },
            edit: {
                confirmSave: true,
                editButtonContent: '<center class="icon-edit">Editar</center>',
                saveButtonContent: '<center class="icon-acept">Aceptar</center>',
                cancelButtonContent: '<center class="icon-close">Cancelar</center>'
            },
            delete: {
                confirmDelete: true,
                deleteButtonContent: '<center class="icon-trash">Borrar</center>',
                cancelButtonContent: '<center class="icon-close">Cancelar</center>'
            },
            attr: {
                class: 'table table-bordered'
            },
        };
        this.expedientes = expedienteService.getExpedientes().valueChanges();
    }
    ExpedientesPage.prototype.ionViewDidLoad = function () { };
    ExpedientesPage.prototype.newExpediente = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__expediente_edit_expediente_edit__["a" /* ExpedienteEditPage */], {});
    };
    ExpedientesPage.prototype.editExpediente = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__expediente_edit_expediente_edit__["a" /* ExpedienteEditPage */], { idExpediente: event.data.uid });
    };
    ExpedientesPage.prototype.updateExpediente = function (event) {
        if (window.confirm('¿Estas seguro que quieres modificar el expediente?')) {
            //console.log(event.newData.id);
            var expediente = event.newData;
            expediente.id = event.data.id;
            this.expedienteService.updateExpediente(expediente);
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    ExpedientesPage.prototype.deleteExpediente = function (event) {
        if (window.confirm('¿Estas seguro que quieres borrar el expediente seleccionado?')) {
            console.log(event.data.uid);
            this.expedienteService.deleteExpediente(event.data.id);
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    ExpedientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-expedientes',template:/*ion-inline-start:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/expedientes/expedientes.html"*/'\n<page-home></page-home>\n\n<ion-content class="top120" padding>\n  <div class="module-title">\n    <h2>Expedientes</h2>\n  </div>\n\n  <div>\n    <button class="form-control button-new" (click)="newExpediente($event)">Nuevo Expediente</button>\n    <select class="form-control">\n      <option *ngFor="let expTipo of expTipoArray" [ngValue]="expTipo.id">{{expTipo.label}}</option>\n    </select>\n  </div>\n\n  <div>\n    <ng2-smart-table class="form-control" (editConfirm)="updateExpediente($event)" (deleteConfirm)="deleteExpediente($event)"\n      (userRowSelect)="editExpediente($event)" [settings]="settings" [source]="expedientes | async">\n    </ng2-smart-table>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/expedientes/expedientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_3__services_expediente_services__["a" /* ExpedienteService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ExpedientesPage);
    return ExpedientesPage;
}());

//# sourceMappingURL=expedientes.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
    }
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.user.email && this.user.password) {
            this.auth.loginUser(this.user.email, this.user.password).then(function (user) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            })
                .catch(function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: err.message,
                    buttons: ['Aceptar']
                });
                alert.present();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: "Complete Email y Password",
                buttons: ['Aceptar']
            });
            alert_1.present();
        }
    };
    LoginPage.prototype.signin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */], {
            emailPresent: this.user.email,
            passwordPresent: this.user.password,
            idUser: null
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/login/login.html"*/'<ion-content class="form-content" padding>\n  <div class="wrapper">\n    <form class="form-signin">\n      <ion-row>\n        <ion-col>\n          <img class="logo" src="assets/imgs/logoL.jpg" />\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input class="form-control" placeholder="Email" [(ngModel)]="user.email" name="email" type="text" autocapitalize="off" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" type="password" placeholder="Password" name="password" [(ngModel)]="user.password" required></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <br/><br/>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" (click)="login()">Entrar</button>\n          <button ion-button class="register-btn" block clear  (click)="signin()">Registrarse</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_services__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_global_enum__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsuariosPage = /** @class */ (function () {
    function UsuariosPage(navCtrl, navParams, database, userService, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.userService = userService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.settings = {
            //hideSubHeader: true,//Borrado cabecera búsquedas
            actions: {
                columnTitle: 'Acciones',
                position: 'right',
                add: false,
            },
            columns: {
                name: {
                    title: 'Nombre',
                    width: '15%',
                },
                company: {
                    title: 'Empresa',
                    width: '15%',
                },
                cif: {
                    title: 'CIF',
                    width: '8%',
                },
                email: {
                    title: 'Email',
                    editable: false,
                    width: '15%',
                },
                emailNotif: {
                    title: 'Email Notificaciones',
                    width: '15%',
                },
                tel: {
                    title: 'Telefono',
                    width: '10%',
                },
                active: {
                    title: 'Activo',
                    filter: false,
                    type: 'html',
                    valuePrepareFunction: function (value) { return value === true ? 'Sí' : 'No'; },
                    editor: {
                        type: 'list',
                        config: {
                            list: [{ value: true, title: 'Sí' }, { value: false, title: 'No' }],
                        },
                    },
                    width: '5%',
                },
                profile: {
                    title: 'Perfil',
                    filter: false,
                    type: 'html',
                    valuePrepareFunction: function (value) { return value === __WEBPACK_IMPORTED_MODULE_4__models_global_enum__["b" /* Profile */].Administrator ? 'Administrador' : 'Usuario'; },
                    editor: {
                        type: 'list',
                        config: {
                            list: [{ value: __WEBPACK_IMPORTED_MODULE_4__models_global_enum__["b" /* Profile */].User, title: 'Usuario' }, { value: __WEBPACK_IMPORTED_MODULE_4__models_global_enum__["b" /* Profile */].Administrator, title: 'Administrador' }],
                        },
                    },
                    width: '8%',
                }
            },
            edit: {
                confirmSave: true,
                editButtonContent: '<center class="icon-edit">Editar</center>',
                saveButtonContent: '<center class="icon-acept">Aceptar</center>',
                cancelButtonContent: '<center class="icon-close">Cancelar</center>'
            },
            delete: {
                confirmDelete: true,
                deleteButtonContent: '<center class="icon-trash">Borrar</center>',
                cancelButtonContent: '<center class="icon-close">Cancelar</center>'
            },
            attr: {
                class: 'table table-bordered'
            },
        };
        this.users = userService.getAppUsers();
    }
    UsuariosPage.prototype.ionViewDidLoad = function () { };
    UsuariosPage.prototype.updateUser = function (event) {
        //console.log(event.newData.uid);
        if (window.confirm('¿Estas seguro que quieres modificar el usuario?')) {
            var user = event.newData;
            user.uid = event.data.uid;
            this.userService.updateUser(user);
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    UsuariosPage.prototype.editUser = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */], { idUser: event.data.uid });
    };
    UsuariosPage.prototype.deleteUser = function (event) {
        if (window.confirm('¿Estas seguro que quieres borrar el usuario seleccionado?')) {
            console.log(event.data.uid);
            this.userService.deleteUser(event.data.uid);
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    UsuariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-usuarios',template:/*ion-inline-start:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/usuarios/usuarios.html"*/'\n<page-home></page-home>\n\n<ion-content class="top120" padding>\n  <div class="module-title">\n    <h2>Usuarios</h2>\n  </div>\n\n  <div>\n    <ng2-smart-table (editConfirm)="updateUser($event)" (deleteConfirm)="deleteUser($event)"  (userRowSelect)="editUser($event)"\n      [settings]="settings" [source]="users | async">\n  </ng2-smart-table>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/lydia/Documents/wksDuaIonic/appduaexpress/appduaexpress/src/pages/usuarios/usuarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_3__services_user_services__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], UsuariosPage);
    return UsuariosPage;
}());

//# sourceMappingURL=usuarios.js.map

/***/ })

},[333]);
//# sourceMappingURL=main.js.map