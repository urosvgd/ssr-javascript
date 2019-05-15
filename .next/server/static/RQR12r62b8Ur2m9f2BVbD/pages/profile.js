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
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/withStyles");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return unfollowUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getAuthUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getUserFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getPostFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return likePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return unlikePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getPostsByUser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var getUser =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userId) {
    var _ref2, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/users/profile/".concat(userId));

          case 2:
            _ref2 = _context.sent;
            data = _ref2.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUser(_x) {
    return _ref.apply(this, arguments);
  };
}();
var followUser =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(followId) {
    var _ref4, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/users/follow", {
              followId: followId
            });

          case 2:
            _ref4 = _context2.sent;
            data = _ref4.data;
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function followUser(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
var unfollowUser =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(followId) {
    var _ref6, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/users/unfollow", {
              followId: followId
            });

          case 2:
            _ref6 = _context3.sent;
            data = _ref6.data;
            return _context3.abrupt("return", data);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function unfollowUser(_x3) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteUser =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(authUserId) {
    var _ref8, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/users/".concat(authUserId));

          case 2:
            _ref8 = _context4.sent;
            data = _ref8.data;
            return _context4.abrupt("return", data);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteUser(_x4) {
    return _ref7.apply(this, arguments);
  };
}();
var getAuthUser =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(authUserId) {
    var _ref10, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/users/".concat(authUserId));

          case 2:
            _ref10 = _context5.sent;
            data = _ref10.data;
            return _context5.abrupt("return", data);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getAuthUser(_x5) {
    return _ref9.apply(this, arguments);
  };
}();
var updateUser =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(authUserId, userData) {
    var _ref12, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/users/".concat(authUserId), userData);

          case 2:
            _ref12 = _context6.sent;
            data = _ref12.data;
            return _context6.abrupt("return", data);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateUser(_x6, _x7) {
    return _ref11.apply(this, arguments);
  };
}();
var getUserFeed =
/*#__PURE__*/
function () {
  var _ref13 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(authUserId) {
    var _ref14, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/users/feed/".concat(authUserId));

          case 2:
            _ref14 = _context7.sent;
            data = _ref14.data;
            return _context7.abrupt("return", data);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getUserFeed(_x8) {
    return _ref13.apply(this, arguments);
  };
}();
var addPost =
/*#__PURE__*/
function () {
  var _ref15 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(authUserId, post) {
    var _ref16, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/posts/new/".concat(authUserId), post);

          case 2:
            _ref16 = _context8.sent;
            data = _ref16.data;
            return _context8.abrupt("return", data);

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function addPost(_x9, _x10) {
    return _ref15.apply(this, arguments);
  };
}();
var getPostFeed =
/*#__PURE__*/
function () {
  var _ref17 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(authUserId) {
    var _ref18, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/posts/feed/".concat(authUserId));

          case 2:
            _ref18 = _context9.sent;
            data = _ref18.data;
            return _context9.abrupt("return", data);

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function getPostFeed(_x11) {
    return _ref17.apply(this, arguments);
  };
}();
var deletePost =
/*#__PURE__*/
function () {
  var _ref19 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(postId) {
    var _ref20, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/posts/".concat(postId));

          case 2:
            _ref20 = _context10.sent;
            data = _ref20.data;
            return _context10.abrupt("return", data);

          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function deletePost(_x12) {
    return _ref19.apply(this, arguments);
  };
}();
var likePost =
/*#__PURE__*/
function () {
  var _ref21 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(postId) {
    var _ref22, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/posts/like", {
              postId: postId
            });

          case 2:
            _ref22 = _context11.sent;
            data = _ref22.data;
            return _context11.abrupt("return", data);

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function likePost(_x13) {
    return _ref21.apply(this, arguments);
  };
}();
var unlikePost =
/*#__PURE__*/
function () {
  var _ref23 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(postId) {
    var _ref24, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/posts/unlike", {
              postId: postId
            });

          case 2:
            _ref24 = _context12.sent;
            data = _ref24.data;
            return _context12.abrupt("return", data);

          case 5:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function unlikePost(_x14) {
    return _ref23.apply(this, arguments);
  };
}();
var addComment =
/*#__PURE__*/
function () {
  var _ref25 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(postId, comment) {
    var _ref26, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/posts/comment", {
              postId: postId,
              comment: comment
            });

          case 2:
            _ref26 = _context13.sent;
            data = _ref26.data;
            return _context13.abrupt("return", data);

          case 5:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function addComment(_x15, _x16) {
    return _ref25.apply(this, arguments);
  };
}();
var deleteComment =
/*#__PURE__*/
function () {
  var _ref27 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(postId, comment) {
    var _ref28, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/posts/uncomment", {
              postId: postId,
              comment: comment
            });

          case 2:
            _ref28 = _context14.sent;
            data = _ref28.data;
            return _context14.abrupt("return", data);

          case 5:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function deleteComment(_x17, _x18) {
    return _ref27.apply(this, arguments);
  };
}();
var getPostsByUser =
/*#__PURE__*/
function () {
  var _ref29 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(userId) {
    var _ref30, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/posts/by/".concat(userId));

          case 2:
            _ref30 = _context15.sent;
            data = _ref30.data;
            return _context15.abrupt("return", data);

          case 5:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function getPostsByUser(_x19) {
    return _ref29.apply(this, arguments);
  };
}();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 9 */
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

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Comment");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DeleteTwoTone");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FavoriteBorder");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Badge"
var Badge_ = __webpack_require__(30);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);

// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__(26);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/CardHeader"
var CardHeader_ = __webpack_require__(16);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__(27);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/CardActions"
var CardActions_ = __webpack_require__(28);
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(6);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(14);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__(19);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__(5);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// EXTERNAL MODULE: external "@material-ui/icons/Comment"
var Comment_ = __webpack_require__(35);
var Comment_default = /*#__PURE__*/__webpack_require__.n(Comment_);

// EXTERNAL MODULE: external "@material-ui/icons/DeleteTwoTone"
var DeleteTwoTone_ = __webpack_require__(36);
var DeleteTwoTone_default = /*#__PURE__*/__webpack_require__.n(DeleteTwoTone_);

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__(37);
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);

// EXTERNAL MODULE: external "@material-ui/icons/FavoriteBorder"
var FavoriteBorder_ = __webpack_require__(38);
var FavoriteBorder_default = /*#__PURE__*/__webpack_require__.n(FavoriteBorder_);

// EXTERNAL MODULE: external "@material-ui/core/styles/withStyles"
var withStyles_ = __webpack_require__(4);
var withStyles_default = /*#__PURE__*/__webpack_require__.n(withStyles_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(13);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__(10);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__(12);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Input"
var Input_ = __webpack_require__(11);
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_);

// EXTERNAL MODULE: external "@material-ui/icons/Delete"
var Delete_ = __webpack_require__(29);
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_);

// CONCATENATED MODULE: ./components/index/Comments.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Comments_Comments =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Comments, _React$Component);

  function Comments() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Comments);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Comments)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      text: ""
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        text: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (event) {
      var text = _this.state.text;
      var _this$props = _this.props,
          postId = _this$props.postId,
          handleAddComment = _this$props.handleAddComment;
      event.preventDefault();
      handleAddComment(postId, text);

      _this.setState({
        text: ""
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showComment", function (comment) {
      var _this$props2 = _this.props,
          postId = _this$props2.postId,
          auth = _this$props2.auth,
          classes = _this$props2.classes,
          handleDeleteComment = _this$props2.handleDeleteComment;
      var isCommentCreator = comment.postedBy._id === auth.user._id;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(link_default.a, {
        href: "/profile/".concat(comment.postedBy._id)
      }, external_react_default.a.createElement("a", null, comment.postedBy.name)), external_react_default.a.createElement("br", null), comment.text, external_react_default.a.createElement("span", {
        className: classes.commentDate
      }, comment.createdAt, isCommentCreator && external_react_default.a.createElement(Delete_default.a, {
        color: "secondary",
        className: classes.commentDelete,
        onClick: function onClick() {
          return handleDeleteComment(postId, comment);
        }
      })));
    });

    return _this;
  }

  _createClass(Comments, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          auth = _this$props3.auth,
          comments = _this$props3.comments,
          classes = _this$props3.classes;
      var text = this.state.text;
      return external_react_default.a.createElement("div", {
        className: classes.comments
      }, external_react_default.a.createElement(CardHeader_default.a, {
        avatar: external_react_default.a.createElement(Avatar_default.a, {
          className: classes.smallAvatar,
          src: auth.user.avatar
        }),
        title: external_react_default.a.createElement("form", {
          onSubmit: this.handleSubmit
        }, external_react_default.a.createElement(FormControl_default.a, {
          margin: "normal",
          required: true,
          fullWidth: true
        }, external_react_default.a.createElement(InputLabel_default.a, {
          htmlFor: "add-comment"
        }, "Add comments"), external_react_default.a.createElement(Input_default.a, {
          id: "add-comment",
          name: "text",
          placeholder: "Reply to this post",
          value: text,
          onChange: this.handleChange
        }))),
        className: classes.cardHeader
      }), comments.map(function (comment) {
        return external_react_default.a.createElement(CardHeader_default.a, {
          key: comment._id,
          avatar: external_react_default.a.createElement(Avatar_default.a, {
            className: classes.smallAvatar,
            src: comment.postedBy.avatar
          }),
          title: _this2.showComment(comment),
          className: classes.cardHeader
        });
      }));
    }
  }]);

  return Comments;
}(external_react_default.a.Component);

var styles = function styles(theme) {
  return {
    comments: {
      backgroundColor: "rgba(11, 61, 130, 0.06)"
    },
    cardHeader: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    smallAvatar: {
      margin: 10
    },
    commentDate: {
      display: "block",
      color: "gray",
      fontSize: "0.8em"
    },
    commentDelete: {
      fontSize: "1.6em",
      verticalAlign: "middle",
      cursor: "pointer"
    }
  };
};

/* harmony default export */ var index_Comments = (withStyles_default()(styles)(Comments_Comments));
// CONCATENATED MODULE: ./components/index/Post.js


function Post_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Post_typeof = function _typeof(obj) { return typeof obj; }; } else { Post_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Post_typeof(obj); }

function Post_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Post_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Post_createClass(Constructor, protoProps, staticProps) { if (protoProps) Post_defineProperties(Constructor.prototype, protoProps); if (staticProps) Post_defineProperties(Constructor, staticProps); return Constructor; }

function Post_possibleConstructorReturn(self, call) { if (call && (Post_typeof(call) === "object" || typeof call === "function")) { return call; } return Post_assertThisInitialized(self); }

function Post_getPrototypeOf(o) { Post_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Post_getPrototypeOf(o); }

function Post_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Post_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Post_setPrototypeOf(subClass, superClass); }

function Post_setPrototypeOf(o, p) { Post_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Post_setPrototypeOf(o, p); }

function Post_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















var Post_Post =
/*#__PURE__*/
function (_React$PureComponent) {
  Post_inherits(Post, _React$PureComponent);

  function Post() {
    var _getPrototypeOf2;

    var _this;

    Post_classCallCheck(this, Post);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Post_possibleConstructorReturn(this, (_getPrototypeOf2 = Post_getPrototypeOf(Post)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Post_defineProperty(Post_assertThisInitialized(_this), "state", {
      isLiked: false,
      numLikes: 0,
      comments: []
    });

    Post_defineProperty(Post_assertThisInitialized(_this), "checkLiked", function (likes) {
      return likes.includes(_this.props.auth.user._id);
    });

    return _this;
  }

  Post_createClass(Post, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isLiked: this.checkLiked(this.props.post.likes),
        numLikes: this.props.post.likes.length,
        comments: this.props.post.comments
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.post.likes.length !== this.props.post.likes.length) {
        this.setState({
          isLiked: this.checkLiked(this.props.post.likes),
          numLikes: this.props.post.likes.length
        });
      }

      if (prevProps.post.comments.length !== this.props.post.comments.length) {
        this.setState({
          comments: this.props.post.comments
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          post = _this$props.post,
          auth = _this$props.auth,
          isDeletingPost = _this$props.isDeletingPost,
          handleDeletePost = _this$props.handleDeletePost,
          handleToggleLike = _this$props.handleToggleLike,
          handleAddComment = _this$props.handleAddComment,
          handleDeleteComment = _this$props.handleDeleteComment;
      var _this$state = this.state,
          isLiked = _this$state.isLiked,
          numLikes = _this$state.numLikes,
          comments = _this$state.comments;
      var isPostCreator = post.postedBy._id === auth.user._id;
      return external_react_default.a.createElement(Card_default.a, {
        className: classes.card
      }, external_react_default.a.createElement(CardHeader_default.a, {
        avatar: external_react_default.a.createElement(Avatar_default.a, {
          src: post.postedBy.avatar
        }),
        action: isPostCreator && external_react_default.a.createElement(IconButton_default.a, {
          disabled: isDeletingPost,
          onClick: function onClick() {
            return handleDeletePost(post);
          }
        }, external_react_default.a.createElement(DeleteTwoTone_default.a, {
          color: "secondary"
        })),
        title: external_react_default.a.createElement(link_default.a, {
          href: "/profile/".concat(post.postedBy._id)
        }, external_react_default.a.createElement("a", null, post.postedBy.name)),
        subheader: post.createdAt,
        className: classes.cardHeader
      }), external_react_default.a.createElement(CardContent_default.a, {
        className: classes.cardContent
      }, external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        className: classes.text
      }, post.text), post.image && external_react_default.a.createElement("div", {
        className: classes.imageContainer
      }, external_react_default.a.createElement("img", {
        className: classes.image,
        src: post.image
      }))), external_react_default.a.createElement(CardActions_default.a, null, external_react_default.a.createElement(IconButton_default.a, {
        onClick: function onClick() {
          return handleToggleLike(post);
        },
        className: classes.button
      }, external_react_default.a.createElement(Badge_default.a, {
        badgeContent: numLikes,
        color: "secondary"
      }, isLiked ? external_react_default.a.createElement(Favorite_default.a, {
        className: classes.favoriteIcon
      }) : external_react_default.a.createElement(FavoriteBorder_default.a, {
        className: classes.favoriteIcon
      }))), external_react_default.a.createElement(IconButton_default.a, {
        className: classes.button
      }, external_react_default.a.createElement(Badge_default.a, {
        badgeContent: comments.length,
        color: "primary"
      }, external_react_default.a.createElement(Comment_default.a, {
        className: classes.commentIcon
      })))), external_react_default.a.createElement(Divider_default.a, null), external_react_default.a.createElement(index_Comments, {
        auth: auth,
        postId: post._id,
        comments: comments,
        handleAddComment: handleAddComment,
        handleDeleteComment: handleDeleteComment
      }));
    }
  }]);

  return Post;
}(external_react_default.a.PureComponent);

var Post_styles = function styles(theme) {
  return {
    card: {
      marginBottom: theme.spacing.unit * 3
    },
    cardContent: {
      backgroundColor: "white"
    },
    cardHeader: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      backgroundColor: "rgba(11, 61, 130, 0.06)"
    },
    imageContainer: {
      textAlign: "center",
      padding: theme.spacing.unit
    },
    image: {
      height: 200
    },
    favoriteIcon: {
      color: theme.palette.favoriteIcon
    },
    commentIcon: {
      color: theme.palette.commentIcon
    }
  };
};

/* harmony default export */ var index_Post = __webpack_exports__["a"] = (withStyles_default()(Post_styles)(Post_Post));

/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridList");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTile");

/***/ }),
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(17);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(39);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(31);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemAvatar"
var ListItemAvatar_ = __webpack_require__(40);
var ListItemAvatar_default = /*#__PURE__*/__webpack_require__.n(ListItemAvatar_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemSecondaryAction"
var ListItemSecondaryAction_ = __webpack_require__(41);
var ListItemSecondaryAction_default = /*#__PURE__*/__webpack_require__.n(ListItemSecondaryAction_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__(32);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__(5);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(14);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(6);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__(44);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__(19);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/icons/Edit"
var Edit_ = __webpack_require__(69);
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);

// EXTERNAL MODULE: external "@material-ui/core/styles/withStyles"
var withStyles_ = __webpack_require__(4);
var withStyles_default = /*#__PURE__*/__webpack_require__.n(withStyles_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(13);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__(33);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__(70);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__(45);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);

// EXTERNAL MODULE: ./components/index/Post.js + 1 modules
var Post = __webpack_require__(42);

// EXTERNAL MODULE: external "@material-ui/core/GridList"
var GridList_ = __webpack_require__(71);
var GridList_default = /*#__PURE__*/__webpack_require__.n(GridList_);

// EXTERNAL MODULE: external "@material-ui/core/GridListTile"
var GridListTile_ = __webpack_require__(72);
var GridListTile_default = /*#__PURE__*/__webpack_require__.n(GridListTile_);

// CONCATENATED MODULE: ./components/profile/FollowTab.js


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var FollowTab_FollowTab = function FollowTab(_ref) {
  var classes = _ref.classes,
      users = _ref.users;
  return external_react_default.a.createElement("div", {
    className: classes.root
  }, external_react_default.a.createElement(GridList_default.a, {
    cellHeight: 160,
    className: classes.gridList,
    cols: 4
  }, users.map(function (user) {
    return external_react_default.a.createElement(GridListTile_default.a, {
      style: {
        height: 120
      },
      key: user._id
    }, external_react_default.a.createElement(link_default.a, {
      href: "/profile/".concat(user._id)
    }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(Avatar_default.a, {
      src: user.avatar,
      className: classes.bigAvatar
    }), external_react_default.a.createElement(Typography_default.a, {
      component: "h3",
      variant: "subtitle1",
      className: classes.tileText
    }, user.name))));
  })));
};

var styles = function styles(theme) {
  return {
    root: {
      marginTop: theme.spacing.unit * 2,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden"
    },
    bigAvatar: {
      width: 60,
      height: 60,
      margin: "auto"
    },
    gridList: _defineProperty({
      width: 300
    }, theme.breakpoints.up("sm"), {
      width: 400
    }),
    tileText: {
      textAlign: "center",
      marginTop: 10
    }
  };
};

/* harmony default export */ var profile_FollowTab = (withStyles_default()(styles)(FollowTab_FollowTab));
// CONCATENATED MODULE: ./components/profile/ProfileTabs.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ProfileTabs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var ProfileTabs_ProfileTabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProfileTabs, _React$Component);

  function ProfileTabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProfileTabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProfileTabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    ProfileTabs_defineProperty(_assertThisInitialized(_this), "state", {
      tab: 0
    });

    ProfileTabs_defineProperty(_assertThisInitialized(_this), "handleTabChange", function (event, value) {
      _this.setState({
        tab: value
      });
    });

    return _this;
  }

  _createClass(ProfileTabs, [{
    key: "render",
    value: function render() {
      var tab = this.state.tab;
      var _this$props = this.props,
          posts = _this$props.posts,
          user = _this$props.user,
          auth = _this$props.auth,
          isDeletingPost = _this$props.isDeletingPost,
          handleDeletePost = _this$props.handleDeletePost,
          handleToggleLike = _this$props.handleToggleLike,
          handleAddComment = _this$props.handleAddComment,
          handleDeleteComment = _this$props.handleDeleteComment;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(AppBar_default.a, {
        position: "static",
        color: "default"
      }, external_react_default.a.createElement(Tabs_default.a, {
        value: tab,
        onChange: this.handleTabChange,
        indicatorColor: "secondary",
        textColor: "secondary",
        fullWidth: true
      }, external_react_default.a.createElement(Tab_default.a, {
        label: "Posts"
      }), external_react_default.a.createElement(Tab_default.a, {
        label: "Following"
      }), external_react_default.a.createElement(Tab_default.a, {
        label: "Followers"
      }))), tab === 0 && external_react_default.a.createElement(ProfileTabs_TabContainer, null, posts.map(function (post) {
        return external_react_default.a.createElement(Post["a" /* default */], {
          key: post._id,
          auth: auth,
          post: post,
          isDeletingPost: isDeletingPost,
          handleDeletePost: handleDeletePost,
          handleToggleLike: handleToggleLike,
          handleAddComment: handleAddComment,
          handleDeleteComment: handleDeleteComment
        });
      })), tab === 1 && external_react_default.a.createElement(ProfileTabs_TabContainer, null, external_react_default.a.createElement(profile_FollowTab, {
        users: user.following
      })), tab === 2 && external_react_default.a.createElement(ProfileTabs_TabContainer, null, external_react_default.a.createElement(profile_FollowTab, {
        users: user.followers
      })));
    }
  }]);

  return ProfileTabs;
}(external_react_default.a.Component);

var ProfileTabs_TabContainer = function TabContainer(_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement(Typography_default.a, {
    component: "div",
    style: {
      padding: "1em"
    }
  }, children);
};

/* harmony default export */ var profile_ProfileTabs = (ProfileTabs_ProfileTabs);
// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(8);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__(20);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__(25);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__(21);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContentText"
var DialogContentText_ = __webpack_require__(22);
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__(23);
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: external "@material-ui/icons/Delete"
var Delete_ = __webpack_require__(29);
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_);

// EXTERNAL MODULE: ./lib/auth.js
var lib_auth = __webpack_require__(9);

// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(7);

// CONCATENATED MODULE: ./components/profile/DeleteUser.js


function DeleteUser_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DeleteUser_typeof = function _typeof(obj) { return typeof obj; }; } else { DeleteUser_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DeleteUser_typeof(obj); }

function DeleteUser_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DeleteUser_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DeleteUser_createClass(Constructor, protoProps, staticProps) { if (protoProps) DeleteUser_defineProperties(Constructor.prototype, protoProps); if (staticProps) DeleteUser_defineProperties(Constructor, staticProps); return Constructor; }

function DeleteUser_possibleConstructorReturn(self, call) { if (call && (DeleteUser_typeof(call) === "object" || typeof call === "function")) { return call; } return DeleteUser_assertThisInitialized(self); }

function DeleteUser_getPrototypeOf(o) { DeleteUser_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DeleteUser_getPrototypeOf(o); }

function DeleteUser_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DeleteUser_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DeleteUser_setPrototypeOf(subClass, superClass); }

function DeleteUser_setPrototypeOf(o, p) { DeleteUser_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DeleteUser_setPrototypeOf(o, p); }

function DeleteUser_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var DeleteUser_DeleteUser =
/*#__PURE__*/
function (_React$Component) {
  DeleteUser_inherits(DeleteUser, _React$Component);

  function DeleteUser() {
    var _getPrototypeOf2;

    var _this;

    DeleteUser_classCallCheck(this, DeleteUser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = DeleteUser_possibleConstructorReturn(this, (_getPrototypeOf2 = DeleteUser_getPrototypeOf(DeleteUser)).call.apply(_getPrototypeOf2, [this].concat(args)));

    DeleteUser_defineProperty(DeleteUser_assertThisInitialized(_this), "state", {
      open: false,
      isDeleting: false
    });

    DeleteUser_defineProperty(DeleteUser_assertThisInitialized(_this), "handleDeleteUser", function () {
      var user = _this.props.user;

      _this.setState({
        isDeleting: true
      });

      Object(api["e" /* deleteUser */])(user._id).then(function () {
        Object(lib_auth["e" /* signoutUser */])();
      }).catch(function (err) {
        console.error(err);

        _this.setState({
          isDeleting: false
        });
      });
    });

    DeleteUser_defineProperty(DeleteUser_assertThisInitialized(_this), "handleOpen", function () {
      return _this.setState({
        open: true
      });
    });

    DeleteUser_defineProperty(DeleteUser_assertThisInitialized(_this), "handleClose", function () {
      return _this.setState({
        open: false
      });
    });

    return _this;
  }

  DeleteUser_createClass(DeleteUser, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          open = _this$state.open,
          isDeleting = _this$state.isDeleting;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(IconButton_default.a, {
        onClick: this.handleOpen,
        color: "secondary"
      }, external_react_default.a.createElement(Delete_default.a, null)), external_react_default.a.createElement(Dialog_default.a, {
        open: open,
        onClose: this.handleClose
      }, external_react_default.a.createElement(DialogTitle_default.a, null, "Delete Account"), external_react_default.a.createElement(DialogContent_default.a, null, external_react_default.a.createElement(DialogContentText_default.a, null, "Confirm to delete your account")), external_react_default.a.createElement(DialogActions_default.a, null, external_react_default.a.createElement(Button_default.a, {
        onClick: this.handleClose,
        color: "primary"
      }, "Cancel"), external_react_default.a.createElement(Button_default.a, {
        onClick: this.handleDeleteUser,
        color: "secondary",
        disabled: isDeleting
      }, isDeleting ? "Deleting" : "Confirm"))));
    }
  }]);

  return DeleteUser;
}(external_react_default.a.Component);

/* harmony default export */ var profile_DeleteUser = (DeleteUser_DeleteUser);
// CONCATENATED MODULE: ./components/profile/FollowUser.js




var FollowUser_FollowUser = function FollowUser(_ref) {
  var isFollowing = _ref.isFollowing,
      toggleFollow = _ref.toggleFollow;
  var request = isFollowing ? api["m" /* unfollowUser */] : api["f" /* followUser */];
  return external_react_default.a.createElement(Button_default.a, {
    variant: "contained",
    color: isFollowing ? "secondary" : "primary",
    onClick: function onClick() {
      return toggleFollow(request);
    }
  }, isFollowing ? "Unfollow" : "Follow");
};

/* harmony default export */ var profile_FollowUser = (FollowUser_FollowUser);
// CONCATENATED MODULE: ./pages/profile.js



function profile_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { profile_typeof = function _typeof(obj) { return typeof obj; }; } else { profile_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return profile_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function profile_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function profile_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function profile_createClass(Constructor, protoProps, staticProps) { if (protoProps) profile_defineProperties(Constructor.prototype, protoProps); if (staticProps) profile_defineProperties(Constructor, staticProps); return Constructor; }

function profile_possibleConstructorReturn(self, call) { if (call && (profile_typeof(call) === "object" || typeof call === "function")) { return call; } return profile_assertThisInitialized(self); }

function profile_getPrototypeOf(o) { profile_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return profile_getPrototypeOf(o); }

function profile_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function profile_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) profile_setPrototypeOf(subClass, superClass); }

function profile_setPrototypeOf(o, p) { profile_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return profile_setPrototypeOf(o, p); }

function profile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















var profile_Profile =
/*#__PURE__*/
function (_React$Component) {
  profile_inherits(Profile, _React$Component);

  function Profile() {
    var _getPrototypeOf2;

    var _this;

    profile_classCallCheck(this, Profile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = profile_possibleConstructorReturn(this, (_getPrototypeOf2 = profile_getPrototypeOf(Profile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    profile_defineProperty(profile_assertThisInitialized(_this), "state", {
      user: null,
      posts: [],
      isAuth: false,
      isFollowing: false,
      isLoading: true,
      isDeletingPost: false
    });

    profile_defineProperty(profile_assertThisInitialized(_this), "checkFollow", function (auth, user) {
      return user.followers.findIndex(function (follower) {
        return follower._id === auth.user._id;
      }) > -1;
    });

    profile_defineProperty(profile_assertThisInitialized(_this), "toggleFollow", function (sendRequest) {
      var userId = _this.props.userId;
      var isFollowing = _this.state.isFollowing;
      sendRequest(userId).then(function () {
        _this.setState({
          isFollowing: !isFollowing
        });
      });
    });

    profile_defineProperty(profile_assertThisInitialized(_this), "handleDeletePost", function (deletedPost) {
      _this.setState({
        isDeletingPost: true
      });

      Object(api["d" /* deletePost */])(deletedPost._id).then(function (postData) {
        var postIndex = _this.state.posts.findIndex(function (post) {
          return post._id === postData._id;
        });

        var updatedPosts = [].concat(_toConsumableArray(_this.state.posts.slice(0, postIndex)), _toConsumableArray(_this.state.posts.slice(postIndex + 1)));

        _this.setState({
          posts: updatedPosts,
          isDeletingPost: false
        });
      }).catch(function (err) {
        console.error(err);

        _this.setState({
          isDeletingPost: false
        });
      });
    });

    profile_defineProperty(profile_assertThisInitialized(_this), "handleToggleLike", function (post) {
      var auth = _this.props.auth;
      var isPostLiked = post.likes.includes(auth.user._id);
      var sendRequest = isPostLiked ? api["n" /* unlikePost */] : api["l" /* likePost */];
      sendRequest(post._id).then(function (postData) {
        var postIndex = _this.state.posts.findIndex(function (post) {
          return post._id === postData._id;
        });

        var updatedPosts = [].concat(_toConsumableArray(_this.state.posts.slice(0, postIndex)), [postData], _toConsumableArray(_this.state.posts.slice(postIndex + 1)));

        _this.setState({
          posts: updatedPosts
        });
      }).catch(function (err) {
        return console.error(err);
      });
    });

    profile_defineProperty(profile_assertThisInitialized(_this), "handleAddComment", function (postId, text) {
      var comment = {
        text: text
      };
      Object(api["a" /* addComment */])(postId, comment).then(function (postData) {
        var postIndex = _this.state.posts.findIndex(function (post) {
          return post._id === postData._id;
        });

        var updatedPosts = [].concat(_toConsumableArray(_this.state.posts.slice(0, postIndex)), [postData], _toConsumableArray(_this.state.posts.slice(postIndex + 1)));

        _this.setState({
          posts: updatedPosts
        });
      }).catch(function (err) {
        return console.error(err);
      });
    });

    profile_defineProperty(profile_assertThisInitialized(_this), "handleDeleteComment", function (postId, comment) {
      Object(api["c" /* deleteComment */])(postId, comment).then(function (postData) {
        var postIndex = _this.state.posts.findIndex(function (post) {
          return post._id === postData._id;
        });

        var updatedPosts = [].concat(_toConsumableArray(_this.state.posts.slice(0, postIndex)), [postData], _toConsumableArray(_this.state.posts.slice(postIndex + 1)));

        _this.setState({
          posts: updatedPosts
        });
      }).catch(function (err) {
        return console.error(err);
      });
    });

    return _this;
  }

  profile_createClass(Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          userId = _this$props.userId,
          auth = _this$props.auth;
      Object(api["j" /* getUser */])(userId).then(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regenerator_default.a.mark(function _callee(user) {
          var isAuth, isFollowing, posts;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  isAuth = auth.user._id === userId;
                  isFollowing = _this2.checkFollow(auth, user);
                  _context.next = 4;
                  return Object(api["i" /* getPostsByUser */])(userId);

                case 4:
                  posts = _context.sent;

                  _this2.setState({
                    user: user,
                    posts: posts,
                    isAuth: isAuth,
                    isFollowing: isFollowing,
                    isLoading: false
                  });

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          auth = _this$props2.auth;
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          posts = _this$state.posts,
          user = _this$state.user,
          isAuth = _this$state.isAuth,
          isFollowing = _this$state.isFollowing,
          isDeletingPost = _this$state.isDeletingPost;
      return external_react_default.a.createElement(Paper_default.a, {
        className: classes.root,
        elevation: 4
      }, external_react_default.a.createElement(Typography_default.a, {
        variant: "h4",
        component: "h1",
        align: "center",
        className: classes.title,
        gutterBottom: true
      }, "Profile"), isLoading ? external_react_default.a.createElement("div", {
        className: classes.progressContainer
      }, external_react_default.a.createElement(CircularProgress_default.a, {
        className: classes.progress,
        size: 55,
        thickness: 5
      })) : external_react_default.a.createElement(List_default.a, {
        dense: true
      }, external_react_default.a.createElement(ListItem_default.a, null, external_react_default.a.createElement(ListItemAvatar_default.a, null, external_react_default.a.createElement(Avatar_default.a, {
        src: user.avatar,
        className: classes.bigAvatar
      })), external_react_default.a.createElement(ListItemText_default.a, {
        primary: user.name,
        secondary: user.email
      }), isAuth ? external_react_default.a.createElement(ListItemSecondaryAction_default.a, null, external_react_default.a.createElement(link_default.a, {
        href: "/edit-profile"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(IconButton_default.a, {
        color: "primary"
      }, external_react_default.a.createElement(Edit_default.a, null)))), external_react_default.a.createElement(profile_DeleteUser, {
        user: user
      })) : external_react_default.a.createElement(profile_FollowUser, {
        isFollowing: isFollowing,
        toggleFollow: this.toggleFollow
      })), external_react_default.a.createElement(Divider_default.a, null), external_react_default.a.createElement(ListItem_default.a, null, external_react_default.a.createElement(ListItemText_default.a, {
        primary: user.about,
        secondary: "Joined: ".concat(user.createdAt)
      })), external_react_default.a.createElement(profile_ProfileTabs, {
        auth: auth,
        posts: posts,
        user: user,
        isDeletingPost: isDeletingPost,
        handleDeletePost: this.handleDeletePost,
        handleToggleLike: this.handleToggleLike,
        handleAddComment: this.handleAddComment,
        handleDeleteComment: this.handleDeleteComment
      })));
    }
  }]);

  return Profile;
}(external_react_default.a.Component);

var profile_styles = function styles(theme) {
  return {
    root: profile_defineProperty({
      padding: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit * 5,
      margin: "auto"
    }, theme.breakpoints.up("sm"), {
      width: 600
    }),
    title: {
      color: theme.palette.primary.main
    },
    progress: {
      margin: theme.spacing.unit * 2
    },
    progressContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    },
    bigAvatar: {
      width: 60,
      height: 60,
      margin: 10
    }
  };
};

profile_Profile.getInitialProps = Object(lib_auth["a" /* authInitialProps */])(true);
/* harmony default export */ var profile = __webpack_exports__["default"] = (withStyles_default()(profile_styles)(profile_Profile));

/***/ })
/******/ ]);