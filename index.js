const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, 'Homepage')))
  .use(express.static(path.join(__dirname, 'SpaceAdventure_Web')))
  .use(express.static(path.join(__dirname, 'BreakOut')))
  .get('/', (req, res) => res.sendFile('index.html', { root: __dirname + "/Homepage/" } ))
  .get('/SpaceAdventure', (req, res) => res.sendFile('index.html', { root: __dirname + "/SpaceAdventure_Web/" } ))
  .get('/BreakOut', (req, res) => res.sendFile('index.html', { root: __dirname + "/BreakOut/" } ))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
