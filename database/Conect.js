const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`${process.env.DB_USER}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

const db = mongoose.connection
db.on('connected', () => { console.log('open') })
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('You are conected to the database')
})
module.exports = db
