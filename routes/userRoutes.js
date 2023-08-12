const express = require("express");
const {userRegister, userLogin} = require("../controller/userController.js") // usercontrollers
const {checkRegisterDetails, checkLoginDetails} = require("../middleware/userMiddlewares.js") // middlewares

const router = express.Router();

router.get("/", (req,res) => {
    res.send("POST on '/register' to register, POST on '/login' to login.")
})

router.post("/register",checkRegisterDetails, userRegister)
router.post("/login",checkLoginDetails, userLogin)


module.exports = router