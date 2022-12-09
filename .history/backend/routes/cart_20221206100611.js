const express = require('express')
const router = express.Router();


const { addToCart, getCart,deleteCart } = require('../controllers/cartController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/cart/add').post(isAuthenticatedUser, authorizeRoles('user'),addToCart)

router.route('/cart/getCartUser').get(isAuthenticatedUser, authorizeRoles('user') ,getCart)

// router.route('/cart/getAllCart').get(isAuthenticatedUser, authorizeRoles('admin') ,getCart)

router.route('/cart/delete').delete(isAuthenticatedUser,deleteCart)


module.exports = router