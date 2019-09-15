webpackHotUpdate("main",{

/***/ "./src/client/scripts/components/side-navigation/index.js":
/*!****************************************************************!*\
  !*** ./src/client/scripts/components/side-navigation/index.js ***!
  \****************************************************************/
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
function (_PureComponent) {
  _inherits(index, _PureComponent);

  function index(props) {
    var _this;

    _classCallCheck(this, index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(index).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "goToPage", function (path) {
      window.innerWidth < 980 && _this.props.hideSideBar();
      if (path === "/dashboard/overview") _this.props.loadMatches();

      _this.props.history.push(path);
    });

    _this.paths = [{
      path: "/dashboard/overview",
      title: "Overview"
    }, {
      path: "/dashboard/batsman-score",
      title: "Batsman Score"
    }, {
      path: "/dashboard/batsman-ranking",
      title: "Batsman Ranking"
    }, {
      path: "/dashboard/team-vs-team",
      title: "Team1 vs Team2"
    }, {
      path: "/dashboard/batsman-score-chart",
      title: "Batsman Score Chart"
    }, {
      path: "/dashboard/batsman-ranking-chart",
      title: "Batsman Ranking Chart"
    }, {
      path: "/dashboard/team-vs-team-chart",
      title: "Team1 vs Team2 Chart"
    }, {
      path: "/dashboard/manage-scores",
      title: "Manage Scores"
    }, {
      path: "/dashboard/manage-team",
      title: "Manage Team"
    }];
    return _this;
  }

  _createClass(index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      debugger;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        id: "sidebar",
        className: !this.props.toggle ? "active" : ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled components"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "first-li-elemet"
      }), this.paths.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          onClick: function onClick() {
            _this2.goToPage(item.path);
          }
        }, item.title));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled CTAs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "download"
      }, "Contact Us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "article"
      }, "Feedback"))));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=main.c3cbdec8ad9146c0d85b.hot-update.js.map