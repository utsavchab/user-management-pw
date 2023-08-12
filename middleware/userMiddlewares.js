const User = require("../models/user.schema")


const userExist = async (email) => { // will throw error if user already exist
    const data = await User.findOne({email});
    if(data){
        throw new Error("User already exist")
    }
}

module.exports.checkRegisterDetails = (req, res, next) => {

    const {name, email, password} = req.body; 
    if(!name || !email || !password){
        return res.status(400).json({msg : "all input fields are required"})
    }

    userExist(email)
    .then(() => next())
    .catch(() => {
        return res.status(400).json({msg : "User already exist"})
    })
}

module.exports.checkLoginDetails = async (req,res,next) => {
    
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({msg : "all input fields are required"})
    }

    userExist(email)
    .then(() => {
        return res.status(400).json({msg : "User does not exist"})
    })
    .catch(() => next())
    
}