
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dbpartice');

var userSchema = mongoose.Schema({
    name:String,
    email:String
})

module.exports = mongoose.model('user',userSchema);