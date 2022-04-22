//var mongoose = require('mongoose');
import mongoose from 'mongoose';

var mongoURL = process.env.MONGO_URL;

mongoose.Promise = global.Promise;

let db = null;

try {
    mongoose.connect(mongoURL,{ useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
        
        if (err) throw err;

    });
    db = mongoose.connection;
    db.on('Connection error!!!', console.error.bind(console, 'connection error:'));

} catch ( error ) {
    console.log("Dabase connection error", error);
}




export default mongoose;