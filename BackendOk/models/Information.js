const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema this is our table
const InfoSchema = new Schema({
    age: {
        type: String,
        required: true
    },
    family: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    food: {
        type: String,
        required: true
    }
});

module.exports = Information = mongoose.model('Information', InfoSchema);