const express = require('express')
const router = express.Router();


const { addToCart } = require('../controllers/cartController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/cart/add').post(isAuthenticatedUser, addToCart)

router.route('/cart/:id').get(isAuthenticatedUser, )


module.exports = router