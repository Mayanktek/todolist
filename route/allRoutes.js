 const express=require('express')
const router=express.Router();

const userController=require('../controller/userController')
const todoController=require('../controller/todoController')
//user routes
router.post('/user/create',userController.createUser)
router.post('/user/update/:id',userController.updateUser)
router.put('/user/delete/:id',userController.deleteUser)

//todo routes
router.post('/todo/create',todoController.createTodo)
router.post('/todo/update/:id',todoController.updateTodo)
router.put('/todo/delete/:id',todoController.deleteTodo)

module.exports=router;