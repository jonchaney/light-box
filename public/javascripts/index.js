const apiKey = require('../../config.js')
const ImageIndex = require('/imageIndex.js')

document.addEventListener('DOMContentLoaded', () => {
const results;
const images;
  fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=015250315716043265163:wsefhoswelu&searchType=image&imageSize=medium&imgColorType=mono&num=${10}&q=piano`)
  .then((response) => {
    return response.json();
  })
  .then((results) => {
    // console.log(myJson.items);
    
    results = new parseResults(json.items);
    images = new ImageIndex(results);
    images.display();

    console.log(json.items);
  });

});
