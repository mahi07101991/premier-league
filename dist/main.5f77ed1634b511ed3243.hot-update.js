webpackHotUpdate("main",{

/***/ "./src/redux/actions/index.js":
/*!************************************!*\
  !*** ./src/redux/actions/index.js ***!
  \************************************/
/*! exports provided: loadMatches, incMatches, searchMatches, decMatches, loadDeliveries, pageDec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMatches", function() { return loadMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incMatches", function() { return incMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchMatches", function() { return searchMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decMatches", function() { return decMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDeliveries", function() { return loadDeliveries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageDec", function() { return pageDec; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");

function loadMatches() {
  debugger;
  return function (dispatch) {
    return Object(_services__WEBPACK_IMPORTED_MODULE_0__["default"])("http://localhost:5000/api/matches/75", "GET").then(function (response) {
      dispatch({
        type: "LOAD_MATCHES",
        data: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
}
function incMatches(page) {
  debugger;
  return function (dispatch) {
    return Object(_services__WEBPACK_IMPORTED_MODULE_0__["default"])("http://localhost:5000/api/matches/".concat(page), "GET").then(function (response) {
      dispatch({
        type: "INC_MATCHES",
        data: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
}
function searchMatches(value) {
  debugger;
  return function (dispatch) {
    return Object(_services__WEBPACK_IMPORTED_MODULE_0__["default"])("http://localhost:5000/api/matches/find/".concat(value), "GET").then(function (response) {
      dispatch({
        type: "LOAD_MATCHES",
        data: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
}
function decMatches(page) {
  debugger;
  return function (dispatch) {
    return Object(_services__WEBPACK_IMPORTED_MODULE_0__["default"])("http://localhost:5000/api/matches/".concat(page), "GET").then(function (response) {
      dispatch({
        type: "DEC_MATCHES",
        data: response.data
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

/***/ })

})
//# sourceMappingURL=main.5f77ed1634b511ed3243.hot-update.js.map