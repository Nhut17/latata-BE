const app = require('./app')
const connectDatabase = require('./config/database')
const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));


const dotenv = require('dotenv')


// Handle Uncaught exceptions
process.on('UncaughtException', err => {
    console.log('Error: ' + err.stack)
    console.log('Shutting down server due to uncaught exception')
    process.exit(1)
})

// setting up config file
if(process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').dotenv.config({path: 'backend/config/config.env'})



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
