const proController = {}

proController.pots = async (req, res) => {
  res.render('pots', { title: 'krukor' })
}

proController.fish = async (req, res) => {
  res.render('fish', { title: 'fiskar' })
}

proController.plants = async (req, res) => {
  res.render('plants', { title: 'växter' })
}

proController.gardeningtools = async (req, res) => {
  res.render('gardeningtools', { title: 'Trädgårds tillbehör' })
}

module.exports = proController
