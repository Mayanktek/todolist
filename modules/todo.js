const mongoose=require('mongoose')
const todo=new mongoose.Schema({
    // mongodb will automatically create id field
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    title:{
        type:String,
        requires:[true,"todo tittle is required"]
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        enum:{
            values:["pending","completed"],
            message:'{VALUE} are only supported'
        }
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at:{
        type:Date,
        default:Date.now 
    }
})
module.exports=mongoose.model('todo',todo)