const express = require('express')
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const { addAddress, updateDefault, getAddress, getOneAddress } = require('../controllers/addressDeliveryController')

router.route('/address/add').post(isAuthenticatedUser, authorizeRoles('user'),addAddress)

router.route('/address/:id')
                        .get(isAuthenticatedUser, authorizeRoles('user'),getOneAddress)
                        .put(isAuthenticatedUser, authorizeRoles('user'),updateDefault)



router.route('/address/').get(getAddress)

module.exports = router