const express = require('express')
const router = express.Router()

const authController = require('../controllers/autController')
const Shopcontroller = require('../controllers/Shopcontroller')

router.get('/', authController.home)

router.get('/webshop', Shopcontroller.Shop)

router.post('/webshop', Shopcontroller.createItem)

module.exports = router
