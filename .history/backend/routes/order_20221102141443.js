const express = require('express')
const router = express.Router();

const { newOrder, getSingleOrder, myOrders } = require('../controllers/orderController')


const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const { route } = require('./auth');

router.route('/order/new').post(isAuthenticatedUser, newOrder);

router.route('/order/:id').post(isAuthenticatedUser, getSingleOrder);
router.route('/order/me').post(isAuthenticatedUser, myOrders);

module.exports = router