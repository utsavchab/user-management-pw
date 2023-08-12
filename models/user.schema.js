const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        trim : true,
        required : [true , "Name is Required"]
    },
    email : {
        type: String,
        unique : true,
        trim : true,
        required : [true , "Email is Required"]
    },
    password : {
        type: String,
        required : [true , "Password is Required"]
    }
})

module.exports =  mongoose.model("User", UserSchema)