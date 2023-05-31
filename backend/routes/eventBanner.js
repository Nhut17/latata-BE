const express = require('express');
const router = express.Router()

const { createEventBanner, uploadEventBanner } = require('../controllers/eventBannerController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/event-banner/create').post(createEventBanner)
router.route('/event-banner').post(isAuthenticatedUser, authorizeRoles('admin'),uploadEventBanner)

module.exports = router