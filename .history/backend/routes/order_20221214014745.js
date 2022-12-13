const express = require('express')
const router = express.Router();

const { newOrder, getSingleOrder, myOrders , allOrders, updateOrder, deleteOrder, cancelOrder} = require('../controllers/orderController')


const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const { route } = require('./auth');

router.route('/order/new').post(isAuthenticatedUser, newOrder);

router.route('/order/:id').get(isAuthenticatedUser, getSingleOrder);
router.route('/orders/me').get(isAuthenticatedUser,authorizeRoles('user') ,myOrders);

router.route('/admin/orders').get(isAuthenticatedUser, authorizeRoles('admin'), allOrders);

router.route('/admin/order/:id')
        .put(isAuthenticatedUser, updateOrder)
        .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteOrder);

router.route('/admin/order/cancel/:id').put(isAuthenticatedUser, cancelOrder);

module.exports = router