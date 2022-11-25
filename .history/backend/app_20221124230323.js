const express = require('express');
const app = express();
const cors = require('cors');
const errorMiddleware = require('./middlewares/errors')

const cookieParser = require('cookie-parser')
app.use(cors())

app.use(express.json());
app.use(cookieParser());
//  // To parse the incoming cookies
// const corsOptions = {
//     credentials: true,
//     origin: "http://localhost:3000" // Add your frontend origin here (Don't add '/' at the end)
// };
// app.use("*", cors(corsOptions));






// import all routes
const products = require('./routes/product')
const auth = require('./routes/auth')
const order = require('./routes/order')
const category = require('./routes/category')
const cart = require('./routes/cart')



app.use('/api/v1',products)
app.use('/api/v1',auth)
app.use('/api/v1',order)
app.use('/api/v1',category)
app.use('/api/v1',cart)


// Middleware to handle errors
app.use(errorMiddleware)


module.exports = app