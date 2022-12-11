const express = require('express');
const app = express();
const cors = require('cors');
const errorMiddleware = require('./middlewares/errors')

const cookieParser = require('cookie-parser')
const cloudinary = require('cloudinary')
const body

app.use(express.json());
app.use(cookieParser());
app.use(cors());


// import all routes
const products = require('./routes/product')
const auth = require('./routes/auth')
const order = require('./routes/order')
const category = require('./routes/category')
const cart = require('./routes/cart')
const subCategory = require('./routes/subCategory')
const cloudinary = require('./routes/cloudinary')



app.use('/api/v1',products)
app.use('/api/v1',auth)
app.use('/api/v1',order)
app.use('/api/v1',category)
app.use('/api/v1',cart)
app.use('/api/v1',subCategory)
app.use('/api/v1',cloudinary)


// Middleware to handle errors
app.use(errorMiddleware)


module.exports = app