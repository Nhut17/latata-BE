const express = require('express')
const router = express.Router();


const { addToCart } = require('../controllers/cartController')

router.route('/')