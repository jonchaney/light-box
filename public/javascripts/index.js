const apiKey = require('../../config.js')
// const ImageIndex = require('/imageIndex.js')
const Util = require('./util.js')

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
