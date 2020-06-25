const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const SALT = 10
mongoose.set('useCreateIndex', true)

const Userschema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }

})

// tagit av https://stackoverflow.com/questions/14588032/mongoose-password-hashing

Userschema.pre('save', function (next) {
  const user = this

  if (!user.isModified('password')) return next()

  bcrypt.genSalt(SALT, function (err, salt) {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

Userschema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}

const User = mongoose.model('User', Userschema)

module.exports = User
