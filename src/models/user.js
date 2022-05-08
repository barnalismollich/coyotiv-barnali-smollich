const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  birthname: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  documents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Document',
      autopopulate: true,
    },
  ],
})

class User {
  async addDocument(document) {
    this.documents.push(document)
    await this.save() // necessary for mongoose
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
