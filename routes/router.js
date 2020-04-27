const express = require('express')
const router = express.Router()

const authController = require('../controllers/autController')

router.get('/', authController.home)

module.exports = router
