const express = require('express')

const router = express.Router()

const { addInfoTech, deleteInfoTech, getInfoTech } = require('../controllers/infoTech')


const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/info-tech/add').post(addInfoTech)
router.route('/info-tech/:id').delete(deleteInfoTech)
router.route('/info-tech/:id').get(getInfoTech)

module.exports  = router;