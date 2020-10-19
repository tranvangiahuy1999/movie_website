const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const filmSchema = new Schema({
    _id: {required: true, type: String},
    name: {required: true, type: String},
    rate: String,
    date: {type: Date, defaults: Date.now},
    type: String,
    url: {
        image_url: {required: true, type: String},
        image_name: {type: String},
        trailer_url: {type: String},
        movie_url: {type: String}
    },
    comments: [{
        comment_id: String,
        user_id: String,
        body: String,
        date: Date
    }]
}, {
    timestamps:true,
});

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;