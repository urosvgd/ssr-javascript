module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(78);


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var styled_jsx_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Next.js / MUI integration here: https://github.com/mui-org/material-ui/tree/master/examples/nextjs */
 // styled-jsx included in Next.js by default




var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyDocument).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pageContext = _this$props.pageContext,
          _this$props$user = _this$props.user,
          user = _this$props$user === void 0 ? {} : _this$props$user;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
        lang: "en",
        dir: "ltr"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/favicon.ico",
        type: "image/x-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "icon",
        href: "/static/favicon.ico",
        type: "image/x-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/favicon-32x32.png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/favicon-16x16.png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        charSet: "utf-8"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "theme-color",
        content: pageContext.theme.palette.primary.main
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "description",
        content: "A social media site built with Next.js"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: Object(_lib_auth__WEBPACK_IMPORTED_MODULE_3__[/* getUserScript */ "c"])(user)
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], null)));
    }
  }]);

  return MyDocument;
}(next_document__WEBPACK_IMPORTED_MODULE_1___default.a);

_defineProperty(MyDocument, "getInitialProps", function (ctx) {
  var user = Object(_lib_auth__WEBPACK_IMPORTED_MODULE_3__[/* getSessionFromServer */ "b"])(ctx.req); // Render app and page and get the context of the page with collected side effects.

  var pageContext;
  var page = ctx.renderPage(function (Component) {
    var WrappedComponent = function WrappedComponent(props) {
      pageContext = props.pageContext;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props);
    };

    return WrappedComponent;
  });
  return _objectSpread({}, user, page, {
    pageContext: pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
      id: "jss-server-side" // eslint-disable-next-line react/no-danger
      ,
      dangerouslySetInnerHTML: {
        __html: pageContext.sheetsRegistry.toString()
      }
    }), styled_jsx_server__WEBPACK_IMPORTED_MODULE_2___default()() || null)
  });
});

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUserScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSessionFromServer; });
/* unused harmony export getSessionFromClient */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authInitialProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return signupUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return signinUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return signoutUser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var WINDOW_USER_SCRIPT_VARIABLE = "__USER__";
var getUserScript = function getUserScript(user) {
  return "".concat(WINDOW_USER_SCRIPT_VARIABLE, " = ").concat(JSON.stringify(user), ";");
};
var getSessionFromServer = function getSessionFromServer(req) {
  if (req.user) {
    return {
      user: req.user
    };
  }

  return {};
};
var getSessionFromClient = function getSessionFromClient() {
  if (typeof window !== "undefined") {
    var user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
    return {
      user: user
    };
  }

  return {
    user: {}
  };
};

var redirectUser = function redirectUser(res, path) {
  if (res) {
    res.redirect(302, path);
    res.finished = true;
    return {};
  }

  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.replace(path);
  return {};
};

var authInitialProps = function authInitialProps(isProtectedRoute) {
  return function (_ref) {
    var req = _ref.req,
        res = _ref.res,
        userId = _ref.query.userId;
    var auth = req ? getSessionFromServer(req) : getSessionFromClient();
    var currentPath = req ? req.url : window.location.pathname;
    var user = auth.user;
    var isAnonymous = !user;

    if (isProtectedRoute && isAnonymous && currentPath !== "/signin") {
      return redirectUser(res, "/signin");
    }

    return {
      auth: auth,
      userId: userId
    };
  };
};
var signupUser =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(user) {
    var _ref3, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/auth/signup", user);

          case 2:
            _ref3 = _context.sent;
            data = _ref3.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signupUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var signinUser =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(user) {
    var _ref5, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/auth/signin", user);

          case 2:
            _ref5 = _context2.sent;
            data = _ref5.data;

            if (typeof window !== "undefined") {
              window[WINDOW_USER_SCRIPT_VARIABLE] = data || {};
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signinUser(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
var signoutUser =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (typeof window !== "undefined") {
              window[WINDOW_USER_SCRIPT_VARIABLE] = {};
            }

            _context3.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/auth/signout");

          case 3:
            next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/signin");

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function signoutUser() {
    return _ref6.apply(this, arguments);
  };
}();

/***/ })

/******/ });