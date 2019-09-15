webpackHotUpdate("main",{

/***/ "./src/client/scripts/components/navbar/index.js":
/*!*******************************************************!*\
  !*** ./src/client/scripts/components/navbar/index.js ***!
  \*******************************************************/
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

    _defineProperty(_assertThisInitialized(_this), "searchMatches", function () {
      debugger;
      var value = _this.search.current.value;
      if (_this.search.current.value == "") return false;

      _this.props.searchMatches(value.charAt(0).toUpperCase() + value.substring(1));
    });

    _this.state = {
      profile: {}
    };
    _this.search = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      if (this.props.auth.isAuthenticated()) {
        this.setState({
          profile: {}
        });
        var _this$props$auth = this.props.auth,
            userProfile = _this$props$auth.userProfile,
            getProfile = _this$props$auth.getProfile;

        if (!userProfile) {
          getProfile(function (err, profile) {
            _this2.setState({
              profile: profile
            });
          });
        } else {
          this.setState({
            profile: userProfile
          });
        }
      }
    }
  }, {
    key: "goTo",
    value: function goTo(route) {
      this.props.history.push("/".concat(route));
    }
  }, {
    key: "login",
    value: function login() {
      this.props.auth.login();
    }
  }, {
    key: "logout",
    value: function logout() {
      this.props.auth.logout();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-light bg-dark"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "navbar-brand",
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "https://cdn.worldvectorlogo.com/logos/phoenix-36.svg",
        width: 30,
        height: 30,
        alt: "Premier League"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          color: "#fff"
        }
      }, "Premier League")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        style: {
          background: "#fff"
        },
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "navbar-nav ml-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item active"
      }, this.props.auth.isAuthenticated() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        "class": "nav-link"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.state.profile ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        width: "22px",
        src: this.state.profile.picture
      }) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          marginLeft: "4px",
          color: "#fff"
        }
      }, this.state.profile ? this.state.profile.name : null))) : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item active"
      }, !this.props.auth.isAuthenticated() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link active",
        onClick: function onClick() {
          _this3.login();
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "white"
      }, "Login\xA0\xA0")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link active",
        onClick: function onClick() {
          _this3.logout();
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "green"
      }, "Logout")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-inline my-2 my-lg-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control mr-sm-2",
        type: "search",
        placeholder: "Search",
        "aria-label": "Search",
        style: {
          borderRadius: "0px",
          borderBottom: "2px solid crimson"
        },
        ref: this.search
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-outline-success my-2 my-sm-0",
        type: "submit",
        style: {
          color: "white",
          borderColor: "white"
        },
        onClick: function onClick() {
          _this3.searchMatches();
        },
        onKeyPress: function onKeyPress(e) {
          debugger;
          if (e.key === 13) _this3.searchMatches();
        }
      }, "Go"))));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=main.3f0c1e5e5b723dfc768f.hot-update.js.map