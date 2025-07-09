
const express = require('express')
const { getAllTasks, getOneTask, addNewTask, getEditTask, getDeleteTask } = require('../controllers/tasks.controller')
const verifyToken = require('../services/verifyToken')

const taskRouter = express.Router()

taskRouter.get('/',verifyToken,getAllTasks)

taskRouter.get('/:taskId',verifyToken,getOneTask)

taskRouter.post('/',verifyToken,addNewTask)

taskRouter.put('/:taskId',verifyToken,getEditTask)

taskRouter.delete('/:taskId',verifyToken,getDeleteTask)

module.exports = taskRouter