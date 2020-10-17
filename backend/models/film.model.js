const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const filmSchema = new Schema({
    _id: {required: true, type: String},
    name: {required: true, type: String},
    rate: {required: true, type: String},
    date: {required: true, type: String},
    type: {type: String},
    url: {
        image_url: {required: true, type: String},
        image_name: {type: String},
        trailer_url: {type: String},
        movie_url: {type: String},
    },
}, {
    timestamps:true,
});

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;