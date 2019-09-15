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
/*! exports provided: loadMatches, matches, loadDeliveries, deliveries, pageInc, pageDec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMatches", function() { return loadMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDeliveries", function() { return loadDeliveries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deliveries", function() { return deliveries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageInc", function() { return pageInc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageDec", function() { return pageDec; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");

function loadMatches() {
  return function (dispatch) {
    return Object(_services__WEBPACK_IMPORTED_MODULE_0__["default"])("http://localhost:5000/api/matches/1", "GET").then(function (response) {
      dispatch(matches(response.data));
    })["catch"](function (e) {
      return console.log(e);
    });
  };
}
function matches(matches) {
  return {
    type: "LOAD_MATCHES",
    matches: matches
  };
}
function loadDeliveries(id) {
  return function (dispatch) {
    return Object(_services__WEBPACK_IMPORTED_MODULE_0__["default"])("http://localhost:5000/api/deliveries/".concat(id), "GET").then(function (response) {
      dispatch(deliveries(response.data));
    })["catch"](function (e) {
      return console.log(e);
    });
  };
}
function deliveries(deliveries) {
  return {
    type: "LOAD_DELIVERIES",
    deliveries: deliveries
  };
}
function pageInc() {
  return function (dispatch) {
    return dispatch({
      type: "PAGE_INC"
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
//# sourceMappingURL=main.b90e7c76cec6d28b25e8.hot-update.js.map