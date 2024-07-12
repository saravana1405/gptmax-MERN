const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    phone : Number,
    password : String
})

const userModel = mongoose.model("data",userSchema)

module.exports = userModel