const express = require('express')
const router = express.Router();


const { addToCart, getCart,deleteItemCart, decreaseQuantity, increaseQuantity } = require('../controllers/cartController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/cart/add').post(isAuthenticatedUser,authorizeRoles('user'),addToCart)

router.route('/cart/getCartUser').get(isAuthenticatedUser, authorizeRoles('user') ,getCart)

// router.route('/cart/getAllCart').get(isAuthenticatedUser, authorizeRoles('admin') ,getCart)

router.route('/cart/:id').delete(isAuthenticatedUser,authorizeRoles('user'),deleteCart)

router.route('/cart/decrease/:id').put(isAuthenticatedUser,authorizeRoles('user'),decreaseQuantity)
router.route('/cart/increase/:id').put(isAuthenticatedUser,authorizeRoles('user'),increaseQuantity)


module.exports = router