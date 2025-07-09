const User = require("../models/user.model")
const createAccessToken = require("../services/createToken")
const { validateEmail, validatePassword } = require("../utils/validate")
const bcrypt = require('bcryptjs')


async function userSignup(req,res) {
    try{
        const {name,email,password} = req.body
        if(!name || !email || !password){
            return res.status(400).json({
                error:"please fill all the details"
            })
        }
        if(!validateEmail(email)){
            return res.status(400).json({error:"Please enter valid email"})
        }
        if(!validatePassword(password)){
            return res.status(400).json({error:"Please enter valid password"})
        }

        const user = await User.findOne({email})
        console.log("user already exist!!",user)
        if(user){
            return res.status(200).json({message:"User is already registered"})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name:name,
            email,
            password:hashedPassword
        })
        return res.status(200).json({message:"Your account is successfully created"})
    }
    catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


async function userLogin(req,res){
    const {email,password} = req.body
    if(!email || !password){
        return res.status(400).json({error:"please fill all the details"})
    }
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({error:"User not found"})
        }

        const checkPassword = await bcrypt.compare(password, user.password);
        if(!checkPassword){
            return res.status(400).json({error:"Password is incorrect"})
        }

        const token = createAccessToken({id:user.id})
        delete user.password
        return res.status(200).json({token,user,success:true,message:"Login successfully"})
    }catch(err){
        return res.status(400).json({error:"Internal server error"})
    }
}   

module.exports = {
    userSignup,
    userLogin
}