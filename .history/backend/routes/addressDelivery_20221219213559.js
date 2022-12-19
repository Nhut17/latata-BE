const express = require('express')
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const { addAddress, getDefaultAddress } = require('../controllers/addressDeliveryController')

router.route('/address/add').post(isAuthenticatedUser, authorizeRoles('user'),addAddress)

router.route('/address/default').get(isAuthenticatedUser, authorizeRoles('user'),getDefaultAddress)





module.exports = router