const mongoose = require('mongoose')
const Schema = mongoose.Schema

const snippetSchema = new Schema({
  username: { type: String },
  text: { type: String },
  title: { type: String }
})

const Snippet = mongoose.model('Snippet', snippetSchema)
module.exports = Snippet
