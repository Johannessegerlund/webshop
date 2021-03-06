const Shopcontroller = {}
const sendMail = require('../mail')
const Product = require('../Items/Product')
const Cart = require('../models/Cart')

Shopcontroller.Shop = async (req, res) => {
  console.log(req.session.finduser)
  const user = req.session.finduser
  const products = await Product.find({})
  const prod = products.map(prods => ({
    id: prods.id,
    title: prods.title,
    price: prods.price,
    imagePath: prods.imagePath

  }))
  res.render('webshop', { title: 'Webshop', prod, user })
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

Shopcontroller.AddtoCart = async (req, res) => {
  const product = req.params.id
  var cart = new Cart(req.session.cart ? req.session.cart : {})
  Product.findById(product, function (err, product) {
    if (err) {
      return res.redirect('/webshop')
    }
    console.log(cart)
    cart.add(product, product.id)
    req.session.cart = cart
    console.log(req.session.cart)
    res.redirect('/webshop')
  })
}

Shopcontroller.cart = async (req, res) => {
  if (!req.session.cart) {
    return res.render('shopping-cart', { products: null })
  }
  let cart = new Cart(req.session.cart)
  res.render('shopping-cart', { products: cart.generateArray(), totalPrice: cart.totalPrice })
}

Shopcontroller.deleteOne = (req, res) => {
  const product = req.params.id
  var cart = new Cart(req.session.cart ? req.session.cart : {})
  cart.deleteOne(product)
  req.session.cart = cart
  console.log(req.session.cart)
  res.redirect('/shopping-cart')
}
Shopcontroller.addOne = (req, res) => {
  const product = req.params.id
  var cart = new Cart(req.session.cart ? req.session.cart : {})
  cart.addOne(product)
  req.session.cart = cart
  console.log(req.session.cart)
  res.redirect('/shopping-cart')
}

Shopcontroller.SendRequest = (req, res) => {
  if (!req.session.cart) {
    return res.redirect('shopping-cart')
  }
  var cart = new Cart(req.session.cart)
  res.render('SendItemRequest', { Price: cart.totalPrice })
}

Shopcontroller.SendEmail = (req, res) => {
  const { email, adress } = req.body
  const title = 'order'
  console.log('Data: ', req.body)
  sendMail(email, title, adress, function (error, info) {
    if (error) {
      console.log(error + 'error!!!!')
      res.status(500).json({ message: 'internal error' })
    } else {
      console.log(info)
      res.json({ message: 'message sent' })
    }
  })
  console.log(req.session.cart)
  req.session.destroy()
}

Shopcontroller.ordersent = (req, res) => {
  res.render('orderSent')
}

module.exports = Shopcontroller
