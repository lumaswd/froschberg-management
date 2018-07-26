const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: Number
    }
});

module.exports = mongoose.model('MemberModel', MemberSchema);