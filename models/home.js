var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

//@todo define home inputs and requirements
var Home = new Schema({
    streetNumber: Integer,
    street: String,
    adress: String,
    city: String
});

Home.plugin(passportLocalMongoose);

module.exports = mongoose.model('Home', Home);