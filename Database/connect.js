//var mongoose = require('mongoose');
import mongoose from 'mongoose';

var mongoURL = process.env.MONGO_URL;// || 'mongodb+srv://code-dev_admin:NnC0SkEMYqjMJ47f@cluster0.ahslu.mongodb.net/code-dev?retryWrites=true&w=majority'//'mongodb://localhost:27017/nekidb';

mongoose.Promise = global.Promise;
mongoose.connect(mongoURL,{ useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log('Mongoose connection error:', err)
    } else {
        console.log('Mongodb connection success')
    }
});

var db = mongoose.connection;

db.on('db.on: error', console.error.bind(console, 'connection error:'));

export default db;