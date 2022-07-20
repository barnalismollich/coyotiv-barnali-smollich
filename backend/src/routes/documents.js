const express = require('express')

const router = express.Router()

const Document = require('../models/document')

/* POST create a document */
router.post('/', async (req, res) => {
  const documentToCreate = {
    filename: req.body.filename,
  }

  const createdDocument = await Document.create(documentToCreate)
  res.send(createdDocument)
})

// this creates the document with the POST command

module.exports = router
