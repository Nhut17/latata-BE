const express = require('express');
const router = express.Router()

const { createEventBanner, uploadEventBanner, getOneEventBanner, getAllBanner } = require('../controllers/eventBannerController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/event-banner/create').post(createEventBanner)
router.route('/event-banner').post(isAuthenticatedUser, authorizeRoles('admin'),uploadEventBanner)


router.route('/event-banner/get-one').post(getOneEventBanner)
router.route('/event-banner').get(getAllBanner)

module.exports = router