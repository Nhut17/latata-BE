const express  = require('express')
const router = express.Router()


const { addBrand } = require('../controllers/brandController')

const { isAuthenticatedUser , authorizeRoles } = require('../middlewares/auth')


router.route('/brand/add').post(addBrand)

module.exports = router