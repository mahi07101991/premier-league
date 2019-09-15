webpackHotUpdate("main",{

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (url, type) {
  var options = {
    url: url,
    headers: {
      Autorization: "Bearer ".concat(localStorage.getItem("access_token"))
    },
    method: type,
    // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    // no-cors, cors, *same-origin
    cache: "no-cache",
    // *default, no-cache, reload, force-cache, only-if-cached
    json: true
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.request(options);
});

/***/ })

})
//# sourceMappingURL=main.4e4484946981f1c37879.hot-update.js.map