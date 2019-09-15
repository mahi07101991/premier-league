webpackHotUpdate("main",{

/***/ "./src/redux/reducer/index.js":
/*!************************************!*\
  !*** ./src/redux/reducer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = {
  matches: [],
  deliveries: [],
  page: 0 + 1,
  overview: true
};

function action() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  debugger;

  switch (action.type) {
    case "LOAD_MATCHES":
      return _objectSpread({}, state, {
        page: 1,
        matches: action.data.matches,
        totalMatches: action.data.totalMatches,
        pageNumber: 1,
        overview: action.overview
      });

    case "LOAD_DELIVERIES":
      return _objectSpread({}, state, {
        deliveries: action.deliveries
      });

    case "INC_MATCHES":
      debugger;
      return _objectSpread({}, state, {
        page: state.page + 1,
        matches: action.data.matches,
        totalMatches: action.data.totalMatches,
        pageNumber: action.data.page,
        overview: action.overview
      });

    case "DEC_MATCHES":
      debugger;
      return _objectSpread({}, state, {
        page: state.page - 1,
        matches: action.data.matches,
        totalMatches: action.data.totalMatches,
        pageNumber: action.data.page,
        overview: action.overview
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

})
//# sourceMappingURL=main.758e2baa645a962b54e3.hot-update.js.map