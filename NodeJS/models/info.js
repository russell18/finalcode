const mongoose = require('mongoose');

var Information = mongoose.model('Information', {
    name: { type: String },
    title: { type: String },
    desc: { type: String },
    date: { type: String },
    img: { type: String }


});

module.exports = { Information };