"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/dom-helpers";
exports.ids = ["vendor-chunks/dom-helpers"];
exports.modules = {

/***/ "(ssr)/./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addClass)\n/* harmony export */ });\n/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ \"(ssr)/./node_modules/dom-helpers/esm/hasClass.js\");\n\n/**\n * Adds a CSS class to a given element.\n * \n * @param element the element\n * @param className the CSS class name\n */ function addClass(element, className) {\n    if (element.classList) element.classList.add(className);\n    else if (!(0,_hasClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, className)) if (typeof element.className === \"string\") element.className = element.className + \" \" + className;\n    else element.setAttribute(\"class\", (element.className && element.className.baseVal || \"\") + \" \" + className);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2FkZENsYXNzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBQ2xDOzs7OztDQUtDLEdBRWMsU0FBU0MsU0FBU0MsT0FBTyxFQUFFQyxTQUFTO0lBQ2pELElBQUlELFFBQVFFLFNBQVMsRUFBRUYsUUFBUUUsU0FBUyxDQUFDQyxHQUFHLENBQUNGO1NBQWdCLElBQUksQ0FBQ0gscURBQVFBLENBQUNFLFNBQVNDLFlBQVksSUFBSSxPQUFPRCxRQUFRQyxTQUFTLEtBQUssVUFBVUQsUUFBUUMsU0FBUyxHQUFHRCxRQUFRQyxTQUFTLEdBQUcsTUFBTUE7U0FBZUQsUUFBUUksWUFBWSxDQUFDLFNBQVMsQ0FBQ0osUUFBUUMsU0FBUyxJQUFJRCxRQUFRQyxTQUFTLENBQUNJLE9BQU8sSUFBSSxFQUFDLElBQUssTUFBTUo7QUFDdlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWdvZnJvbnQvLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2FkZENsYXNzLmpzP2ZiMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhhc0NsYXNzIGZyb20gJy4vaGFzQ2xhc3MnO1xuLyoqXG4gKiBBZGRzIGEgQ1NTIGNsYXNzIHRvIGEgZ2l2ZW4gZWxlbWVudC5cbiAqIFxuICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIENTUyBjbGFzcyBuYW1lXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7ZWxzZSBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkpIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWU7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJykgKyBcIiBcIiArIGNsYXNzTmFtZSk7XG59Il0sIm5hbWVzIjpbImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiYmFzZVZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/dom-helpers/esm/addClass.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hasClass)\n/* harmony export */ });\n/**\n * Checks if a given element has a CSS class.\n * \n * @param element the element\n * @param className the CSS class name\n */ function hasClass(element, className) {\n    if (element.classList) return !!className && element.classList.contains(className);\n    return (\" \" + (element.className.baseVal || element.className) + \" \").indexOf(\" \" + className + \" \") !== -1;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2hhc0NsYXNzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Q0FLQyxHQUNjLFNBQVNBLFNBQVNDLE9BQU8sRUFBRUMsU0FBUztJQUNqRCxJQUFJRCxRQUFRRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUNELGFBQWFELFFBQVFFLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDRjtJQUN4RSxPQUFPLENBQUMsTUFBT0QsQ0FBQUEsUUFBUUMsU0FBUyxDQUFDRyxPQUFPLElBQUlKLFFBQVFDLFNBQVMsSUFBSSxHQUFFLEVBQUdJLE9BQU8sQ0FBQyxNQUFNSixZQUFZLFNBQVMsQ0FBQztBQUM1RyIsInNvdXJjZXMiOlsid2VicGFjazovL3plZ29mcm9udC8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vaGFzQ2xhc3MuanM/ZjcxNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoZWNrcyBpZiBhIGdpdmVuIGVsZW1lbnQgaGFzIGEgQ1NTIGNsYXNzLlxuICogXG4gKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudFxuICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgQ1NTIGNsYXNzIG5hbWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgcmV0dXJuICEhY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gIHJldHVybiAoXCIgXCIgKyAoZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCBlbGVtZW50LmNsYXNzTmFtZSkgKyBcIiBcIikuaW5kZXhPZihcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiKSAhPT0gLTE7XG59Il0sIm5hbWVzIjpbImhhc0NsYXNzIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYmFzZVZhbCIsImluZGV4T2YiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/dom-helpers/esm/hasClass.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeClass)\n/* harmony export */ });\nfunction replaceClassName(origClass, classToRemove) {\n    return origClass.replace(new RegExp(\"(^|\\\\s)\" + classToRemove + \"(?:\\\\s|$)\", \"g\"), \"$1\").replace(/\\s+/g, \" \").replace(/^\\s*|\\s*$/g, \"\");\n}\n/**\n * Removes a CSS class from a given element.\n * \n * @param element the element\n * @param className the CSS class name\n */ function removeClass(element, className) {\n    if (element.classList) {\n        element.classList.remove(className);\n    } else if (typeof element.className === \"string\") {\n        element.className = replaceClassName(element.className, className);\n    } else {\n        element.setAttribute(\"class\", replaceClassName(element.className && element.className.baseVal || \"\", className));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL3JlbW92ZUNsYXNzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxTQUFTQSxpQkFBaUJDLFNBQVMsRUFBRUMsYUFBYTtJQUNoRCxPQUFPRCxVQUFVRSxPQUFPLENBQUMsSUFBSUMsT0FBTyxZQUFZRixnQkFBZ0IsYUFBYSxNQUFNLE1BQU1DLE9BQU8sQ0FBQyxRQUFRLEtBQUtBLE9BQU8sQ0FBQyxjQUFjO0FBQ3RJO0FBQ0E7Ozs7O0NBS0MsR0FHYyxTQUFTRSxZQUFZQyxPQUFPLEVBQUVDLFNBQVM7SUFDcEQsSUFBSUQsUUFBUUUsU0FBUyxFQUFFO1FBQ3JCRixRQUFRRSxTQUFTLENBQUNDLE1BQU0sQ0FBQ0Y7SUFDM0IsT0FBTyxJQUFJLE9BQU9ELFFBQVFDLFNBQVMsS0FBSyxVQUFVO1FBQ2hERCxRQUFRQyxTQUFTLEdBQUdQLGlCQUFpQk0sUUFBUUMsU0FBUyxFQUFFQTtJQUMxRCxPQUFPO1FBQ0xELFFBQVFJLFlBQVksQ0FBQyxTQUFTVixpQkFBaUJNLFFBQVFDLFNBQVMsSUFBSUQsUUFBUUMsU0FBUyxDQUFDSSxPQUFPLElBQUksSUFBSUo7SUFDdkc7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3plZ29mcm9udC8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vcmVtb3ZlQ2xhc3MuanM/OTRkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByZXBsYWNlQ2xhc3NOYW1lKG9yaWdDbGFzcywgY2xhc3NUb1JlbW92ZSkge1xuICByZXR1cm4gb3JpZ0NsYXNzLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgY2xhc3NUb1JlbW92ZSArIFwiKD86XFxcXHN8JClcIiwgJ2cnKSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cbi8qKlxuICogUmVtb3ZlcyBhIENTUyBjbGFzcyBmcm9tIGEgZ2l2ZW4gZWxlbWVudC5cbiAqIFxuICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIENTUyBjbGFzcyBuYW1lXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSwgY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgJycsIGNsYXNzTmFtZSkpO1xuICB9XG59Il0sIm5hbWVzIjpbInJlcGxhY2VDbGFzc05hbWUiLCJvcmlnQ2xhc3MiLCJjbGFzc1RvUmVtb3ZlIiwicmVwbGFjZSIsIlJlZ0V4cCIsInJlbW92ZUNsYXNzIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNldEF0dHJpYnV0ZSIsImJhc2VWYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/dom-helpers/esm/removeClass.js\n");

/***/ })

};
;