const User = require('../models/user.model')
async function getUserProfile(req,res){
    try{
        const user = await User.findById(req.user.id).select("-password -__v -updatedAt")
        if(!user){
            return res.status(400).json({error:"User not found"})
        }
        res.status(200).json({user,success:true,message:"user found successfully"})
    }
    catch(err){
        res.status(400).json({error:"Getting error in getting profile information"})
    }
}

module.exports = getUserProfile