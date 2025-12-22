const Todo=require('../modules/todo')

exports.createTodo=async(req,res)=>{
    try{
        const todo=await Todo.create(req.body);
        res.json(todo)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

exports.updateTodo=async(req,res)=>{
    try{
        const todo=await Todo.finfByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(todo)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

exports.deleteTodo=async(req,res)=>{
    try{
        const todo=await Todo.finfByIdAndUpdate(req.params.id)
        res.json(todo)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}