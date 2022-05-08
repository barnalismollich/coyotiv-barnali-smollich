const express = require('express')

const router = express.Router()

const User = require('../models/user')
const Document = require('../models/document')

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.firstname) {
    query.firstname = req.query.firstname
  }

  res.send(await User.find(query))
})

router.get('/initialize', async (req, res) => {
  await User.deleteMany({})
  await Document.deleteMany({})

  const barnali = await User.create({ name: 'barnali' })
  // const armagan = await User.create({ name: 'armagan' })

  // const steve = await User.create({ name: 'steve' })

  const Patientenverfuegung = await Document.create({ filename: 'Patientenverfuegung.pdf' })
  const Betreuungsvollmacht = await Document.create({ filename: 'Betreuungsvollmacht.pdf' })

  await barnali.addDocument(Patientenverfuegung)
  await barnali.addDocument(Betreuungsvollmacht)

  console.log(barnali)

  res.sendStatus(200)
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

module.exports = router
