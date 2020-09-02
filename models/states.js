const mongoose = require('mongoose');
require('../config/mongodb')
const states = mongoose.model('states', {
    name: {
        type:String,
        required: true
    },
    initials: {
        type:String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type:Date,
    },
})

module.exports = states;