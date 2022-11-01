const express = require('express')
const router = express.Router();

const { newOrder } = require('../controllers/orderController')


const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const { route } = require('./auth');

router.route('/order')