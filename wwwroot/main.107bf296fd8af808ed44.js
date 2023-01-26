/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
var divOptions = document.querySelector("#divOptions");
var tbOption = document.querySelector("#tbOption");
var btnAdd = document.querySelector("#btnAdd");
var btnStart = document.querySelector("#btnStart");
var optionsCount = 0;
var arr = [];
btnAdd.addEventListener("click", function () {
    var div = document.createElement("div");
    div.id = "O".concat(optionsCount++);
    div.innerText = tbOption.value;
    divOptions.appendChild(div);
});
btnStart.addEventListener("click", function () {
    for (var y = 0; y < optionsCount; y++) {
        var line = [];
        for (var x = 0; x < optionsCount; x++) {
            line.push(0);
        }
        arr.push(line);
    }
    for (var y = 0; y < optionsCount; y++) {
        for (var x = 0; x < optionsCount; x++) {
            if (x > y) {
                console.log("O".concat(y, " <-> O").concat(x));
            }
        }
    }
    console.log(arr);
});
btnStart;

})();

/******/ })()
;
//# sourceMappingURL=main.107bf296fd8af808ed44.js.map