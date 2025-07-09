const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String
    },
    addTime:{
        type:Number,
        default:Date.now()
    }

},{
    timestamps:true
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task