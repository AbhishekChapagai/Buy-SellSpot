const mongoose = require('mongoose')
const Admin = mongoose.model('Admin', {
    aname: {
        type: String,
        required: true
    },
    aemail: {
        type: String,
        required: true,
        unique: true
    },
    apassword: {
        type: String,
        required: true,

    },
    aphoneNumber: {
        type: Number,
        required: true
    },
    aaddress: {
        type: String,
        required: true

    }
})

module.exports = Admin;