const mongoose = require('mongoose')

const documentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})
// model for document required so that documents can be put into the database.

module.exports = mongoose.model('Document', documentSchema)
