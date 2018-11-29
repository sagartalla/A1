webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./util/index.js");
var _jsxFileName = "/Users/sagar/Desktop/sagar/repo/bms/a1/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      arrayUserInput: '',
      inputVal: '',
      inputJS: []
    };
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onArrayChange = _this.onArrayChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.storeArray = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(_this.storeArray.bind(_assertThisInitialized(_assertThisInitialized(_this))), 300);
    _this.compute = _this.compute.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(App, [{
    key: "onArrayChange",
    value: function onArrayChange(e) {
      var arrayUserInput = e.target.value;

      if (/^$|[\d,]$/.test(arrayUserInput)) {
        this.setState({
          arrayUserInput: arrayUserInput
        });
        this.storeArray(arrayUserInput);
      }
    }
  }, {
    key: "storeArray",
    value: function storeArray(arrayUserInput) {
      var arrayJS = arrayUserInput.split(',').filter(function (i) {
        return i !== "";
      }).map(function (i) {
        return parseInt(i);
      });
      this.setState({
        arrayUserInput: arrayJS.join(','),
        arrayJS: arrayJS
      });
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(e) {
      var inputVal = e.target.value;

      if (/^$|[\d,-]$/.test(inputVal)) {
        var inputJS = inputVal.split(',').reduce(function (acc, i) {
          if (i !== '') {
            if (i.indexOf('-') !== -1) {
              acc.range.push(i.split('-').map(function (i) {
                return parseInt(i);
              }));
            } else {
              acc.eles.push(parseInt(i));
            }
          }

          return acc;
        }, {
          range: [],
          eles: []
        });
        this.setState({
          inputVal: inputVal,
          inputJS: inputJS
        });
      }
    }
  }, {
    key: "compute",
    value: function compute() {
      var _this$state = this.state,
          arrayJS = _this$state.arrayJS,
          inputJS = _this$state.inputJS;
      var union = _util__WEBPACK_IMPORTED_MODULE_2__["default"].computeUnion(arrayJS, inputJS);
      var intersecion = utils.computeIntersecion(arrayJS, inputJS);
      console.log(union, intersecion);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          arrayError = _this$state2.arrayError,
          arrayErrorMsg = _this$state2.arrayErrorMsg,
          inputVal = _this$state2.inputVal,
          arrayUserInput = _this$state2.arrayUserInput;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.onArrayChange,
        value: arrayUserInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), arrayError ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, arrayErrorMsg) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.onInputChange,
        value: inputVal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.compute,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "compute"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.e00d9ee8fcfc3a32a48f.hot-update.js.map