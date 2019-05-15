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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
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
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 25 */,
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
/* 33 */,
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
/* 45 */,
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
/* 65 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddAPhoto");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBox");

/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__(44);

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__(65);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "@material-ui/core/styles/withStyles"
var withStyles_ = __webpack_require__(4);
var withStyles_default = /*#__PURE__*/__webpack_require__.n(withStyles_);

// EXTERNAL MODULE: ./lib/auth.js
var lib_auth = __webpack_require__(9);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(24);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(6);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

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

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(8);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__(66);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__(5);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(14);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/AddAPhoto"
var AddAPhoto_ = __webpack_require__(67);
var AddAPhoto_default = /*#__PURE__*/__webpack_require__.n(AddAPhoto_);

// CONCATENATED MODULE: ./components/index/NewPost.js













var NewPost_NewPost = function NewPost(_ref) {
  var classes = _ref.classes,
      auth = _ref.auth,
      text = _ref.text,
      image = _ref.image,
      isAddingPost = _ref.isAddingPost,
      handleChange = _ref.handleChange,
      handleAddPost = _ref.handleAddPost;
  return external_react_default.a.createElement(Card_default.a, {
    className: classes.card
  }, external_react_default.a.createElement(CardHeader_default.a, {
    avatar: external_react_default.a.createElement(Avatar_default.a, {
      src: auth.user.avatar
    }),
    title: external_react_default.a.createElement(Typography_default.a, {
      variant: "h6",
      component: "h2"
    }, auth.user.name),
    className: classes.cardHeader
  }), external_react_default.a.createElement(CardContent_default.a, {
    className: classes.cardContent
  }, external_react_default.a.createElement(TextField_default.a, {
    label: "Add a status",
    value: text,
    name: "text",
    multiline: true,
    row: "2",
    placeholder: "What's on your mind, ".concat(auth.user.name, "?"),
    fullWidth: true,
    margin: "normal",
    onChange: handleChange,
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    }
  }), external_react_default.a.createElement("input", {
    accept: "image/*",
    name: "image",
    id: "image",
    onChange: handleChange,
    className: classes.input,
    type: "file"
  }), external_react_default.a.createElement("label", {
    htmlFor: "image"
  }, external_react_default.a.createElement(IconButton_default.a, {
    color: "secondary",
    component: "span"
  }, external_react_default.a.createElement(AddAPhoto_default.a, null))), external_react_default.a.createElement("span", null, image && image.name)), external_react_default.a.createElement(CardActions_default.a, {
    className: classes.cardActions
  }, external_react_default.a.createElement(Button_default.a, {
    color: "primary",
    variant: "contained",
    disabled: !text || isAddingPost,
    className: classes.submit,
    onClick: handleAddPost
  }, isAddingPost ? "Sending" : "Post")));
};

var styles = function styles(theme) {
  return {
    card: {
      marginBottom: theme.spacing.unit * 3,
      backgroundColor: theme.palette.primary.light
    },
    cardContent: {
      backgroundColor: "white"
    },
    input: {
      display: "none"
    },
    cardActions: {
      display: "flex",
      flexDirection: "row-reverse"
    }
  };
};

/* harmony default export */ var index_NewPost = (withStyles_default()(styles)(NewPost_NewPost));
// EXTERNAL MODULE: ./components/index/Post.js + 1 modules
var Post = __webpack_require__(42);

// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(7);

// CONCATENATED MODULE: ./components/index/PostFeed.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var PostFeed_PostFeed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PostFeed, _React$Component);

  function PostFeed() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PostFeed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PostFeed)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      posts: [],
      text: "",
      image: "",
      isAddingPost: false,
      isDeletingPost: false
    });

    _defineProperty(_assertThisInitialized(_this), "getPosts", function () {
      var auth = _this.props.auth;
      Object(api["h" /* getPostFeed */])(auth.user._id).then(function (posts) {
        return _this.setState({
          posts: posts
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var inputValue;

      if (event.target.name === "image") {
        inputValue = event.target.files[0];
      } else {
        inputValue = event.target.value;
      }

      _this.postData.set(event.target.name, inputValue);

      _this.setState(_defineProperty({}, event.target.name, inputValue));
    });

    _defineProperty(_assertThisInitialized(_this), "handleAddPost", function () {
      var auth = _this.props.auth;

      _this.setState({
        isAddingPost: true
      });

      Object(api["b" /* addPost */])(auth.user._id, _this.postData).then(function (postData) {
        var updatedPosts = [postData].concat(_toConsumableArray(_this.state.posts));

        _this.setState({
          posts: updatedPosts,
          isAddingPost: false,
          text: "",
          image: ""
        });

        _this.postData.delete("image");
      }).catch(function (err) {
        console.error(err);

        _this.setState({
          isAddingPost: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeletePost", function (deletedPost) {
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

    _defineProperty(_assertThisInitialized(_this), "handleToggleLike", function (post) {
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

    _defineProperty(_assertThisInitialized(_this), "handleAddComment", function (postId, text) {
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

    _defineProperty(_assertThisInitialized(_this), "handleDeleteComment", function (postId, comment) {
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

  _createClass(PostFeed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.postData = new FormData();
      this.getPosts();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          auth = _this$props.auth;
      var _this$state = this.state,
          posts = _this$state.posts,
          text = _this$state.text,
          image = _this$state.image,
          isAddingPost = _this$state.isAddingPost,
          isDeletingPost = _this$state.isDeletingPost;
      return external_react_default.a.createElement("div", {
        className: classes.root
      }, external_react_default.a.createElement(Typography_default.a, {
        variant: "h4",
        component: "h1",
        align: "center",
        color: "primary",
        className: classes.title
      }, "Post Feed"), external_react_default.a.createElement(index_NewPost, {
        auth: auth,
        text: text,
        image: image,
        isAddingPost: isAddingPost,
        handleChange: this.handleChange,
        handleAddPost: this.handleAddPost
      }), posts.map(function (post) {
        return external_react_default.a.createElement(Post["a" /* default */], {
          key: post._id,
          auth: auth,
          post: post,
          isDeletingPost: isDeletingPost,
          handleDeletePost: _this2.handleDeletePost,
          handleToggleLike: _this2.handleToggleLike,
          handleAddComment: _this2.handleAddComment,
          handleDeleteComment: _this2.handleDeleteComment
        });
      }));
    }
  }]);

  return PostFeed;
}(external_react_default.a.Component);

var PostFeed_styles = function styles(theme) {
  return {
    root: {
      paddingBottom: theme.spacing.unit * 2
    },
    title: {
      padding: theme.spacing.unit * 2
    }
  };
};

/* harmony default export */ var index_PostFeed = (withStyles_default()(PostFeed_styles)(PostFeed_PostFeed));
// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__(19);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

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

// EXTERNAL MODULE: external "@material-ui/core/Snackbar"
var Snackbar_ = __webpack_require__(18);
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "@material-ui/icons/AccountBox"
var AccountBox_ = __webpack_require__(68);
var AccountBox_default = /*#__PURE__*/__webpack_require__.n(AccountBox_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(13);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/index/UserFeed.js


function UserFeed_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UserFeed_typeof = function _typeof(obj) { return typeof obj; }; } else { UserFeed_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UserFeed_typeof(obj); }

function UserFeed_toConsumableArray(arr) { return UserFeed_arrayWithoutHoles(arr) || UserFeed_iterableToArray(arr) || UserFeed_nonIterableSpread(); }

function UserFeed_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function UserFeed_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function UserFeed_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function UserFeed_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UserFeed_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UserFeed_createClass(Constructor, protoProps, staticProps) { if (protoProps) UserFeed_defineProperties(Constructor.prototype, protoProps); if (staticProps) UserFeed_defineProperties(Constructor, staticProps); return Constructor; }

function UserFeed_possibleConstructorReturn(self, call) { if (call && (UserFeed_typeof(call) === "object" || typeof call === "function")) { return call; } return UserFeed_assertThisInitialized(self); }

function UserFeed_getPrototypeOf(o) { UserFeed_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UserFeed_getPrototypeOf(o); }

function UserFeed_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UserFeed_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UserFeed_setPrototypeOf(subClass, superClass); }

function UserFeed_setPrototypeOf(o, p) { UserFeed_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UserFeed_setPrototypeOf(o, p); }

function UserFeed_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















var UserFeed_UserFeed =
/*#__PURE__*/
function (_React$Component) {
  UserFeed_inherits(UserFeed, _React$Component);

  function UserFeed() {
    var _getPrototypeOf2;

    var _this;

    UserFeed_classCallCheck(this, UserFeed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = UserFeed_possibleConstructorReturn(this, (_getPrototypeOf2 = UserFeed_getPrototypeOf(UserFeed)).call.apply(_getPrototypeOf2, [this].concat(args)));

    UserFeed_defineProperty(UserFeed_assertThisInitialized(_this), "state", {
      users: [],
      openSuccess: false,
      followingMessage: ""
    });

    UserFeed_defineProperty(UserFeed_assertThisInitialized(_this), "handleFollow", function (user, userIndex) {
      Object(api["f" /* followUser */])(user._id).then(function (user) {
        var updatedUsers = [].concat(UserFeed_toConsumableArray(_this.state.users.slice(0, userIndex)), UserFeed_toConsumableArray(_this.state.users.slice(userIndex + 1)));

        _this.setState({
          users: updatedUsers,
          openSuccess: true,
          followingMessage: "Following ".concat(user.name)
        });
      });
    });

    UserFeed_defineProperty(UserFeed_assertThisInitialized(_this), "handleClose", function () {
      return _this.setState({
        openSuccess: false
      });
    });

    return _this;
  }

  UserFeed_createClass(UserFeed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var auth = this.props.auth;
      Object(api["k" /* getUserFeed */])(auth.user._id).then(function (users) {
        return _this2.setState({
          users: users
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var classes = this.props.classes;
      var _this$state = this.state,
          users = _this$state.users,
          openSuccess = _this$state.openSuccess,
          followingMessage = _this$state.followingMessage;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Typography_default.a, {
        type: "title",
        variant: "h6",
        component: "h2",
        align: "center"
      }, "Browse Users"), external_react_default.a.createElement(Divider_default.a, null), external_react_default.a.createElement(List_default.a, null, users.map(function (user, i) {
        return external_react_default.a.createElement("span", {
          key: user._id
        }, external_react_default.a.createElement(ListItem_default.a, null, external_react_default.a.createElement(ListItemAvatar_default.a, {
          className: classes.avatar
        }, external_react_default.a.createElement(Avatar_default.a, {
          src: user.avatar
        })), external_react_default.a.createElement(ListItemText_default.a, {
          primary: user.name
        }), external_react_default.a.createElement(ListItemSecondaryAction_default.a, {
          className: classes.follow
        }, external_react_default.a.createElement(link_default.a, {
          href: "/profile/".concat(user._id)
        }, external_react_default.a.createElement(IconButton_default.a, {
          variant: "contained",
          color: "secondary",
          className: classes.viewButton
        }, external_react_default.a.createElement(AccountBox_default.a, null))), external_react_default.a.createElement(Button_default.a, {
          variant: "contained",
          color: "primary",
          onClick: function onClick() {
            return _this3.handleFollow(user, i);
          }
        }, "Follow"))));
      })), external_react_default.a.createElement(Snackbar_default.a, {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
        open: openSuccess,
        onClose: this.handleClose,
        autoHideDuration: 6000,
        message: external_react_default.a.createElement("span", {
          className: classes.snack
        }, followingMessage)
      }));
    }
  }]);

  return UserFeed;
}(external_react_default.a.Component);

var UserFeed_styles = function styles(theme) {
  return {
    root: {
      padding: theme.spacing.unit
    },
    avatar: {
      marginRight: theme.spacing.unit
    },
    follow: {
      right: theme.spacing.unit * 2
    },
    snack: {
      color: theme.palette.primary.light
    },
    viewButton: {
      verticalAlign: "middle"
    }
  };
};

/* harmony default export */ var index_UserFeed = (withStyles_default()(UserFeed_styles)(UserFeed_UserFeed));
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./pages/index.js


function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var pages_Index = function Index(_ref) {
  var classes = _ref.classes,
      auth = _ref.auth;
  return external_react_default.a.createElement("main", {
    className: classes.root
  }, auth.user && auth.user._id ? // Auth user page
  external_react_default.a.createElement(core_["Grid"], {
    container: true
  }, external_react_default.a.createElement(core_["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 7
  }, external_react_default.a.createElement(index_PostFeed, {
    auth: auth
  })), external_react_default.a.createElement(core_["Grid"], {
    item: true,
    className: classes.drawerContainer
  }, external_react_default.a.createElement(Drawer_default.a, {
    className: classes.drawer,
    variant: "permanent",
    anchor: "right",
    classes: {
      paper: classes.drawerPaper
    }
  }, external_react_default.a.createElement(index_UserFeed, {
    auth: auth
  })))) : // Splash page (Unauth page)
  external_react_default.a.createElement("div", null, external_react_default.a.createElement(core_["Grid"], {
    justify: "center",
    alignItems: "center",
    direction: "row",
    container: true,
    className: classes.heroContent
  }, external_react_default.a.createElement(core_["Typography"], {
    variant: "h2",
    component: "h1",
    align: "center",
    color: "textPrimary",
    gutterBottom: true
  }, "Social Network"), external_react_default.a.createElement(core_["Typography"], {
    variant: "h6",
    component: "p",
    align: "center",
    color: "textSecondary"
  }, "Dolore qui reprehenderit nulla esse voluptate pariatur reprehenderit do minim adipisicing voluptate. Commodo laboris sunt cupidatat eu aliqua aute Lorem minim labore. Deserunt anim minim non et ex mollit non est consectetur."), external_react_default.a.createElement(core_["Button"], {
    className: classes.fabButton,
    variant: "extendedFab",
    color: "primary",
    onClick: function onClick() {
      return router_default.a.push("/signup");
    }
  }, "Get Started"))));
};

var pages_styles = function styles(theme) {
  return {
    root: pages_defineProperty({
      paddingTop: theme.spacing.unit * 10,
      paddingLeft: theme.spacing.unit * 5
    }, theme.breakpoints.down("sm"), {
      paddingRight: theme.spacing.unit * 5
    }),
    progressContainer: {
      height: "80vh"
    },
    progress: {
      margin: theme.spacing.unit * 2,
      color: theme.palette.secondary.light
    },
    drawerContainer: pages_defineProperty({}, theme.breakpoints.down("sm"), {
      display: "none"
    }),
    drawer: {
      width: 350
    },
    drawerPaper: {
      marginTop: 70,
      width: 350
    },
    fabButton: {
      margin: theme.spacing.unit * 3
    },
    heroContent: {
      maxWidth: 600,
      paddingTop: theme.spacing.unit * 8,
      paddingBottom: theme.spacing.unit * 6,
      margin: "0 auto"
    }
  };
};

pages_Index.getInitialProps = Object(lib_auth["a" /* authInitialProps */])();
/* harmony default export */ var pages = __webpack_exports__["default"] = (withStyles_default()(pages_styles)(pages_Index));

/***/ })
/******/ ]);