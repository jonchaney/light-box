const apiKey = require('../../config.js')
const LightBox = require('./lightBox.js')
const parseResults = require('./util.js')

document.addEventListener('DOMContentLoaded', () => {
    
    const results = (data) => {
        lightBox = new LightBox(data);
        lightBox.render();
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

    const images = "";

});
