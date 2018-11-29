module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
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

/***/ }),

/***/ "./util/index.js":
/*!***********************!*\
  !*** ./util/index.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var computeUnion = function computeUnion(a1, a2) {
  var union = [];
  var arry = a1;
  arry.sort();
  union.concat([], a1);
  union = a2.eles.reduce(function (acc, i) {
    var index = binaryIndexOf(arry, i);

    if (index === -1) {
      acc.push(i);
    }

    return acc;
  }, []);

  var range = _toConsumableArray(a2.range);

  range.sort();

  if (range[0] < arry[0]) {
    union = [].concat(_toConsumableArray(new Array(arry[0] - range[0])).map(function (ele, i) {
      return i + range[0];
    }), union);
  }

  if (range[0] > arry[0] && binaryIndexOf(arry, range[0]) === -1) {
    union = [].concat(union, range[0]);
  }

  if (arry[arry.length - 1] < range[1]) {
    union = [].concat(union, _toConsumableArray(new Array(range[1] + 1 - arry[arry.length - 1] + 1)).map(function (ele, i) {
      return i + arry[arry.length - 1];
    }));
  }

  if (arry[arry.length - 1] > range[1] && binaryIndexOf(arry, range[1]) === -1) {
    union = [].concat(union, range[1]);
  }

  return union.sort();
};

var binaryIndexOf = function binaryIndexOf(arry, searchElement) {
  var minIndex = 0;
  var maxIndex = arry.length - 1;
  var currentIndex;
  var currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    currentElement = arry[currentIndex];

    if (currentElement < searchElement) {
      minIndex = currentIndex + 1;
    } else if (currentElement > searchElement) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }

  return -1;
};

var indexOfMaxLessThan = function indexOfMaxLessThan(a, ele) {
  var max = Number.MAX_SAFE_INTEGER,
      index = 0;

  for (var i = 0; i < a.length; i++) {
    if (a[i] < ele && a[i] > max) {
      max = a[i];
      index = i;
    }
  }

  return index;
};

var indexOfMinGreaterThan = function indexOfMinGreaterThan(a, ele) {
  var min = Number.MIN_SAFE_INTEGER,
      index = 0;

  for (var i = 0; i < a.length; i++) {
    if (a[i] > ele && a[i] < min) {
      min = a[i];
      index = i;
    }
  }

  return index;
};

var computeIntersecion = function computeIntersecion(a1, a2) {
  var arry = a1;
  arry.sort();
  var intersecion = [];
  intersecion = a2.reduce(function (acc, i) {
    var index = binaryIndexOf(arry, i);

    if (index !== -1) {
      acc.push(i);
    }
  }, []);

  var range = _toConsumableArray(a2.range);

  range.sort();

  if (range[0] < arry[0] && range[1] > arry[arry.length - 1]) {
    return intersecion;
  }

  if (range[0] < arry[0] && range[1] < arry[arry.length - 1]) {
    var index = indexOfMaxLessThan(arry, range[1]);
    return intersecion.slice(0, index + 1);
  }

  if (range[0] > arry[0] && range[1] > arry[arry.length - 1]) {
    var _index = indexOfMinGreaterThan(arry, range[0]);

    return intersecion.slice(_index, arry.length);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  binaryIndexOf: binaryIndexOf,
  computeUnion: computeUnion,
  computeIntersecion: computeIntersecion
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map