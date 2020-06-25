const User = require('../models/User')

const authController = {}

authController.home = async (req, res) => {
  const user = req.session.finduser
  // res.render('index', { title: 'Home', loggedInUser })
  res.render('index', { title: 'Home', user })
}

authController.loginpost = async (req, res) => {
  const finduser = await User.findOne({ username: req.body.username })
  if (!finduser) {
    req.session.flash = {
      message: 'Permission denied!'
    }
    res.redirect('/login')
  }
  const isMatch = await finduser.comparePassword(req.body.psw)

  if (finduser && isMatch) {
    req.session.finduser = finduser
    req.session.flash = {
      message: 'You are signed in!'
    }
    res.redirect('/forum')
  }
}

authController.about = async (req, res) => {
  const user = req.session.finduser
  res.render('about', { title: 'Om oss', user })
}

authController.contact = async (req, res) => {
  const user = req.session.finduser
  res.render('contact', { title: 'kontakta oss', user })
}

authController.loginget = async (req, res) => {
  const user = req.session.finduser
  res.render('login', { title: 'admin', user })
}

authController.logout = (req, res) => {
  req.session.destroy(error => {
    if (error) {

    } else {
      res.clearCookie('connect.sid')
      res.redirect('/')
    }
  })
}

module.exports = authController
