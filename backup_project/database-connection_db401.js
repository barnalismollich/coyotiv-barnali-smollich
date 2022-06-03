const mongoose = require('mongoose')

// needed for Mongo Aggregation exercise
MONGO_CONNECTION_STRING =
  'mongodb+srv://root:n6UNyO2uds1bqBN6@cluster0.jxakjpl.mongodb.net/sample_mflix?retryWrites=true&w=majority'

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,

  useUnifiedTopology: true,
})

mongoose.connection.once('open', function () {
  console.log('connected to the db.')
})
