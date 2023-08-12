const User = require("../models/user.schema.js")

module.exports.userRegister = async (req,res) => {
    const {name, email, password} = req.body;
    try{
        const user = await User.create({name,email,password})
        res.status(201).json({msg : "User Registered Successfully", user})
    }catch(err){
        console.error(err)
        res.status(500).json({msg : "Internal Server Error"})
    }
    
}

module.exports.userLogin = async (req,res) => {
    const {email, password} = req.body;

    try{
        const userData = await User.findOne({email})

        if(userData.password !== password){
            return res.status(400).json({msg : "Password is wrong"})
        }else{
            res.status(200).json({msg : "User login successfully", userData})
        }

    }catch(err){
        console.error(err)
        res.status(500).json({msg : "Internal Server Error"})
    }
}