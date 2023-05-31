const express = require('express');
const app = express();
const cors = require('cors');
const errorMiddleware = require('./middlewares/errors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileupload = require('express-fileupload'); 
const passport = require('passport');
const cookieSession = require('cookie-session')



app.use(
    cookieSession({
        name: 'session',
        keys: ["cyberwolve"],
        maxAge: 24*60*60*100,
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(fileupload({useTempFiles: true}))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

require('dotenv').config()

const cloudi = require('cloudinary')
// setting up cloudinary config
cloudi.config({
    cloud_name: 'dbhjhvgcr',
    api_key: '581993492829265',
    api_secret: 'sYf15Luto58liArk2cN4klOahjA',
})



// import all routes
const products = require('./routes/product')
const auth = require('./routes/auth')
const order = require('./routes/order')
const category = require('./routes/category')
const cart = require('./routes/cart')
const address = require('./routes/addressDelivery')
const brand = require('./routes/brand')
const info_tech = require('./routes/infoTech')
const voucher = require('./routes/voucher')
const guestVoucher = require('./routes/guestVoucher')
const saleFigure = require('./routes/saleFigures')
const salesCate = require('./routes/salesCategory')
const sumSales = require('./routes/sumSalesFigure')
const payment = require('./routes/Payment')
const event_banner = require('./routes/eventBanner')
const top_sales_user = require('./routes/topSalesUser')
// const passportSetup = require('./utils/passport')
// const googleAuth = require('./routes/googleAuth')


// app.use('/api/v1',googleAuth)
app.use('/api/v1',products)
app.use('/api/v1',auth)
app.use('/api/v1',order)
app.use('/api/v1',category)
app.use('/api/v1',cart)
app.use('/api/v1',address)
app.use('/api/v1',brand)
app.use('/api/v1',info_tech)
app.use('/api/v1',voucher)
app.use('/api/v1',guestVoucher)
app.use('/api/v1',saleFigure)
app.use('/api/v1',salesCate)
app.use('/api/v1',sumSales)
app.use('/api/v1',payment)
app.use('/api/v1',event_banner)
app.use('/api/v1',top_sales_user)


const path = require('path')

if(process.env.NODE_ENV === 'PRODUCTION'){
    app.use(express.static(path.join(__dirname,'../frontend/build')))

    app.get('*',(req, res) =>{
        res.sendFile(path.resolve(__dirname,'../frontend/build/index.html'))
    })
}


// Middleware to handle errors
app.use(errorMiddleware)


module.exports = app