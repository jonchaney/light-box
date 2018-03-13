const express = require('express')
const router = express()
const path = require('path')
const fetch = require('node-fetch')
const PORT = 8000
const bodyParser = require('body-parser')

const apiKey = require('./config.js')

router.use(express.static('public'))
router.use(bodyParser.urlencoded({ extended: false }))


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});
router.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})


module.exports = router;