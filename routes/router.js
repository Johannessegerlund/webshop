const express = require('express')
const router = express.Router()

const authController = require('../controllers/autController')
const Shopcontroller = require('../controllers/Shopcontroller')

router.get('/', authController.home)

router.get('/webshop', Shopcontroller.Shop)

router.post('/webshop', Shopcontroller.createItem)

router.get('/Cart/:id', Shopcontroller.AddtoCart)

router.get('/shopping-cart', Shopcontroller.cart)

// router.get('/shopping-cart/deleteOne')
router.get('/deleteOne/:id', Shopcontroller.deleteOne)
router.get('/addOne/:id', Shopcontroller.addOne)

router.get('/SendItemRequest', Shopcontroller.SendRequest)
router.post('/SendItemRequest', Shopcontroller.SendEmail)
module.exports = router
