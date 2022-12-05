const express = require('express')
const router = express.Router();


const { addToCart, getCart } = require('../controllers/cartController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/cart/add/:id').post(isAuthenticatedUser, authorizeRoles('user'),addToCart)

router.route('/cart/:id').get(isAuthenticatedUser, authorizeRoles('user') ,getCart)
                         .delete(isAuthenticatedUser,)


module.exports = router