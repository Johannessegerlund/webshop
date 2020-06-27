const product = require('../Items/Product')
const mongoose = require('mongoose')
const Snippet = require('../models/Snippet')
const Cart = require('../models/Cart')
const sendMail = require('../mail')

let expect = require('chai').expect

before('mongodb-connection', function (done) {
  require('dotenv').config()

  mongoose.connect(`${process.env.DB_USER}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  done()
})

describe('#Test1', function () {
  it('Will put a iteam in the cart', async function () {
    const products = 'Rosa blomma'
    var cart = new Cart({})
    product.findOne(products)
    cart.add(products)
    console.log(cart.totalQty)
    expect(cart.totalQty).to.equal(1)
  })
})

describe('#Test2', function () {
  it('Will create a new post in forum', function (done) {
    const newSnippet = new Snippet({
      title: 'Blomma',
      text: 'Blommor är bra'
    })
    newSnippet.save(done)
  })
})

describe('#email', function () {
  it('Will send a email with info', function () {
    const { email, adress } = {
      email: 'johannessegerlund93@gmail.com',
      title: 'order',
      adress: 'Namn: Johannes Segerlund\n' +
        'Adress: Sjöbrings väg 4 4444\n' +
        'telefonnummer: 0725407008\n' +
        'Pris: Your Total: 40 kr'
    }
    const title = 'order'
    sendMail(email, title, adress, function (error, info) {
      if (error) {
        console.log(error + 'error!!!!')
      } else {
        console.log(info)
      }
    })
  })
})
