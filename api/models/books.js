const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    published: Number,
    authors: [{
        name: {
            type: String,
            required: true
        },
        dob: Number
    }]
    }, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Books', schema)