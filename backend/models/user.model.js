const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {required: true, type: String},
    username: {required: true, type: String},
    password: {required: true, type: String},
    like_list:[{
        film_id: String
    }]
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);

module.exports = User;