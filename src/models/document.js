const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const documentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

documentSchema.plugin(autopopulate)
module.exports = mongoose.model('Document', documentSchema)
