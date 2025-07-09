const express = require('express')
const getUserProfile = require('../controllers/profile.controller')
const verifyToken = require('../services/verifyToken')

const profileRouter = express.Router()

profileRouter.get('/',verifyToken,getUserProfile)

module.exports = profileRouter