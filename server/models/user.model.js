const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName       : {type: String, required: true },
    lastName        : {type: String, required: true },
    nick            : {type: String },
    profile         : {type: String, required: true, enum: ['Super', 'Admin', 'Chef', 'Commander'] },
    status          : {type: String, required: true },
    email           : {type: String, required: true },
    phone           : {type: String },
    password        : {type: String, required: true }
});

//Export function to create "User" model class
module.exports = mongoose.model('User', UserSchema);

/*
{   
	"firstName"       : "Tatiana",
    "lastName"        : "Chatteau",
    "nick"            : "Taty",
    "profile"         : "Admin",
    "status"          : "Activo",
    "email"           : "tatychatt@gmail.com",
    "phone"           : "11 7355 8960",
    "password"        : "123456"
}
*/