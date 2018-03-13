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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ({

/***/ 135:
/***/ (function(module, exports) {

// const apiKey = "AIzaSyCNWw3wUkdUehRw9OBt4T3YM5DMg6A_vcE";
const apiKey = "AIzaSyDdYBJQ-esq500_5mHyiFWyXf6U5JolZDY";

module.exports = apiKey;

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

const parseResults = (data) => {
    let images = [];

    data.forEach((item) => {
        images.push(
            {
                title: item.title,
                imageUrl: item.link,
            }
        )
    });
    return images;
};

module.exports = parseResults;

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

const apiKey = __webpack_require__(135)
// const ImageIndex = require('/imageIndex.js')
const Util = __webpack_require__(136)

document.addEventListener('DOMContentLoaded', () => {
    
    async function getImages(apiKey, n) {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=015250315716043265163:wsefhoswelu&searchType=image&imageSize=medium&imgColorType=mono&num=${n}&q=piano`)
        const json = await response.json()
        return json.items
    }

    getImages(apiKey, 10).then((data) => {
        let element = document.getElementById('main')
        data.forEach((item) => {
            let img = document.createElement("IMG")
            img.src = `${item.link}`
            element.appendChild(img)
        })
        console.log(data);
    });

});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map