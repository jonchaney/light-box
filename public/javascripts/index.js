const apiKey = require('../../config.js')
const ImageIndex = require('./imageIndex.js')
const parseResults = require('./util.js')

document.addEventListener('DOMContentLoaded', () => {
    
    const results = (data) => {

        // create image index and render to DOM
        let imageIndex = new ImageIndex(data);
        imageIndex.render();
        // imageIndex.createLightBox();
        // create lightBox and append to DOM
        // let lightBox = new LightBox(imageIndex.images);
        // lightBox.create()
    };

    // fetch images from Google Search API
    async function getImages(apiKey, n) {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=015250315716043265163:wsefhoswelu&searchType=image&imageSize=small&imgColorType=color&num=${n}&q=vintage+synthesizer`)
        const json = await response.json()
        return json.items;
    }

    // call back render the results
    getImages(apiKey, 10).then((data) => {
        results(data);
    });

});
