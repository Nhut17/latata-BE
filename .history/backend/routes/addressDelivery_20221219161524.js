const express = require('express')
const router = express.Router();


const { addAddress } = require('../controllers/addressDeliveryController')

router.route('/address/add').post()





module.exports = router