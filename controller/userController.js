const User = require("../model/userModel")

const createUser = async(req,res) => {
    try {
        const {name,email,message} = req.body;
        const user = await User.create({name,email,message})
        res.json({status:200,message:"User Created Successfully",user})
    } catch (error) {
        res.json({status:404,errorMsg:"User not created"},null)
    }
}

const getAllUsers = async(req,res) => {
    try{
        const user = await User.find({})
        res.json({status:200,message:"Users found",user})
    }catch(error){
        res.json({status:404,errorMsg:"User not found"},null)
    }
}

module.exports = {getAllUsers,createUser};