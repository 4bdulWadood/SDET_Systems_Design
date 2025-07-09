const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const User = mongoose.model("User", taskSchema);

module.exports = User