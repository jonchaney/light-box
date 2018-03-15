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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const apiKey = __webpack_require__(1)
const ImageIndex = __webpack_require__(2)

document.addEventListener('DOMContentLoaded', () => {
    
    const results = (data) => {
        // create image index and render to DOM
        let imageIndex = new ImageIndex(data);
        imageIndex.render();
    };

    // fetch images from Google Search API
    async function getImages(apiKey, n) {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=015250315716043265163:wsefhoswelu&searchType=image&imageSize=small&imgColorType=color&num=${n}&q=vintage+synthesizer`)
        const json = await response.json()
        return json.items;
    }

    // call back to render the results
    getImages(apiKey, 10).then((data) => {
        results(data);
    });

});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const apiKey = "AIzaSyCNWw3wUkdUehRw9OBt4T3YM5DMg6A_vcE";
// const apiKey = "AIzaSyDdYBJQ-esq500_5mHyiFWyXf6U5JolZDY";
// const apiKey = "AIzaSyA9CoKVmLUUmk9Jl3YcOPNWXXZMYWkXeHY";

module.exports = apiKey;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const LightBox = __webpack_require__(3)

class ImageIndex {
    constructor(images) {
        this.images = images;
        this.lightBox = new LightBox(this.images);
    }
    
    // create the index and render it on DOM
    render() {
        // get main element
        let element = document.getElementById('main')
        let parent = document.createElement('div')
        parent.setAttribute('id', 'image-index');
        // create image elements
        this.images.forEach((item, idx) => {
            let img = document.createElement('img')
            let section = document.createElement('section')
            img.src = `${item.link}`
            img.dataset.indexNumber = idx;
            section.appendChild(img)
            parent.appendChild(section)
        })
        // render to DOM
        element.appendChild(parent)
        parent.addEventListener('click', (event) => this.renderLightBox(event))
    }
    
    // render the light box
    renderLightBox(event) {
        this.lightBox.render(event.target.dataset.indexNumber);
    }
}

module.exports = ImageIndex;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

class LightBox {
    constructor(images) {
        this.images = images
        this.currentImageIndex
    }

    render(index) {
        this.currentImageIndex = index;
        let element = document.getElementById('main') // get main element

        let lightBox = document.createElement('div')  
        lightBox.setAttribute('id', 'lightbox')     // create lightbox
        
        let img = document.createElement('img')
        img.src = this.images[index % this.images.length].link   // create img

        let section = document.createElement('section') // create img container
        section.appendChild(img)
        
        let leftIconElement = this.createIconElement('left')
        let rightIconElement = this.createIconElement('right') // create elements for icon

        leftIconElement.addEventListener('click', (e) => this.leftClick(e))
        rightIconElement.addEventListener('click', (e) => this.rightClick(e)) // add right and left click listeners

        lightBox.appendChild(leftIconElement)
        lightBox.appendChild(section)
        lightBox.appendChild(rightIconElement) // append to outer light box element

        lightBox.addEventListener('click', (e) => this.removeChild(e))
        element.appendChild(lightBox); // render to DOM
    }

    createIconElement(str){
        let iconElement = document.createElement('p')
        iconElement.innerHTML = `<i class="fas fa-angle-${str}"></i>`
        return iconElement
    }

    leftClick(event) {
        this.removeChild(event);
        this.render(parseInt(this.currentImageIndex) + this.images.length - 1)
    }

    rightClick(event) {
        this.removeChild(event);
        this.render(parseInt(this.currentImageIndex) + 1)
    }
    
    removeChild(e) {
        let element = document.getElementById('lightbox')
        element.parentElement.removeChild(element)

        // stop event from bubbling when arrows are clicked
        if (!e) { let e = window.event }
        e.cancelBubble = true
        if (e.stopPropagation) { e.stopPropagation() }
    }

}

module.exports = LightBox;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map