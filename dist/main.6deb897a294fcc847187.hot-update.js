webpackHotUpdate("main",{

/***/ "./src/client/scripts/components/overview/index.js":
/*!*********************************************************!*\
  !*** ./src/client/scripts/components/overview/index.js ***!
  \*********************************************************/
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

      for (var i in _this.props.matches) {
        matches.push(_this.props.matches[i]);
      }

      return matches.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.season), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.city), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.team1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.team2), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.winner), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.venue));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getTabletRows", function () {
      return _this.props.matches.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "id:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.id))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "season:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.season))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "city:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.city))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "date:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.date))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "team1:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.team1))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "team2:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.team2))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "toss winner:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.toss_winner))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "toss decision:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.toss_decision))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "result:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.result))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "dl applied:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.dl_applied))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "winner:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.winner))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "win byruns:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.win_by_runs))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "win by wickets:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.win_by_wickets))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "player of match:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.player_of_match))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "venue:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.venue))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "umpire1:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.umpire1))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "umpire2:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.umpire2))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm heading-th"
        }, "umpire3:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "col-sm"
        }, item.umpire3))));
      });
    });

    _this.state = {};
    return _this;
  }

  _createClass(index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      window.addEventListener("resize", function (event) {
        _this2.setState({
          width: event
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "pagination"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "".concat(this.props.matches[this.props.matches.length - 1].id / 10, " - ").concat(this.props.matches.length, " of 100")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          if (_this3.props.page > 0) {
            _this3.props.decMatches(_this3.props.page - 1);
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "class": "fa fa-chevron-left"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          if (_this3.props.page >= 0) {
            _this3.props.incMatches(_this3.props.page + 1);
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "class": "fa fa-chevron-right"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "table table-bordered"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "heading-main"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "season"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "city"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "team1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "team2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "winner"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, window.innerWidth > 1100 ? this.getRows() : this.getTabletRows())));
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
//# sourceMappingURL=main.6deb897a294fcc847187.hot-update.js.map