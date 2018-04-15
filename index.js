const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, 'Homepage')))
  .use(express.static(path.join(__dirname, 'SpaceAdvanture_Web')))
  // TODO: use the below homepage instead.
  // .set('views', path.join(__dirname, 'views'))
  // .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
  .get('/', (req, res) => res.sendFile('index.html', { root: __dirname + "/Homepage/" } ))
  .get('/SpaceAdvanture', (req, res) => res.sendFile('index.html', { root: __dirname + "/SpaceAdvanture_Web/" } ))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
