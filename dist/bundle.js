/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\ndragElement(document.getElementById(\"popup-window\"));\nfunction dragElement(elmnt){\n    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;\n    if (document.getElementById(elmnt.id)) {\n      // if present, the header is where you move the DIV from:\n      document.getElementById(elmnt.id).onmousedown = dragMouseDown;\n    } else {\n      // otherwise, move the DIV from anywhere inside the DIV:\n      elmnt.onmousedown = dragMouseDown;\n    }\n    function dragMouseDown(e) {\n        e = e || window.event;\n        e.preventDefault();\n        // get the mouse cursor position at startup:\n        pos3 = e.clientX;\n        pos4 = e.clientY;\n        document.onmouseup = closeDragElement;\n        // call a function whenever the cursor moves:\n        document.onmousemove = elementDrag;\n      }\n    \n      function elementDrag(e) {\n        e = e || window.event;\n        e.preventDefault();\n        // calculate the new cursor position:\n        pos1 = pos3 - e.clientX;\n        pos2 = pos4 - e.clientY;\n        pos3 = e.clientX;\n        pos4 = e.clientY;\n        // set the element's new position:\n        elmnt.style.top = (elmnt.offsetTop - pos2) + \"px\";\n        elmnt.style.left = (elmnt.offsetLeft - pos1) + \"px\";\n      }\n    \n      function closeDragElement() {\n        // stop moving when mouse button is released:\n        document.onmouseup = null;;\n        document.onmousemove = null;\n      }\n}\n\n\ndocument.cookie = \"name=oeschger\";\ndocument.cookie = \"favorite_food=tripe\";\n\nasync function init(){\n  await ss();\n  document.getElementById(\"clickInfo\").onClick = function() {\n    console.log('____',document.cookie);\n  }\n}\n\nfunction ss(){\n  return document.getElementById(\"popup-window\").innerHTML+='<button id=\"clickInfo\">Show cookies!!!!</button>'\n}\n\n// document.getElementById(\"clickInfo\").onClick = function() {\n//   console.log('____',document.cookie);\n// }\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });