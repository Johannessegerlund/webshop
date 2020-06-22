const authController = {}

authController.home = async (req, res) => {
  res.render('index', { title: 'Home' })
}

authController.about = async (req, res) => {
  res.render('about', { title: 'Om oss' })
}

authController.contact = async (req, res) => {
  res.render('contact', { title: 'kontakta oss' })
}

module.exports = authController
