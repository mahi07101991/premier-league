webpackHotUpdate("main",{

/***/ "./src/redux/actions/index.js":
/*!************************************!*\
  !*** ./src/redux/actions/index.js ***!
  \************************************/
/*! exports provided: loadMatches, incMatches, decMatches, searchMatches, updateMatchDetails, pageDec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMatches", function() { return loadMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incMatches", function() { return incMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decMatches", function() { return decMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchMatches", function() { return searchMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMatchDetails", function() { return updateMatchDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageDec", function() { return pageDec; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");

function loadMatches() {
  debugger;
  return function (dispatch) {
    return Object(_services__WEBPACK_IMPORTED_MODULE_0__["default"])("http://localhost:5000/api/matches/0", "GET").then(function (response) {
      dispatch({
        type: "LOAD_MATCHES",
        data: response.data,
        overview: true
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
        data: response.data,
        overview: true
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
        data: response.data,
        overview: true
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
        data: response.data,
        overview: false
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
}
function updateMatchDetails(id) {
  debugger;
  return function (dispatch) {
    return Object(_services__WEBPACK_IMPORTED_MODULE_0__["default"])("http://localhost:5000/api/matches/details/".concat(id), "GET").then(function (response) {
      dispatch({
        type: "MATCHE_DETAILS",
        data: response.data,
        overview: false
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
//# sourceMappingURL=main.6bcd44ea54f29c60cf94.hot-update.js.map