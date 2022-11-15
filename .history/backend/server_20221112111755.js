const app = require('./app')
const connectDatabase = require('./config/database')
var cors = require('cors')

app.use(cors())

const dotenv = require('dotenv')


// Handle Uncaught exceptions
process.on('UncaughtException', err => {
    console.log('Error: ' + err.stack)
    console.log('Shutting down server due to uncaught exception')
    process.exit(1)
})

// setting up config file
dotenv.config({path: 'backend/config/config.env'})



// connecting to database
connectDatabase();


const server = app.listen(process.env.PORT, () => {
    console.log('server started on port: ' + process.env.PORT + ' in ' + process.env.NODE_ENV + ' mode ' )  
})

// Handle Unhandled rejections
process.on('unhandledRejection', err => {
    console.log('Error: ' + err.stack)
    console.log('Shutting down the server due to Unhandled Promise Rejection')
    server.close(() =>{
        process.exit(1)
    })
})
