const express = require('express')
const { userSignup, userLogin } = require('../controllers/auth.controller')

const authRouter = express.Router()

authRouter.post('/login',userLogin)

authRouter.post('/signup',userSignup)

module.exports = authRouter