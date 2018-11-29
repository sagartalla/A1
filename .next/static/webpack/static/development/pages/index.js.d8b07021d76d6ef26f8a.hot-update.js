webpackHotUpdate("static/development/pages/index.js",{

/***/ "./util/index.js":
/*!***********************!*\
  !*** ./util/index.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var computeUnion = function computeUnion(a1, a2) {
  var union = [];
  a1.sort();
  union.concat([], a1);
  union = a2.eles.reduce(function (acc, i) {
    var index = binaryIndexOf(a1, i);

    if (index === -1) {
      acc.push(i);
    }

    return acc;
  }, []);
  var lindex = binaryIndexOf(a1, a2.range[0]);
  var hindex = -1;

  if (lindex === -1) {
    hindex = (_readOnlyError("hindex"), binaryIndexOf(a1, a2.range[1]));
  }
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
//# sourceMappingURL=index.js.d8b07021d76d6ef26f8a.hot-update.js.map