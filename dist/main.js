/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContact\": () => (/* binding */ createContact)\n/* harmony export */ });\nfunction createContact() {\n    const div = document.getElementById('content');\n\n    while(div.firstChild) {\n        div.removeChild(div.firstChild);\n    }\n\n    const newPage = document.createElement('div');\n\n    const header = document.createElement('H1');\n    const text = document.createTextNode('Contact');\n    header.appendChild(text);\n\n    var paragraph = document.createElement('p');\n    const description = document.createTextNode('38917 Betty Crocker Lane; Custard, WI 81238');\n    paragraph.appendChild(description);\n\n    newPage.appendChild(header);\n    newPage.appendChild(paragraph);\n\n    div.appendChild(newPage);\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\n    const div = document.getElementById('content');\n\n    while(div.firstChild) {\n        div.removeChild(div.firstChild);\n    }\n\n    const newPage = document.createElement('div');\n\n    // create img, text, then paragraph\n    const img = new Image(500, 300);\n    img.src = 'https://www.biggerbolderbaking.com/wp-content/uploads/2021/08/Summer-Fruit-Tart-Thumbnail-scaled.jpg';\n    \n    const header = document.createElement('H1');\n    const text = document.createTextNode('Welcome to Annabelle\\'s Bakery');\n    header.appendChild(text);\n\n    var paragraph = document.createElement('p');\n    const description = document.createTextNode('We create the best tarts in town!');\n    paragraph.appendChild(description);\n\n    newPage.appendChild(img);\n    newPage.appendChild(header);\n    newPage.appendChild(paragraph);\n\n    div.appendChild(newPage);\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst tabs = document.querySelector('.tabs');\nconst tabButtons = tabs.querySelectorAll('[role=\"tab\"]');\n\nfunction handleTabClick(event) {\n    // hide all tab panels\n    // (don't need to do it)\n\n    // mark all tabs as unselected\n    tabButtons.forEach(tab => {\n        // tab.ariaSelected = false;\n        tab.setAttribute('aria-selected', false);\n    });\n    // mark the clicked tab as selected\n    event.currentTarget.setAttribute('aria-selected', true);\n    // find the associated tabPanel and show it!\n    const { id } = event.currentTarget;\n    if(id === 'home') {\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHome)();\n    }\n    else if(id === 'menu') {\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)();\n    }\n    else {\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.createContact)();\n    }\n}\n\ntabButtons.forEach(button => button.addEventListener('click', handleTabClick));\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHome)();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\n    const div = document.getElementById('content');\n\n    while(div.firstChild) {\n        div.removeChild(div.firstChild);\n    }\n    \n    const newPage = document.createElement('div');\n\n    const header = document.createElement('H1');\n    const text = document.createTextNode('Menu');\n    header.appendChild(text);\n\n    var paragraph = document.createElement('p');\n    const description = document.createTextNode('tarts, muffins, cakes, cookies, pies, brownies');\n    paragraph.appendChild(description);\n\n    newPage.appendChild(header);\n    newPage.appendChild(paragraph);\n\n    div.appendChild(newPage);\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;