const express  = require('express')
const router = express.Router()


const { addBrand, deleteBrand, updateBrand , getBrand} = require('../controllers/brandController')

const { isAuthenticatedUser , authorizeRoles } = require('../middlewares/auth')


router.route('/brand/add').post(addBrand)
router.route('/brand/:id').delete(deleteBrand)
                          .put(updateBrand)
router.route('/brand').get(getBrand)


module.exports = router