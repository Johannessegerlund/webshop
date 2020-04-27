const authController = {}

authController.home = async (req, res) => {
  res.render('index', { title: 'Home' })
}

module.exports = authController
