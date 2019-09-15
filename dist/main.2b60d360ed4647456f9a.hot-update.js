webpackHotUpdate("main",{

/***/ "./src/client/scripts/components/match-details/index.js":
/*!**************************************************************!*\
  !*** ./src/client/scripts/components/match-details/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var index =
/*#__PURE__*/
function (_Component) {
  _inherits(index, _Component);

  function index(props) {
    var _this;

    _classCallCheck(this, index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(index).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getRows", function () {
      var matches = [];

      for (var i in _this.props.matchDetails) {
        matchDetails.push(_this.props.matchDetails[i]);
      }

      return matchDetails.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: i
        }, ["inning", "batting_team", "bowling_team", "over", "ball", "batsman", "non_striker", "bowler", "is_super_over", "wide_runs", "bye_runs", "legbye_runs", "noball_runs", "penalty_runs", "batsman_runs", "extra_runs", "total_runs", "player_dismissed", "dismissal_kind", "fielder"].map(function (index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item[index]);
        }));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getTabletRows", function () {
      return _this.props.matchDetails.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: i
        }, ["inning", "batting_team", "bowling_team", "over", "ball", "batsman", "non_striker", "bowler", "is_super_over", "wide_runs", "bye_runs", "legbye_runs", "noball_runs", "penalty_runs", "batsman_runs", "extra_runs", "total_runs", "player_dismissed", "dismissal_kind", "fielder"].map(function (index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "row"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            "class": "col-sm heading-th"
          }, index), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            "class": "col-sm"
          }, item[index])));
        }));
      });
    });

    return _this;
  }

  _createClass(index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.matchDetails);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.matchDetails) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "team-title"
      }, ".::".concat(this.props.matchDetails[0].batting_team, " - ").concat(this.props.matchDetails[0].bowling_team, "::.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "table table-bordered"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "heading-main"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "inning"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "batting_team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "bowling_team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "over"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ball"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "batsman"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "non_striker"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "bowler"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "is_super_over"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "wide_runs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "bye_runs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "legbye_runs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "noball_runs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "penalty_runs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "batsman_runs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "extra_runs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "total_runs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "player_dismissed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "dismissal_kind"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "fielder"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, window.innerWidth > 1100 ? this.getRows() : this.getTabletRows())));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
//# sourceMappingURL=main.2b60d360ed4647456f9a.hot-update.js.map