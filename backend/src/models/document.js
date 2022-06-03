const mongoose = require('mongoose')

const documentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Document', documentSchema)
