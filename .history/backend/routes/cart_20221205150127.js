const express = require('express')
const router = express.Router();


const { addToCart, getCart } = require('../controllers/cartController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/cart/add/:id').post(isAuthenticatedUser, ,addToCart)

router.route('/cart/:id').get(isAuthenticatedUser, getCart)


module.exports = router