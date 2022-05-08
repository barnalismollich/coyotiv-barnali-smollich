const mongoose = require('mongoose')
const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_DATABASE

mongoose.set('debug', true)

mongoose
  .connect(`mongodb+srv://${username}:${password}@cluster0.happj.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(console.log)

const Barnali = mongoose.model('Barnali', { firstname: String })

async function main() {
  const barnalis = await Barnali.find({ firstname: Barnali })
  console.log(barnalis)
}

main()
Barnali.find({ firstname: Barnali }).then(console.log)

const barnali = new Barnali({ firstname: Barnali })

barnali.save().then(() => console.log(`We have a new entry, ${barnali.firstname}!`))
