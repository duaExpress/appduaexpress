webpackJsonp([10],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expedientes_expedientes__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuarios_usuarios__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout_logout__ = __webpack_require__(123);
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
            selector: 'page-home',template:/*ion-inline-start:"/home/alex/projects/duaexpress/appduaexpress/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar class="home-navbar">\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      <img class="logo" src="assets/imgs/duaexpress.png"/>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button class="home-button" (click)="home()">Home</button>\n\n      <button ion-button class="home-button" (click)="records()">Expedientes</button>\n\n      <button ion-button class="home-button" (click)="users()">Usuarios</button>\n\n      <button ion-button class="home-button" (click)="logout()">Desconectar</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n'/*ion-inline-end:"/home/alex/projects/duaexpress/appduaexpress/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_global_enum__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_services__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__usuarios_usuarios__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operators__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(93);
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
                name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                cif: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(9), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[a-zA-Z]{1}[0-9]{8}'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                company: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                postalCode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[0-9]{5}'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                tel: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[0-9\- ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
            });
        }
        else {
            this.usuario = null;
            this.registerForm = formBuilder.group({
                email: [navParams.get("emailPresent"), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern(emailRegex), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                password: [navParams.get("passwordPresent"), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                cif: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(9), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[a-zA-Z]{1}[0-9]{8}'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                company: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                postalCode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[0-9]{5}'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
                tel: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[0-9\- ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])],
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
            selector: 'page-register',template:/*ion-inline-start:"/home/alex/projects/duaexpress/appduaexpress/src/pages/register/register.html"*/'<!--\nGenerated template for the RegisterPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n\n<p *ngIf="submitAttempt" style="color: #ea6153;">Por favor, rellena todos los campos corectamente</p>\n<ion-content padding class="form-content">\n  <div class="wrapper" *ngIf="isUserEditable">\n    <form class="form-app"  *ngIf="usuario | async; else loading" [formGroup]="registerForm">\n      <ion-row>\n        <ion-title class="form-title">Formulario de Registro</ion-title>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input class="form-control" placeholder="Nombre" formControlName="name" type="text" autocapitalize="off" maxlength="70"\n              [class.invalid]="!registerForm.controls.name.valid && (registerForm.controls.name.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.name.valid  && (registerForm.controls.name.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo nombre es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="CIF" formControlName="cif" type="text" autocapitalize="off" maxlength="9"\n              [class.invalid]="!registerForm.controls.cif.valid && (registerForm.controls.cif.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.cif.valid  && (registerForm.controls.cif.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Por favor, inserta un CIF válido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Empresa" formControlName="company" type="text" autocapitalize="off" maxlength="50"\n              [class.invalid]="!registerForm.controls.company.valid && (registerForm.controls.company.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.company.valid  && (registerForm.controls.company.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo empresa es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Direccion" formControlName="address" type="text" autocapitalize="off" maxlength="70"\n              [class.invalid]="!registerForm.controls.address.valid && (registerForm.controls.address.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.address.valid  && (registerForm.controls.address.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo dirección es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Código Postal" formControlName="postalCode" type="text" autocapitalize="off" maxlength="5"\n              [class.invalid]="!registerForm.controls.postalCode.valid && (registerForm.controls.postalCode.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.postalCode.valid  && (registerForm.controls.postalCode.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Por favor, inserta un código postal válido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Ciudad" formControlName="city" type="text" autocapitalize="off" maxlength="50"\n              [class.invalid]="!registerForm.controls.city.valid && (registerForm.controls.city.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.city.valid  && (registerForm.controls.city.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo ciudad es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Provincia" formControlName="state" type="text" autocapitalize="off" maxlength="50"\n              [class.invalid]="!registerForm.controls.state.valid && (registerForm.controls.state.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.state.valid  && (registerForm.controls.state.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo provincia es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Teléfono" formControlName="tel" type="text" autocapitalize="off" maxlength="30"\n              [class.invalid]="!registerForm.controls.tel.valid && (registerForm.controls.tel.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.tel.valid  && (registerForm.controls.tel.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Por favor, inserta un número de teléfono válido</p>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n        </ion-col>\n\n        <ion-col class="signup-col">\n          <button ion-button class="register-btn" block clear  (click)="updateUser()">Actualizar</button>\n        </ion-col>\n\n        <ion-col class="signup-col">\n          <button ion-button class="close-btn" block clear  (click)="hide()">Cerrar</button>\n        </ion-col>\n\n        <ion-col class="signup-col">\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n\n\n  <div class="wrapper" *ngIf="!isUserEditable"><!-- puesto aquí por el observable usuario . Poner la parte común en un template y añadir email + password -->\n    <form class="form-app" [formGroup]="registerForm">\n      <ion-row>\n        <ion-title class="form-title">Formulario de Registro</ion-title>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item *ngIf="!isUserEditable">\n              <ion-input class="form-control" placeholder="Email" formControlName="email" type="text" autocapitalize="off" maxlength="50"\n              [class.invalid]="!registerForm.controls.email.valid && (registerForm.controls.email.dirty || submitAttempt)" disabled="{{isUserEditable}}"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!isUserEditable && !registerForm.controls.email.valid  && (registerForm.controls.email.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Por favor, inserta un email válido</p>\n            </ion-item>\n\n            <ion-item *ngIf="!isUserEditable">\n              <ion-input class="form-control" placeholder="Password" type="password" formControlName="password"\n              [class.invalid]="!registerForm.controls.password.valid && (registerForm.controls.password.dirty || submitAttempt)" disabled="{{isUserEditable}}"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!isUserEditable && !registerForm.controls.password.valid  && (registerForm.controls.password.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo password es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Nombre" formControlName="name" type="text" autocapitalize="off" maxlength="70"\n              [class.invalid]="!registerForm.controls.name.valid && (registerForm.controls.name.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.name.valid  && (registerForm.controls.name.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo nombre es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="CIF" formControlName="cif" type="text" autocapitalize="off" maxlength="9"\n              [class.invalid]="!registerForm.controls.cif.valid && (registerForm.controls.cif.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.cif.valid  && (registerForm.controls.cif.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Por favor, inserta un CIF válido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Empresa" formControlName="company" type="text" autocapitalize="off" maxlength="50"\n              [class.invalid]="!registerForm.controls.company.valid && (registerForm.controls.company.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.company.valid  && (registerForm.controls.company.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo empresa es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Direccion" formControlName="address" type="text" autocapitalize="off" maxlength="70"\n              [class.invalid]="!registerForm.controls.address.valid && (registerForm.controls.address.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.address.valid  && (registerForm.controls.address.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo dirección es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Código Postal" formControlName="postalCode" type="text" autocapitalize="off" maxlength="5"\n              [class.invalid]="!registerForm.controls.postalCode.valid && (registerForm.controls.postalCode.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.postalCode.valid  && (registerForm.controls.postalCode.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Por favor, inserta un código postal válido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Ciudad" formControlName="city" type="text" autocapitalize="off" maxlength="50"\n              [class.invalid]="!registerForm.controls.city.valid && (registerForm.controls.city.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.city.valid  && (registerForm.controls.city.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo ciudad es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Provincia" formControlName="state" type="text" autocapitalize="off" maxlength="50"\n              [class.invalid]="!registerForm.controls.state.valid && (registerForm.controls.state.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.state.valid  && (registerForm.controls.state.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Campo provincia es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input class="form-control" placeholder="Teléfono" formControlName="tel" type="text" autocapitalize="off" maxlength="30"\n              [class.invalid]="!registerForm.controls.tel.valid && (registerForm.controls.tel.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!registerForm.controls.tel.valid  && (registerForm.controls.tel.dirty || submitAttempt)">\n              <p style="color: #ea6153;">Por favor, inserta un número de teléfono válido</p>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n        </ion-col>\n\n        <ion-col class="signup-col">\n          <button ion-button class="register-btn" block clear  (click)="registerUser()">Registrarse</button>\n        </ion-col>\n\n        <ion-col class="signup-col">\n          <button ion-button class="close-btn" block clear  (click)="close()">Cerrar</button>\n        </ion-col>\n\n        <ion-col class="signup-col">\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>\n\n<ng-template #loading>\n  Cargando Usuario....\n</ng-template>\n'/*ion-inline-end:"/home/alex/projects/duaexpress/appduaexpress/src/pages/register/register.html"*/,
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

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(93);
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
            selector: 'page-logout',template:/*ion-inline-start:"/home/alex/projects/duaexpress/appduaexpress/src/pages/logout/logout.html"*/'\n'/*ion-inline-end:"/home/alex/projects/duaexpress/appduaexpress/src/pages/logout/logout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpedienteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(6);
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

/***/ 180:
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

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(10);
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

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpedienteEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_expediente__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_expediente_services__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__expedientes_expedientes__ = __webpack_require__(92);
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
            numExpediente: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].maxLength(35), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required])],
            referencia: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].maxLength(35), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required])],
            numConocimiento: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].maxLength(35), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required])],
            empresa: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required])],
            partida: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].maxLength(16), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required])],
            fechaVuelo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required])],
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
            selector: 'page-expediente-edit',template:/*ion-inline-start:"/home/alex/projects/duaexpress/appduaexpress/src/pages/expediente-edit/expediente-edit.html"*/'<!--\nGenerated template for the ExpedienteEditPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n\n<p *ngIf="submitAttempt" style="color: #ea6153;">Por favor, rellena todos los campos corectamente</p>\n<ion-content padding class="form-content">\n  <div class="wrapper">\n    <form class="form-app" [formGroup]="expedienteForm">\n      <ion-row>\n        <ion-col>\n          <h2 class="text-center">Formulario Expediente</h2>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-input class="form-control" placeholder="Empresa" formControlName="empresa" type="text" autocapitalize="off" maxlength="70"\n            [class.invalid]="!expedienteForm.controls.empresa.valid && (expedienteForm.controls.empresa.dirty || submitAttempt)"></ion-input>\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!expedienteForm.controls.empresa.valid  && (expedienteForm.controls.empresa.dirty || submitAttempt)">\n            <p style="color: #ea6153;">Campo empresa es requerido</p>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input class="form-control" placeholder="Nº Expediente" formControlName="numExpediente" type="text" autocapitalize="off" maxlength="35"\n            [class.invalid]="!expedienteForm.controls.numExpediente.valid && (expedienteForm.controls.numExpediente.dirty || submitAttempt)"></ion-input>\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!expedienteForm.controls.numExpediente.valid  && (expedienteForm.controls.numExpediente.dirty || submitAttempt)">\n            <p style="color: #ea6153;">Campo Número de Expediente es requerido</p>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n          <ion-input class="form-control" placeholder="Nº Conocimiento" formControlName="numConocimiento" type="text" autocapitalize="off" maxlength="35"\n          [class.invalid]="!expedienteForm.controls.numConocimiento.valid && (expedienteForm.controls.numConocimiento.dirty || submitAttempt)"></ion-input>\n        </ion-item>\n\n        <ion-item class="invalid" *ngIf="!expedienteForm.controls.numConocimiento.valid  && (expedienteForm.controls.numConocimiento.dirty || submitAttempt)">\n          <p style="color: #ea6153;">Campo Número de Conocimiento es requerido</p>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-input class="form-control" placeholder="Referencia" formControlName="referencia" type="text" autocapitalize="off" maxlength="35"\n            [class.invalid]="!expedienteForm.controls.referencia.valid && (expedienteForm.controls.referencia.dirty || submitAttempt)"></ion-input>\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!expedienteForm.controls.referencia.valid  && (expedienteForm.controls.referencia.dirty || submitAttempt)">\n            <p style="color: #ea6153;">Campo Referencia es requerido</p>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-datetime class="form-control" placeholder="Fecha de Vuelo" formControlName="fechaVuelo" type="date" autocapitalize="off" maxlength="10" displayFormat="DD/MM/YYYY" doneText="Hecho" cancelText="Cancelar"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input class="form-control" placeholder="Partida" formControlName="partida" type="text" autocapitalize="off" maxlength="16"\n            [class.invalid]="!expedienteForm.controls.partida.valid && (expedienteForm.controls.partida.dirty || submitAttempt)"></ion-input>\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!expedienteForm.controls.partida.valid  && (expedienteForm.controls.partida.dirty || submitAttempt)">\n            <p style="color: #ea6153;">Campo Partida es requerido</p>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <br/>\n          <br/>\n          <br/>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n        </ion-col>\n\n        <ion-col class="signup-col">\n          <button ion-button class="expediente-btn" block clear  (click)="saveExpediente()">Guardar</button>\n        </ion-col>\n\n        <ion-col class="signup-col">\n          <button ion-button class="close-btn" block clear  (click)="close()">Cerrar</button>\n        </ion-col>\n\n        <ion-col class="signup-col">\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/alex/projects/duaexpress/appduaexpress/src/pages/expediente-edit/expediente-edit.html"*/,
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

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AereoDespachoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_expediente__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_datepicker__ = __webpack_require__(434);
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
    function AereoDespachoPage(navCtrl, navParams, localeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localeService = localeService;
        this.dateFormat = 'DD/MM/YYYY';
        var locale = 'es';
        this.expediente = new __WEBPACK_IMPORTED_MODULE_2__models_expediente__["a" /* Expediente */]();
        this.bsConfig = Object.assign({}, {
            containerClass: 'theme-green',
            dateInputFormat: this.dateFormat,
        });
        this.localeService.use(locale);
        __WEBPACK_IMPORTED_MODULE_3_moment__["locale"](locale);
    }
    AereoDespachoPage.prototype.ionViewDidLoad = function () { };
    AereoDespachoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-aereo-despacho',template:/*ion-inline-start:"/home/alex/projects/duaexpress/appduaexpress/src/pages/expedientes/aereo-despacho/aereo-despacho.html"*/'<page-home></page-home>\n<ion-content padding>\n  <div class = "tabinator">\n    <div class="module-title">\n          <h2>Despacho Aereo</h2>\n    </div>\n\n    <input type = "radio" id = "tabExpediente" name = "tabs" checked>\n    <label for = "tabExpediente">Expediente</label>\n    <input type = "radio" id = "tabFichCli" name = "tabs">\n    <label for = "tabFichCli">Ficheros Cliente</label>\n    <input type = "radio" id = "tabFichAdmin" name = "tabs">\n    <label for = "tabFichAdmin">Ficheros Admin</label>\n    <input type = "radio" id = "tabIndicaciones" name = "tabs">\n    <label for = "tabIndicaciones">Indicaciones</label>\n    <input type = "radio" id = "tabIncidencias" name = "tabs">\n    <label for = "tabIncidencias">Incidencias</label>\n    <input type = "radio" id = "tabVeriValor" name = "tabs">\n    <label for = "tabVeriValor">Verificaci&oacute;n Valor</label>\n    <input type = "radio" id = "tabVerIva" name = "tabs">\n    <label for = "tabVerIva">Verificaci&oacute;n IVA</label>\n    <input type = "radio" id = "tabVerExp" name = "tabs">\n    <label for = "tabVerExp">Verificaci&oacute;n Exp</label>\n    <input type = "radio" id = "tabServicios" name = "tabs">\n    <label for = "tabServicios">Servicios</label>\n\n    <div id = "content_Expediente">\n      <div class="row">\n        <div class="col-3 form-group">\n          <span class="label-text"><B>Nº Expediente:</B></span>\n          <input type="text" [(ngModel)]="expediente.numExpediente" class="form-control" required />\n        </div>\n        <div class="col-3 form-group">\n          <span class="label-text"><B>Nº Conocimiento:</B></span>\n          <input type="text" [(ngModel)]="expediente.numConocimiento" class="form-control" required />\n        </div>\n        <div class="col-3 form-group">\n          <span class="label-text"><B>Referencia:</B></span>\n          <input type="text" [(ngModel)]="expediente.referencia" class="form-control" required />\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="col-3 form-group">\n          <span class="label-text"><B>Fecha de vuelo:</B></span>\n          <input type="text" placeholder="" [(ngModel)]="expediente.fechaVuelo" class="form-control"\n            bsDatepicker [bsConfig]="bsConfig" required />\n        </div>\n        <div class="col-3 form-group">\n          <span class="label-text"><B>Partida:</B></span>\n          <input type="text" [(ngModel)]="expediente.partida" class="form-control" required />\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="col-3 form-group">\n          <span class="label-text"><B>Peso:</B></span>\n          <input type="text" [(ngModel)]="expediente.peso" class="form-control" required />\n        </div>\n        <div class="col-3 form-group">\n          <span class="label-text"><B>Bultos:</B></span>\n          <input type="text" [(ngModel)]="expediente.bultos" class="form-control" required />\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="col-3 form-group">\n          <span class="label-text"><B>¿La mercancía va etiquetada?:</B></span>\n          <select [(ngModel)]="expediente.mercanciaEtiq">\n            <option>SI</option>\n            <option>NO</option>\n          </select>\n        </div>\n        <div class="col-3 form-group">\n          <span class="label-text"><B>¿Impresión de etiquetas?:</B></span>\n          <select [(ngModel)]="expediente.impresionEtiq">\n            <option>SI</option>\n            <option>NO</option>\n          </select>\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="col-3 form-group">\n          <span class="label-text"><B>¿Lleva EUR-1?:</B></span>\n          <select [(ngModel)]="expediente.llevaEur1">\n            <option>SI</option>\n            <option>NO</option>\n          </select>\n        </div>\n        <div class="col-3 form-group">\n          <span class="label-text"><B>¿Necesita Paraduanero?:</B></span>\n          <select [(ngModel)]="expediente.paraduanero">\n            <option>SI</option>\n            <option>NO</option>\n          </select>\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="col-3 form-group">\n          <span class="label-text"><B>¿SOIVRE?:</B></span>\n          <select [(ngModel)]="expediente.paraduanero">\n            <option>SI</option>\n            <option>NO</option>\n          </select>\n        </div>\n        <div class="col-3 form-group">\n          <span class="label-text"><B>¿CITES?:</B></span>\n          <select [(ngModel)]="expediente.cites">\n            <option>SI</option>\n            <option>NO</option>\n          </select>\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="col-3 form-group">\n          <span class="label-text"><B>¿FITO?:</B></span>\n          <select [(ngModel)]="expediente.cites">\n            <option>SI</option>\n            <option>NO</option>\n          </select>\n        </div>\n        <div class="col-3 form-group">\n          <span class="label-text"><B>¿Sanidad?:</B></span>\n          <select [(ngModel)]="expediente.sanidad">\n            <option>SI</option>\n            <option>NO</option>\n          </select>\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="col-3 form-group">\n          <span class="label-text"><B>¿Sanidad Animal?:</B></span>\n          <select [(ngModel)]="expediente.sanidadAnimal">\n            <option>SI</option>\n            <option>NO</option>\n          </select>\n        </div>\n        <div class="col-3 form-group">\n          <span class="label-text"><B>¿Farmacia?:</B></span>\n          <select [(ngModel)]="expediente.farmacia">\n            <option>SI</option>\n            <option>NO</option>\n          </select>\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="col-3 form-group">\n          <span class="label-text"><B>¿DAE?:</B></span>\n          <select [(ngModel)]="expediente.dae">\n            <option>SI</option>\n            <option>NO</option>\n          </select>\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="col-3 form-group">\n          <span class="label-text"><B>Instrucciones:</B></span>\n          <input type="text" [(ngModel)]="expediente.instrucciones" class="form-control" required />\n        </div>\n      </div>\n    </div>\n\n    <div id = "content_FichCli">\n      <p>\n        Fichero del Cliente\n      </p>\n    </div>\n\n    <div id = "content_FichAdmin">\n      <p>Ficheros Admin\n\n      </p>\n    </div>\n    <div id = "content_Indicaciones">\n      <p>Indicaciones\n      </p>\n    </div>\n    <div id = "content_Incidencias">\n        <p>Aqui van las incidencias\n        </p>\n    </div>\n    <div id = "content_VerValor">\n        <p>Verificacion Valor\n        </p>\n    </div>\n    <div id = "content_VerIVA">\n        <p>Verificacion IVA\n        </p>\n    </div>\n    <div id = "content_VerExp">\n        <p>Verificacion Exp\n        </p>\n    </div>\n    <div id = "content_Servicios">\n        <p>Servicios\n        </p>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/alex/projects/duaexpress/appduaexpress/src/pages/expedientes/aereo-despacho/aereo-despacho.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_datepicker__["b" /* BsLocaleService */]])
    ], AereoDespachoPage);
    return AereoDespachoPage;
}());

//# sourceMappingURL=aereo-despacho.js.map

/***/ }),

/***/ 260:
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
webpackEmptyAsyncContext.id = 260;

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/expediente-edit/expediente-edit.module": [
		838,
		9
	],
	"../pages/expedientes/aereo-despacho/aereo-despacho.module": [
		839,
		8
	],
	"../pages/expedientes/dae/dae.module": [
		840,
		7
	],
	"../pages/expedientes/entrega-documentacion/entrega-documentacion.module": [
		841,
		6
	],
	"../pages/expedientes/expedientes.module": [
		842,
		5
	],
	"../pages/expedientes/maritimo-despacho/maritimo-despacho.module": [
		843,
		4
	],
	"../pages/login/login.module": [
		844,
		3
	],
	"../pages/logout/logout.module": [
		845,
		2
	],
	"../pages/register/register.module": [
		846,
		1
	],
	"../pages/usuarios/usuarios.module": [
		847,
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
webpackAsyncContext.id = 302;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 305:
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

/***/ 437:
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

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
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
            selector: 'page-dae',template:/*ion-inline-start:"/home/alex/projects/duaexpress/appduaexpress/src/pages/expedientes/dae/dae.html"*/'\n<page-home></page-home>\n\n<ion-content padding>\n\n    <tabset>\n        <tab heading="Tab1" customClass="tab-style">\n            <div class="tab-page-content">\n                <!-- content-->\n                ddmdmdd\n            </div>\n        </tab>\n        <tab heading="Tab2" customClass="tab-style">\n            <div class="tab-page-content">\n                <!-- content-->\n                fffff\n            </div>\n        </tab>\n      </tabset>\n\n</ion-content>\n'/*ion-inline-end:"/home/alex/projects/duaexpress/appduaexpress/src/pages/expedientes/dae/dae.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DaePage);
    return DaePage;
}());

//# sourceMappingURL=dae.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntregaDocumentacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
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
            selector: 'page-entrega-documentacion',template:/*ion-inline-start:"/home/alex/projects/duaexpress/appduaexpress/src/pages/expedientes/entrega-documentacion/entrega-documentacion.html"*/'<!--\n  Generated template for the EntregaDocumentacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>entrega-documentacion</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/alex/projects/duaexpress/appduaexpress/src/pages/expedientes/entrega-documentacion/entrega-documentacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EntregaDocumentacionPage);
    return EntregaDocumentacionPage;
}());

//# sourceMappingURL=entrega-documentacion.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaritimoDespachoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
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
            selector: 'page-maritimo-despacho',template:/*ion-inline-start:"/home/alex/projects/duaexpress/appduaexpress/src/pages/expedientes/maritimo-despacho/maritimo-despacho.html"*/'<!--\n  Generated template for the MaritimoDespachoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>maritimo-despacho</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/alex/projects/duaexpress/appduaexpress/src/pages/expedientes/maritimo-despacho/maritimo-despacho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MaritimoDespachoPage);
    return MaritimoDespachoPage;
}());

//# sourceMappingURL=maritimo-despacho.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(669);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_usuarios_usuarios__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_expedientes_expedientes__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_expedientes_aereo_despacho_aereo_despacho__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_expedientes_dae_dae__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_expedientes_maritimo_despacho_maritimo_despacho__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_expedientes_entrega_documentacion_entrega_documentacion__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_expediente_edit_expediente_edit__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_services__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_expediente_services__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_smart_table__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_router__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ng_bootstrap_ng_bootstrap__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_bootstrap__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_logout_logout__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ngx_bootstrap_chronos__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_bootstrap_locale__ = __webpack_require__(543);
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
Object(__WEBPACK_IMPORTED_MODULE_28_ngx_bootstrap_chronos__["a" /* defineLocale */])('es', __WEBPACK_IMPORTED_MODULE_29_ngx_bootstrap_locale__["b" /* esLocale */]);
Object(__WEBPACK_IMPORTED_MODULE_28_ngx_bootstrap_chronos__["a" /* defineLocale */])('en', __WEBPACK_IMPORTED_MODULE_29_ngx_bootstrap_locale__["a" /* enGbLocale */]);
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
                __WEBPACK_IMPORTED_MODULE_27__pages_logout_logout__["a" /* LogoutPage */]
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
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_23_ng2_smart_table__["a" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_25__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_26_ngx_bootstrap__["b" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_24__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_26_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot()
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
                __WEBPACK_IMPORTED_MODULE_9__pages_expedientes_aereo_despacho_aereo_despacho__["a" /* AereoDespachoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_expedientes_dae_dae__["a" /* DaePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_logout_logout__["a" /* LogoutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_21__services_user_services__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_22__services_expediente_services__["a" /* ExpedienteService */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 307,
	"./af.js": 307,
	"./ar": 308,
	"./ar-dz": 309,
	"./ar-dz.js": 309,
	"./ar-kw": 310,
	"./ar-kw.js": 310,
	"./ar-ly": 311,
	"./ar-ly.js": 311,
	"./ar-ma": 312,
	"./ar-ma.js": 312,
	"./ar-sa": 313,
	"./ar-sa.js": 313,
	"./ar-tn": 314,
	"./ar-tn.js": 314,
	"./ar.js": 308,
	"./az": 315,
	"./az.js": 315,
	"./be": 316,
	"./be.js": 316,
	"./bg": 317,
	"./bg.js": 317,
	"./bm": 318,
	"./bm.js": 318,
	"./bn": 319,
	"./bn.js": 319,
	"./bo": 320,
	"./bo.js": 320,
	"./br": 321,
	"./br.js": 321,
	"./bs": 322,
	"./bs.js": 322,
	"./ca": 323,
	"./ca.js": 323,
	"./cs": 324,
	"./cs.js": 324,
	"./cv": 325,
	"./cv.js": 325,
	"./cy": 326,
	"./cy.js": 326,
	"./da": 327,
	"./da.js": 327,
	"./de": 328,
	"./de-at": 329,
	"./de-at.js": 329,
	"./de-ch": 330,
	"./de-ch.js": 330,
	"./de.js": 328,
	"./dv": 331,
	"./dv.js": 331,
	"./el": 332,
	"./el.js": 332,
	"./en-SG": 333,
	"./en-SG.js": 333,
	"./en-au": 334,
	"./en-au.js": 334,
	"./en-ca": 335,
	"./en-ca.js": 335,
	"./en-gb": 336,
	"./en-gb.js": 336,
	"./en-ie": 337,
	"./en-ie.js": 337,
	"./en-il": 338,
	"./en-il.js": 338,
	"./en-nz": 339,
	"./en-nz.js": 339,
	"./eo": 340,
	"./eo.js": 340,
	"./es": 341,
	"./es-do": 342,
	"./es-do.js": 342,
	"./es-us": 343,
	"./es-us.js": 343,
	"./es.js": 341,
	"./et": 344,
	"./et.js": 344,
	"./eu": 345,
	"./eu.js": 345,
	"./fa": 346,
	"./fa.js": 346,
	"./fi": 347,
	"./fi.js": 347,
	"./fo": 348,
	"./fo.js": 348,
	"./fr": 349,
	"./fr-ca": 350,
	"./fr-ca.js": 350,
	"./fr-ch": 351,
	"./fr-ch.js": 351,
	"./fr.js": 349,
	"./fy": 352,
	"./fy.js": 352,
	"./ga": 353,
	"./ga.js": 353,
	"./gd": 354,
	"./gd.js": 354,
	"./gl": 355,
	"./gl.js": 355,
	"./gom-latn": 356,
	"./gom-latn.js": 356,
	"./gu": 357,
	"./gu.js": 357,
	"./he": 358,
	"./he.js": 358,
	"./hi": 359,
	"./hi.js": 359,
	"./hr": 360,
	"./hr.js": 360,
	"./hu": 361,
	"./hu.js": 361,
	"./hy-am": 362,
	"./hy-am.js": 362,
	"./id": 363,
	"./id.js": 363,
	"./is": 364,
	"./is.js": 364,
	"./it": 365,
	"./it-ch": 366,
	"./it-ch.js": 366,
	"./it.js": 365,
	"./ja": 367,
	"./ja.js": 367,
	"./jv": 368,
	"./jv.js": 368,
	"./ka": 369,
	"./ka.js": 369,
	"./kk": 370,
	"./kk.js": 370,
	"./km": 371,
	"./km.js": 371,
	"./kn": 372,
	"./kn.js": 372,
	"./ko": 373,
	"./ko.js": 373,
	"./ku": 374,
	"./ku.js": 374,
	"./ky": 375,
	"./ky.js": 375,
	"./lb": 376,
	"./lb.js": 376,
	"./lo": 377,
	"./lo.js": 377,
	"./lt": 378,
	"./lt.js": 378,
	"./lv": 379,
	"./lv.js": 379,
	"./me": 380,
	"./me.js": 380,
	"./mi": 381,
	"./mi.js": 381,
	"./mk": 382,
	"./mk.js": 382,
	"./ml": 383,
	"./ml.js": 383,
	"./mn": 384,
	"./mn.js": 384,
	"./mr": 385,
	"./mr.js": 385,
	"./ms": 386,
	"./ms-my": 387,
	"./ms-my.js": 387,
	"./ms.js": 386,
	"./mt": 388,
	"./mt.js": 388,
	"./my": 389,
	"./my.js": 389,
	"./nb": 390,
	"./nb.js": 390,
	"./ne": 391,
	"./ne.js": 391,
	"./nl": 392,
	"./nl-be": 393,
	"./nl-be.js": 393,
	"./nl.js": 392,
	"./nn": 394,
	"./nn.js": 394,
	"./pa-in": 395,
	"./pa-in.js": 395,
	"./pl": 396,
	"./pl.js": 396,
	"./pt": 397,
	"./pt-br": 398,
	"./pt-br.js": 398,
	"./pt.js": 397,
	"./ro": 399,
	"./ro.js": 399,
	"./ru": 400,
	"./ru.js": 400,
	"./sd": 401,
	"./sd.js": 401,
	"./se": 402,
	"./se.js": 402,
	"./si": 403,
	"./si.js": 403,
	"./sk": 404,
	"./sk.js": 404,
	"./sl": 405,
	"./sl.js": 405,
	"./sq": 406,
	"./sq.js": 406,
	"./sr": 407,
	"./sr-cyrl": 408,
	"./sr-cyrl.js": 408,
	"./sr.js": 407,
	"./ss": 409,
	"./ss.js": 409,
	"./sv": 410,
	"./sv.js": 410,
	"./sw": 411,
	"./sw.js": 411,
	"./ta": 412,
	"./ta.js": 412,
	"./te": 413,
	"./te.js": 413,
	"./tet": 414,
	"./tet.js": 414,
	"./tg": 415,
	"./tg.js": 415,
	"./th": 416,
	"./th.js": 416,
	"./tl-ph": 417,
	"./tl-ph.js": 417,
	"./tlh": 418,
	"./tlh.js": 418,
	"./tr": 419,
	"./tr.js": 419,
	"./tzl": 420,
	"./tzl.js": 420,
	"./tzm": 421,
	"./tzm-latn": 422,
	"./tzm-latn.js": 422,
	"./tzm.js": 421,
	"./ug-cn": 423,
	"./ug-cn.js": 423,
	"./uk": 424,
	"./uk.js": 424,
	"./ur": 425,
	"./ur.js": 425,
	"./uz": 426,
	"./uz-latn": 427,
	"./uz-latn.js": 427,
	"./uz.js": 426,
	"./vi": 428,
	"./vi.js": 428,
	"./x-pseudo": 429,
	"./x-pseudo.js": 429,
	"./yo": 430,
	"./yo.js": 430,
	"./zh-cn": 431,
	"./zh-cn.js": 431,
	"./zh-hk": 432,
	"./zh-hk.js": 432,
	"./zh-tw": 433,
	"./zh-tw.js": 433
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 709;

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_expedientes_expedientes__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_usuarios_usuarios__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_logout_logout__ = __webpack_require__(123);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/alex/projects/duaexpress/appduaexpress/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button class="app-button" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/alex/projects/duaexpress/appduaexpress/src/app/app.html"*/,
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

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(435);
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

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpedientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_expediente_services__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expediente_edit_expediente_edit__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_global_enum__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__expedientes_aereo_despacho_aereo_despacho__ = __webpack_require__(225);
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
    function ExpedientesPage(navCtrl, navParams, database, expedienteService, actionSheetCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.expedienteService = expedienteService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
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
            noDataMessage: '',
        };
        this.expedientes = expedienteService.getExpedientes().valueChanges();
    }
    ExpedientesPage.prototype.ionViewDidLoad = function () { };
    ExpedientesPage.prototype.newExpediente = function (event) {
        if (this.nuevoExpediente) {
            switch (this.nuevoExpediente) {
                case __WEBPACK_IMPORTED_MODULE_5__models_global_enum__["a" /* ExpedienteSubTipo */].DespachoAereoExportacion: {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__expedientes_aereo_despacho_aereo_despacho__["a" /* AereoDespachoPage */]);
                    break;
                }
                case __WEBPACK_IMPORTED_MODULE_5__models_global_enum__["a" /* ExpedienteSubTipo */].DespachoAereoImportacion: {
                    break;
                }
                default: {
                    break;
                }
            }
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Notificación:',
                subTitle: 'Seleccione un tipo de expediente',
                buttons: ['Aceptar']
            });
            alert_1.present();
        }
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
            selector: 'page-expedientes',template:/*ion-inline-start:"/home/alex/projects/duaexpress/appduaexpress/src/pages/expedientes/expedientes.html"*/'\n<page-home></page-home>\n\n<ion-content class="top120" padding>\n  <div class="module-title">\n    <h2>Expedientes</h2>\n  </div>\n\n  <div class="row form-control">\n    <button class="button-new" (click)="newExpediente($event)">Nuevo Expediente</button>\n    <div class="white-space"></div>\n    <select [(ngModel)]="nuevoExpediente">\n      <option *ngFor="let expTipo of expTipoArray" [ngValue]="expTipo.id">{{ expTipo.label }}</option>\n    </select>\n  </div>\n\n  <div>\n    <ng2-smart-table (editConfirm)="updateExpediente($event)" (deleteConfirm)="deleteExpediente($event)"\n      (userRowSelect)="editExpediente($event)" [settings]="settings" [source]="expedientes | async">\n    </ng2-smart-table>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/alex/projects/duaexpress/appduaexpress/src/pages/expedientes/expedientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_3__services_expediente_services__["a" /* ExpedienteService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ExpedientesPage);
    return ExpedientesPage;
}());

//# sourceMappingURL=expedientes.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(111);
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
                    title: 'Notificación:',
                    subTitle: 'Credenciales incorrectas/' + err.message,
                    buttons: ['Aceptar']
                });
                alert.present();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Notificación:',
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
            selector: 'page-login',template:/*ion-inline-start:"/home/alex/projects/duaexpress/appduaexpress/src/pages/login/login.html"*/'<ion-content class="form-content" padding>\n  <div class="wrapper">\n    <form class="form-signin">\n      <ion-row>\n        <ion-col>\n          <img class="logo" src="assets/imgs/logoL.jpg" />\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Email" [(ngModel)]="user.email" name="email" autocapitalize="off" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="user.password" required></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <br/><br/>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" (click)="login()">Entrar</button>\n          <button ion-button class="register-btn" block clear  (click)="signin()">Registrarse</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/alex/projects/duaexpress/appduaexpress/src/pages/login/login.html"*/,
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

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_services__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_global_enum__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(122);
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
            noDataMessage: '',
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
            selector: 'page-usuarios',template:/*ion-inline-start:"/home/alex/projects/duaexpress/appduaexpress/src/pages/usuarios/usuarios.html"*/'\n<page-home></page-home>\n\n<ion-content class="top120" padding>\n  <div class="module-title">\n    <h2>Usuarios</h2>\n  </div>\n\n  <div>\n    <ng2-smart-table (editConfirm)="updateUser($event)" (deleteConfirm)="deleteUser($event)"  (userRowSelect)="editUser($event)"\n      [settings]="settings" [source]="users | async">\n  </ng2-smart-table>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/alex/projects/duaexpress/appduaexpress/src/pages/usuarios/usuarios.html"*/,
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

},[547]);
//# sourceMappingURL=main.js.map