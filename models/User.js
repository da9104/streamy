const mongoose = require('mongoose')
//const Schema = mongoose.Schema
const { Schema } = mongoose

const userSchema = new Schema({
    googleId: String,
    username: String,
    email: String,
    name: String,
    avatar: String,
    credits: { type: Number, default: 0 }
})

module.exports = mongoose.model('users', userSchema)