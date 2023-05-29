const express = require('express');
const router = express.Router()

const { topSalesUser } = require('../controllers/topSalesUserController')

router.route('/top-sales-user').post(topSalesUser)

module.exports = router