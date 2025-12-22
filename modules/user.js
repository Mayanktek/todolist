const mongoose = require('mongoose')
const user = new mongoose.Schema({
    // mongodb will automatically create id field
    name: {
        type: String,
        required: [true, "user full name is required"],
        maxlength: [150, "user name should not exceed 150 characters"]
    },
    email: {
        type: String,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "please fill a valid email address"],
        required: [true, "email address is required"]
    },
    password: {
        type: String,
        required: [true, "The password is required"]
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})
module.exports=mongoose.model('user',user)