function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthRoutingModule
    });
    AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthRoutingModule_Factory(t) {
        return new (t || AuthRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSignIn",
        value: function onSignIn() {
          this.router.navigate(['/main']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 40,
      vars: 0,
      consts: [["fxLayout", "column"], ["fxFlex", ""], ["fxFlex", "65%"], ["fxFlex", "100%", "fxFlexAlign", "center", 1, "login-title"], ["fxFlex", "100%", "fxFlexAlign", "center", 1, "login-banner-img"], ["src", "../../../assets/login_bg1.png"], [1, "bannner-title"], [1, "bannner-title-small"], ["fxFlex", "35%"], [1, "login-area"], [1, "login-area-heading"], [1, "login-area-heading-sub"], [1, "login-text-placeholder"], [1, "login-text-lable"], [1, "login-text"], ["type", "text"], ["type", "password"], [1, "login-btn-area"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ORBIS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Desk to perform more on your work ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Get ready for your presence to make sense ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Welcome! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Sign in to your account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "lock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_38_listener() {
            return ctx.onSignIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
      styles: [".login-area[_ngcontent-%COMP%] {\n  height: 100vh;\n  background: #4c56c0;\n}\n.login-area[_ngcontent-%COMP%]   .login-text[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  text-align: center;\n  width: 380px;\n  background: #3c46a7;\n  border-radius: 5px;\n}\n.login-area[_ngcontent-%COMP%]   .login-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 11px;\n  color: #b6c0fb;\n}\n.login-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 314px;\n  padding: 5px;\n  margin-left: 29px;\n  height: 35px;\n  outline: none;\n  background: transparent;\n  border: 0px;\n  color: #FFF;\n}\n.login-area[_ngcontent-%COMP%]   .login-area-heading[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-weight: 300;\n  color: #e8e8e8;\n  padding: 30px;\n  text-align: center;\n  padding-top: 75px;\n}\n.login-area[_ngcontent-%COMP%]   .login-area-heading-sub[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-weight: 300;\n  color: #ced4f5;\n  text-align: center;\n}\n.login-area[_ngcontent-%COMP%]   .login-text-lable[_ngcontent-%COMP%] {\n  padding: 10px;\n  color: #FFF;\n  font-size: 16px;\n  font-weight: 500;\n  padding-left: 75px;\n}\n.login-area[_ngcontent-%COMP%]   .login-text-placeholder[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 70px;\n}\n.login-area[_ngcontent-%COMP%]   .login-btn-area[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px;\n}\n.login-area[_ngcontent-%COMP%]   .login-btn-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);\n  width: 380px;\n  background: linear-gradient(60deg, #ec407a, #d81b60);\n  border-radius: 30px;\n  padding: 4px;\n}\n.login-title[_ngcontent-%COMP%] {\n  padding: 30px;\n  color: #595e77;\n}\n.login-banner-img[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.login-banner-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 500px;\n}\n.login-banner-img[_ngcontent-%COMP%]   .bannner-title[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-weight: 300;\n  color: #3F51B5;\n  padding: 30px;\n}\n.login-banner-img[_ngcontent-%COMP%]   .bannner-title-small[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-weight: 300;\n  color: #607D8B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL09yYmlzLVB1Ymxpc2gvT3JiaXMtUHVibGlzaC9zcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQU07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0VSO0FEQ007RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ1I7QURDTTtFQUNFLGVBQUE7RUFDQSxpREFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURDSTtFQUNJLGVBQUE7RUFDQSxpREFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ1I7QURDSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNDUjtBREFRO0VBQ0ksb0ZBQUE7RUFDQSxZQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNFWjtBREVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7QUNFSjtBRERJO0VBQ0ksWUFBQTtBQ0dSO0FEREk7RUFDSSxlQUFBO0VBQ0EsaURBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDR1I7QURESTtFQUNJLGVBQUE7RUFDQSxpREFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1hcmVhe1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogIzRjNTZjMDtcbiAgICAubG9naW4tdGV4dCB7IFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzODBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzNjNDZhNztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgfVxuICAgICAgLmxvZ2luLXRleHQgIHNwYW4geyBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgIGxlZnQ6IDExcHg7XG4gICAgICAgIGNvbG9yOiAjYjZjMGZiO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAzMTRweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjlweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgfVxuICAgICAgLmxvZ2luLWFyZWEtaGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICNlOGU4ZTg7XG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDc1cHg7XG4gICAgfVxuICAgIC5sb2dpbi1hcmVhLWhlYWRpbmctc3ViIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBjb2xvcjogI2NlZDRmNTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAubG9naW4tdGV4dC1sYWJsZXtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xuICAgIH1cbiAgICAubG9naW4tdGV4dC1wbGFjZWhvbGRlcntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIH1cbiAgICAubG9naW4tYnRuLWFyZWF7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgJiBidXR0b257XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYSgyMzMsMzAsOTksLjQpO1xuICAgICAgICAgICAgd2lkdGg6IDM4MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCNlYzQwN2EsI2Q4MWI2MCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLmxvZ2luLXRpdGxle1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgY29sb3I6ICM1OTVlNzc7XG59XG4ubG9naW4tYmFubmVyLWltZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgJiBpbWd7XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICB9XG4gICAgLmJhbm5uZXItdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiAjM0Y1MUI1O1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgIH1cbiAgICAuYmFubm5lci10aXRsZS1zbWFsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICM2MDdEOEI7XG4gICAgfVxufSIsIi5sb2dpbi1hcmVhIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogIzRjNTZjMDtcbn1cbi5sb2dpbi1hcmVhIC5sb2dpbi10ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzgwcHg7XG4gIGJhY2tncm91bmQ6ICMzYzQ2YTc7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5sb2dpbi1hcmVhIC5sb2dpbi10ZXh0IHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogMTFweDtcbiAgY29sb3I6ICNiNmMwZmI7XG59XG4ubG9naW4tYXJlYSBpbnB1dCB7XG4gIHdpZHRoOiAzMTRweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tbGVmdDogMjlweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmxvZ2luLWFyZWEgLmxvZ2luLWFyZWEtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNlOGU4ZTg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG4ubG9naW4tYXJlYSAubG9naW4tYXJlYS1oZWFkaW5nLXN1YiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNjZWQ0ZjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbi1hcmVhIC5sb2dpbi10ZXh0LWxhYmxlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1sZWZ0OiA3NXB4O1xufVxuLmxvZ2luLWFyZWEgLmxvZ2luLXRleHQtcGxhY2Vob2xkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG4ubG9naW4tYXJlYSAubG9naW4tYnRuLWFyZWEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG4ubG9naW4tYXJlYSAubG9naW4tYnRuLWFyZWEgYnV0dG9uIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDIzMywgMzAsIDk5LCAwLjQpO1xuICB3aWR0aDogMzgwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgI2VjNDA3YSwgI2Q4MWI2MCk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLmxvZ2luLXRpdGxlIHtcbiAgcGFkZGluZzogMzBweDtcbiAgY29sb3I6ICM1OTVlNzc7XG59XG5cbi5sb2dpbi1iYW5uZXItaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luLWJhbm5lci1pbWcgaW1nIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuLmxvZ2luLWJhbm5lci1pbWcgLmJhbm5uZXItdGl0bGUge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjM0Y1MUI1O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLmxvZ2luLWJhbm5lci1pbWcgLmJhbm5uZXItdGl0bGUtc21hbGwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNjA3RDhCO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=auth-auth-module-es5.js.map