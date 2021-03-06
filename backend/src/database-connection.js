const mongoose = require('mongoose')

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_DATABASE
let connectionString = process.env.MONGODB_CONNECTION_STRING

if (!connectionString) {
  //connectionString = `mongodb+srv://${username}:${password}@cluster0.happj.mongodb.net/${dbName}?retryWrites=true&w=majority` The happj database is from the lecture. So replace it with your own database name.

  connectionString = `mongodb+srv://${username}:${password}@cluster0.jxakjpl.mongodb.net/${dbName}?retryWrites=true&w=majority`
}

// console.log(connectionString)

mongoose.set('debug', true)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(console.log)

module.exports = mongoose.connection
