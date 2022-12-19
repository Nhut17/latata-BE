const express = require('express')
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const { addAddress, updateDefault, getAddress } = require('../controllers/addressDeliveryController')

router.route('/address/add').post(isAuthenticatedUser, authorizeRoles('user'),addAddress)

router.route('/address/:id')
                        .get(isAuthenticatedUser, authorizeRoles('user'),getAddress)
                        .put(isAuthenticatedUser, authorizeRoles('user'),getAddress)





module.exports = router