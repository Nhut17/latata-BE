const mongoose = require('mongoose');

const connectDatabase = () => {

    mongoose.connect('mongodb+srv://quynhnhut113:<password>@qnhut.6xxavy0.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology : true,
    }).then(con => {
        console.log('MongoDB Database connected with HOST: '+ con.connection.host)
    })

}

module.exports = connectDatabase