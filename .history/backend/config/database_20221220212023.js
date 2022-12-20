const mongoose = require('mongoose');

const connectDatabase = () => {

    mongoose.connect(process.env.DB,{
        useNewUrlParser: true,
        useUnifiedTopology : true,
    }).then(con => {
        console.log('MongoDB Database connected with HOST: '+ con.connection.host)
    })

}

module.exports = connectDatabase