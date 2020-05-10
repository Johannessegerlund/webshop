const Shopcontroller = {}
// const mongoose = require('mongoose')
const Product = require('../Items/Product')

Shopcontroller.Shop = async (req, res) => {
  const products = await Product.find({})
  const prod = products.map(prods => ({
    title: prods.title,
    price: prods.price,
    imagePath: prods.imagePath

  }))
  res.render('webshop', { title: 'Webshop', prod })
}

Shopcontroller.createItem = async (req, res) => {
  console.log(req.body)
  const newProduct = new Product({
    imagePath: '/images/' + req.body.imagePath,
    title: req.body.title,
    description: 'fina krukor säljer',
    price: req.body.price
  })
  await newProduct.save()

  res.redirect('/webshop')
}
module.exports = Shopcontroller
