webpackHotUpdate("static/development/pages/index.js",{

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

  if (range[0] < arry[0] && range[1] > arry[arry.length - 1]) {
    union = [].concat(_toConsumableArray(new Array(arry[0] - range[0])).map(function (ele, i) {
      return i + range[0];
    }), union);
  }

  if (range[0] < arry[0] && range[1] < arry[arry.length - 1]) {}
};

var binaryIndexOf = function binaryIndexOf(arry, searchElement) {
  'use strict';

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

/* harmony default export */ __webpack_exports__["default"] = ({
  binaryIndexOf: binaryIndexOf,
  compute: compute
});

/***/ })

})
//# sourceMappingURL=index.js.505106dcdf6a3d9ec5d0.hot-update.js.map