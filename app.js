const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')
const PORT = 8000

const apiKey = require('./config.js')

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});

app.get('/images', (req, res) => {
  fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=015250315716043265163:wsefhoswelu&searchType=image&imageSize=medium&imgColorType=mono&num=10&q=piano`)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson.items);
  });

});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
