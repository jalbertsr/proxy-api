const request = require('request')
const cors = require('cors')
const express = require('express')

require('dotenv').load()

const app = express()

const { PORT, URL_BASE, TOKEN } = process.env

const options = {
  headers: {
    'User-Agent': 'request'
  }
}

if (TOKEN) {
  options.headers.Authorization = `Bearer ${TOKEN}`
}

const cache = {}
let counter = 0

app.use(cors())

app.get('*', function (req, res) {
  const urlRequested = req.originalUrl
  console.log('-'.repeat(20))
  console.log(`→ Attempt ${++counter}`)
  console.log('path requested = ' + urlRequested)
  if (urlRequested.includes('favicon.ico')) {
    res.status(500).send("Couldn't get a JSON!")
  }

  options.url = URL_BASE + urlRequested

  console.log(options.url)

  if (cache[options.url]) {
    console.log('💾 from cache...')
    res.json(cache[options.url])
  } else {
    console.log('🔥 requesting: ' + options.url)
    request(options, function (error, response, body) {
      if (error) res.status(500).send('Something went wrong!')
      const json = JSON.parse(body)
      cache[options.url] = json
      res.json(json)
    })
  }
})

app.listen(PORT, () => console.log(`listening on port ${PORT}...`))
