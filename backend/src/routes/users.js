const express = require('express')

const router = express.Router()

const User = require('../models/user')
const Document = require('../models/document')

// explanation: router please post (=create) into my users the following things...and give me a response from the body

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.firstName) {
    query.firstName = req.query.firstName
  }

  res.send(await User.find(query))
})

/* POST create a user */
router.post('/', async (req, res) => {
  const userToCreate = {
    firstName: req.body.firstName,
    birthName: req.body.birthName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  }

  if (!email || !firstName || !birthName || !lastName || !password) {
    res
      .send({
        message: 'Missing fields.',
      })
      .status(400)
    return
  }
  const createdUser = await User.create(userToCreate)
  res.send(createdUser)
})

router.get('/initialize', async (req, res) => {
  await User.deleteMany({})
  await Document.deleteMany({})

  const barnali = await User.create({
    firstName: 'Barnali',
    birthName: 'Gupta',
    lastName: 'Smollich',
    email: 'barnaliingermany@gmail.com',
    password: 'coyotiv1',
  })

  const tim = await User.create({
    firstName: 'Tim',
    birthName: 'Smollich',
    lastName: 'Smollich',
    email: 'tim@smollich.de',
    password: 'coyotiv2',
  })

  const Patientenverfuegung = await Document.create({
    name: 'Patientenverfuegung.pdf',
  })
  const Betreuungsvollmacht = await Document.create({
    name: 'Betreuungsvollmacht.pdf',
  })

  await barnali.addDocument(Patientenverfuegung)
  await barnali.addDocument(Betreuungsvollmacht)
  await tim.addDocument(Patientenverfuegung)
  await tim.addDocument(Betreuungsvollmacht)

  console.log(barnali)
  console.log(tim)
  res.sendStatus(200)
})

router.post('/:userId/adds', async (req, res) => {
  const user = await User.findById(req.params.userId)
  const document = await Document.findById(req.body.documentId)

  await user.addDocument(document)
  res.sendStatus(200)
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.send('user')
  else res.sendStatus(404)
})

router.get('/:userId/json', async (req, res) => {
  const user = await User.findById(req.params.userId)
  res.send(user)
})

module.exports = router
