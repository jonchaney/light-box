const apiKey = require('../../config.js')
const ImageIndex = require('./imageIndex.js')

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
