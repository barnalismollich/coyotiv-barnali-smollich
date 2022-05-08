const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const documentSchema = new mongoose.Schema({
  filename: String,
})

documentSchema.plugin(autopopulate)
module.exports = mongoose.model('Document', documentSchema)
