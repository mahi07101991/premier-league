webpackHotUpdate("main",{

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/redux/actions/index.js":
/*!************************************!*\
  !*** ./src/redux/actions/index.js ***!
  \************************************/
/*! exports provided: loadMatches, incMatches, decMatches, loadDeliveries, pageDec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMatches", function() { return loadMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incMatches", function() { return incMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decMatches", function() { return decMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDeliveries", function() { return loadDeliveries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageDec", function() { return pageDec; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");

function loadMatches() {
  debugger;
  return function (dispatch) {
    return Object(_services__WEBPACK_IMPORTED_MODULE_0__["default"])("http://localhost:5000/api/matches/1", "GET").then(function (response) {
      dispatch({
        type: "LOAD_MATCHES",
        matches: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
}
function incMatches(page) {
  return function (dispatch) {
    return Object(_services__WEBPACK_IMPORTED_MODULE_0__["default"])("http://localhost:5000/api/matches/".concat(page), "GET").then(function (response) {
      dispatch({
        type: "INC_DELIVERIES",
        matches: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
}
function decMatches(page) {
  return function (dispatch) {
    return Object(_services__WEBPACK_IMPORTED_MODULE_0__["default"])("http://localhost:5000/api/matches/".concat(page), "GET").then(function (response) {
      dispatch({
        type: "DEC_DELIVERIES",
        matches: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
}
function loadDeliveries() {
  return function (dispatch) {
    return Object(_services__WEBPACK_IMPORTED_MODULE_0__["default"])("http://localhost:5000/api/deliveries/1", "GET").then(function (response) {
      dispatch({
        type: "LOAD_DELIVERIES",
        deliveries: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
}
function pageDec() {
  return function (dispatch) {
    return dispatch({
      type: "PAGE_DEC"
    });
  };
}

/***/ }),

/***/ "?3f8a":
false,

/***/ "?c1ba":
false,

/***/ "?cf75":
false,

/***/ "?e5f2":
false

})
//# sourceMappingURL=main.20a7b54919fecc89af94.hot-update.js.map