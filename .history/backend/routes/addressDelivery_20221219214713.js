const express = require('express')
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const { addAddress, getDefaultAddress, getAddress } = require('../controllers/addressDeliveryController')

router.route('/address/add').post(isAuthenticatedUser, authorizeRoles('user'),addAddress)

router.route('/address/default/:id').get(isAuthenticatedUser, authorizeRoles('user'),getAddress)





module.exports = router