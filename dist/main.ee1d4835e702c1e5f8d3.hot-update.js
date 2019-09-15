webpackHotUpdate("main",{

/***/ "./src/client/scripts/components/dashboard/index.js":
/*!**********************************************************!*\
  !*** ./src/client/scripts/components/dashboard/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _side_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../side-navigation */ "./src/client/scripts/components/side-navigation/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../redux/actions */ "./src/redux/actions/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navbar */ "./src/client/scripts/components/navbar/index.js");
/* harmony import */ var _overview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../overview */ "./src/client/scripts/components/overview/index.js");
/* harmony import */ var _match_details__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../match-details */ "./src/client/scripts/components/match-details/index.js");
/* harmony import */ var _batsman_score__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../batsman-score */ "./src/client/scripts/components/batsman-score/index.js");
/* harmony import */ var _batsman_ranking__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../batsman-ranking */ "./src/client/scripts/components/batsman-ranking/index.js");
/* harmony import */ var _team_vs_team__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../team-vs-team */ "./src/client/scripts/components/team-vs-team/index.js");
/* harmony import */ var _batsman_score_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../batsman-score-chart */ "./src/client/scripts/components/batsman-score-chart/index.js");
/* harmony import */ var _batsman_ranking_chart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../batsman-ranking-chart */ "./src/client/scripts/components/batsman-ranking-chart/index.js");
/* harmony import */ var _team_vs_team_chart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../team-vs-team-chart */ "./src/client/scripts/components/team-vs-team-chart/index.js");
/* harmony import */ var _manage_scores__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../manage-scores */ "./src/client/scripts/components/manage-scores/index.js");
/* harmony import */ var _manage_team__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../manage-team */ "./src/client/scripts/components/manage-team/index.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../footer */ "./src/client/scripts/components/footer/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

    _defineProperty(_assertThisInitialized(_this), "toggleBar", function () {
      _this.setState({
        toggle: !_this.state.toggle
      });
    });

    _this.state = {
      toggle: true
    };
    return _this;
  }

  _createClass(index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.actions.loadMatches(1);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, this.props, {
        auth: this.props.auth,
        searchMatches: this.props.actions.searchMatches
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_side_navigation__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        toggle: this.state.toggle
      }, this.props, {
        hideSideBar: function hideSideBar() {
          _this2.toggleBar();
        },
        loadMatches: this.props.actions.loadMatches
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "floating-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        id: "sidebarCollapse",
        className: this.state.toggle ? "navbar-btn" : "navbar-btn active",
        onClick: function onClick() {
          return _this2.toggleBar();
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)), this.state.toggle === true && window.innerWidth < 768 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, this.props.match.params.id ? this.props.match.params.id.replace(/-/g, " ") : " "), window.innerWidth > 768 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, this.props.match.params.id ? this.props.match.params.id.replace(/-/g, " ") : " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid"
      }, this.state.toggle === true && window.innerWidth < 768 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/overview",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_overview__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, props, {
            totalMatches: _this2.props.totalMatches,
            matches: _this2.props.matches,
            page: _this2.props.page,
            decMatches: _this2.props.actions.decMatches,
            incMatches: _this2.props.actions.incMatches,
            pageNumber: _this2.props.page,
            overview: _this2.props.overview,
            searchMatches: _this2.props.actions.searchMatches,
            updateMatchDetails: _this2.props.actions.searchMatches
          }));
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/match/:id",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_match_details__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
            updateMatchDetails: _this2.props.actions.updateMatchDetails,
            matchDetails: _this2.props.matchDetails
          }));
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/batsman-score",
        component: _batsman_score__WEBPACK_IMPORTED_MODULE_10__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/batsman-ranking",
        component: _batsman_ranking__WEBPACK_IMPORTED_MODULE_11__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/team-vs-team",
        component: _team_vs_team__WEBPACK_IMPORTED_MODULE_12__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/batsman-score-chart",
        component: _batsman_score_chart__WEBPACK_IMPORTED_MODULE_13__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/batsman-ranking-chart",
        component: _batsman_ranking_chart__WEBPACK_IMPORTED_MODULE_14__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/team-vs-team-chart",
        component: _team_vs_team_chart__WEBPACK_IMPORTED_MODULE_15__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/manage-scores",
        component: _manage_scores__WEBPACK_IMPORTED_MODULE_16__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/manage-team",
        component: _manage_team__WEBPACK_IMPORTED_MODULE_17__["default"]
      })), window.innerWidth > 768 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/overview",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_overview__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, props, {
            totalMatches: _this2.props.totalMatches,
            matches: _this2.props.matches,
            page: _this2.props.page,
            decMatches: _this2.props.actions.decMatches,
            incMatches: _this2.props.actions.incMatches,
            pageNumber: _this2.props.page,
            overview: _this2.props.overview,
            searchMatches: _this2.props.actions.searchMatches,
            updateMatchDetails: _this2.props.actions.updateMatchDetails
          }));
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/match/:id",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_match_details__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
            updateMatchDetails: _this2.props.actions.updateMatchDetails,
            matchDetails: _this2.props.matchDetails
          }));
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/batsman-score",
        component: _batsman_score__WEBPACK_IMPORTED_MODULE_10__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/batsman-ranking",
        component: _batsman_ranking__WEBPACK_IMPORTED_MODULE_11__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/team-vs-team",
        component: _team_vs_team__WEBPACK_IMPORTED_MODULE_12__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/batsman-score-chart",
        component: _batsman_score_chart__WEBPACK_IMPORTED_MODULE_13__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/batsman-ranking-chart",
        component: _batsman_ranking_chart__WEBPACK_IMPORTED_MODULE_14__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/team-vs-team-chart",
        component: _team_vs_team_chart__WEBPACK_IMPORTED_MODULE_15__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/manage-scores",
        component: _manage_scores__WEBPACK_IMPORTED_MODULE_16__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/dashboard/manage-team",
        component: _manage_team__WEBPACK_IMPORTED_MODULE_17__["default"]
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_18__["default"], null));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    matches: state.matches,
    page: state.page,
    totalMatches: state.totalMatches,
    pageNumber: state.page,
    overview: state.overview,
    matchDetails: state.matchDetails
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions__WEBPACK_IMPORTED_MODULE_5__, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(index)));

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
//# sourceMappingURL=main.ee1d4835e702c1e5f8d3.hot-update.js.map