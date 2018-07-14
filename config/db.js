//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/sampledb', { useNewUrlParser: true });
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;