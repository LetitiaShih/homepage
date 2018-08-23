const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, 'Homepage')))
  .use(express.static(path.join(__dirname, 'SpaceAdventure_Web')))
  .use(express.static(path.join(__dirname, 'BreakOut')))
  .use(express.static(path.join(__dirname, 'DreamAdventure')))
  .use(express.static(path.join(__dirname, 'DegreeShow')))
  .use(express.static(path.join(__dirname, 'Gallery')))
  .use(express.static(path.join(__dirname, 'ArgonAssault')))
  .use(express.static(path.join(__dirname, '2D_RogueLike')))
  .use(express.static(path.join(__dirname, 'SpaceShooter')))
  .use(express.static(path.join(__dirname, 'RealmRush')))
  .get('/', (req, res) => res.sendFile('index.html', { root: __dirname + "/Homepage/" } ))
  .get('/SpaceAdventure', (req, res) => res.sendFile('index.html', { root: __dirname + "/SpaceAdventure_Web/" } ))
  .get('/BreakOut', (req, res) => res.sendFile('index.html', { root: __dirname + "/BreakOut/" } ))
  .get('/DreamAdventure', (req, res) => res.sendFile('index.html', { root: __dirname + "/DreamAdventure/" } ))
  .get('/DegreeShow', (req, res) => res.sendFile('degree_show.html', { root: __dirname + "/DegreeShow/" } ))
  .get('/Tessellation', (req, res) => res.sendFile('tessellation.html', { root: __dirname + "/DegreeShow/" } ))
  .get('/Gallery/InternShow', (req, res) => res.sendFile('intern_show.html', { root: __dirname + "/Gallery/2015 Intern Show/" } ))
  .get('/ArgonAssault', (req, res) => res.sendFile('index.html', { root: __dirname + "/ArgonAssault/" } ))
  .get('/2D_RogueLike', (req, res) => res.sendFile('index.html', { root: __dirname + "/2D_RogueLike/" } ))
  .get('/SpaceShooter', (req, res) => res.sendFile('index.html', { root: __dirname + "/SpaceShooter/" } ))
  .get('/RealmRush', (req, res) => res.sendFile('index.html', { root: __dirname + "/RealmRush/" } ))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
