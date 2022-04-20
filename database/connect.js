//var mongoose = require('mongoose');
import mongoose from 'mongoose';

var mongoURL = process.env.MONGO_URL;

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