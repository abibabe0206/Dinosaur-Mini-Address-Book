// Login in this case means to Register a new User

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema this is our table
const LoginSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }

});



module.exports = LoginInformation = mongoose.model('LoginInformation', LoginSchema);