const express = require('express')
const router = express.Router()

const { getProducts, 
    newProduct, 
    getSingleProduct , 
    updateProduct, 
    deleteProduct, 
    createProductReview, 
    getProductReviews,
    uploadImg,
    deleteReview,
    get } = require('../controllers/productController')

const { isAuthenticatedUser , authorizeRoles } = require('../middlewares/auth')


router.route('/products').get(getProducts)
router.route('/product/upload/image').post(uploadImg)
router.route('/product/:id').get(getSingleProduct)

router.route('/admin/product/new').post(isAuthenticatedUser,authorizeRoles('admin'),newProduct)

router.route('/admin/product/:id')
                .put(isAuthenticatedUser,authorizeRoles('admin'),updateProduct)
                .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteProduct)



router.route('/review').post(isAuthenticatedUser,authorizeRoles('user'), createProductReview)
router.route('/review/:id').get(getProductReviews)
router.route('/reviews').delete(isAuthenticatedUser, deleteReview)

module.exports = router