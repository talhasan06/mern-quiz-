const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)

const connection = mongoose.connection;

connection.on('connected',()=>{
    console.log('connected to mongo');
})


connection.on('error',()=>{
    console.log('mongo connection failed');
})

module.exports = connection;