/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/checkbox.css":
/*!******************************!*\
  !*** ./src/css/checkbox.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/slider.css":
/*!****************************!*\
  !*** ./src/css/slider.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
__webpack_require__(/*! ./css/slider.css */ "./src/css/slider.css");
__webpack_require__(/*! ./css/checkbox.css */ "./src/css/checkbox.css");
var inpOption = document.querySelector("#inpOption");
var btnAdd = document.querySelector("#btnAdd");
var btnStart = document.querySelector("#btnStart");
var divSliders = document.querySelector("#divSliders");
var inpRange = document.querySelector("#inpRange");
var divNames = document.querySelector("#div-names");
var divValues = document.querySelector("#div-values");
var in1 = document.querySelector("#in1");
var in2 = document.querySelector("#in2");
var in3 = document.querySelector("#in3");
var inpSort = document.querySelector("#inpSort");
var options = [];
var arr = [];
var max = 100; // default
inpRange.value = max.toString();
divValues.classList.add("hide");
divSliders.classList.add("hide");
inpRange.onchange = function () {
    max = parseInt(inpRange.value);
};
btnAdd.addEventListener("click", function () { return addOption(); });
inpOption.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addOption();
    }
});
inpSort.addEventListener("change", function () {
    sortDisplay(inpSort.checked);
});
function addOption() {
    var optionName = inpOption.value;
    inpOption.value = "";
    var name = document.createElement("div");
    name.classList.add("value-container");
    name.id = "O".concat(options.length);
    name.innerText = optionName;
    divNames.appendChild(name);
    var value = document.createElement("div");
    value.classList.add("value-container");
    value.id = "W".concat(options.length);
    value.innerHTML = "\n    <label class=\"value-label\" id=\"V".concat(options.length, "\">0</label>\n    <meter class=\"value-meter\" id=\"M").concat(options.length, "\" min=0 ></meter>\n  ");
    divValues.appendChild(value);
    options.push({ id: options.length, name: optionName, value: 0 });
}
function initArray(size, value) {
    var array = [];
    for (var y = 0; y < size; y++) {
        var line = [];
        for (var x = 0; x < size; x++) {
            line.push((x === y) ? 0 : value);
        }
        array.push(line);
        updateDisplay(y, sumLine(line), size, max);
    }
    return array;
}
btnStart.addEventListener("click", function () {
    in1.classList.add("hide");
    in2.classList.add("hide");
    divValues.classList.remove("hide");
    divSliders.classList.remove("hide");
    in3.classList.remove("hide");
    arr = initArray(options.length, max / 2);
    var _loop_1 = function (y) {
        options[y].value = max * (options.length - 1) / 2;
        var _loop_2 = function (x) {
            if (x > y) {
                //console.log(`O${y} <-> O${x}`);
                var div = document.createElement("div");
                div.classList.add("slidecontainer");
                div.innerHTML =
                    "<div style=\"float: left;\">".concat(options[y].name, "</div><div style=\"float: right;\">").concat(options[x].name, "</div>\n         <input type=\"range\" min=\"0\" max=\"").concat(max, "\" value=").concat(max / 2, " class=\"slider\" id=\"Y").concat(y, "X").concat(x, "\">");
                divSliders.appendChild(div);
                var slider_1 = document.querySelector("#Y".concat(y, "X").concat(x));
                slider_1.oninput = function () {
                    arr[y][x] = max - parseInt(slider_1.value);
                    arr[x][y] = parseInt(slider_1.value);
                    options[y].value = sumLine(arr[y]);
                    options[x].value = sumLine(arr[x]);
                    updateDisplay(y, options[y].value, options.length, max);
                    updateDisplay(x, options[x].value, options.length, max);
                    sortDisplay(inpSort.checked);
                    //console.log(arr);
                };
            }
        };
        for (var x = 0; x < options.length; x++) {
            _loop_2(x);
        }
    };
    for (var y = 0; y < options.length; y++) {
        _loop_1(y);
    }
});
function sumLine(line) {
    var sum = 0;
    for (var i = 0; i < line.length; i++) {
        sum += line[i];
    }
    return sum;
}
function updateDisplay(option, sum, size, max) {
    var displayValue = sum / (size * max / 2 * (size - 1));
    var meterVal = sum;
    var meterMax = max * (size - 1);
    var label = document.querySelector("#V".concat(option));
    label.innerHTML = formatAsPercentage(displayValue);
    var meter = document.querySelector("#M".concat(option));
    meter.max = meterMax;
    meter.value = meterVal;
}
function formatAsPercentage(num) {
    return new Intl.NumberFormat('default', {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(num);
}
function sortDisplay(sort) {
    var sorted = sort ? __spreadArray([], options, true).sort(function (a, b) { return b.value - a.value; }) : options;
    sorted.forEach(function (item) {
        divNames.appendChild(document.querySelector("#O".concat(item.id)));
        divValues.appendChild(document.querySelector("#W".concat(item.id)));
    });
}
var Option = /** @class */ (function () {
    function Option() {
    }
    return Option;
}());


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.f698d723fe3697b109fc.js.map