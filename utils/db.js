var mongoose = require('mongoose');
var log = require('./log')(module);
var config = require('./../config');

mongoose.connect(config.get("mongoose:url"));
var db = mongoose.connection;

db.on('error', function (err) {
    log.error = 'connection error:' + err.message;
    console.log('connection error:' + err.message);
});
db.once('open', function callback () {
    log.info = "Connected to DB!";
    console.log("Connected to DB!");
});