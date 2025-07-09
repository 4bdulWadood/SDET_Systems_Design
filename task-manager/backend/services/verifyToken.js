const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const {JWT_SECRET} = process.env

async function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(400).json({ error: "You don't have required token for request" })
    }
    try{
        const userInfo = jwt.verify(token, JWT_SECRET)
        if(!userInfo){
            return res.status(401).json({ error: "Token is invalid" })
        } 

        const user = await User.findById(userInfo.id) 
        if(!user){
            return res.status(401).json({ error: "Token is invalid" })
        }
        req.user = user
        next()
    }catch(err){
        res.status(401).json({ error: "Token verification Error" })
    }
}

module.exports = verifyToken