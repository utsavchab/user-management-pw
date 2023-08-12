const express = require("express")
const connectToDbAndListen = require("./config/db.js")
const userRoutes = require("./routes/userRoutes.js")
const cors = require("cors")
require("dotenv").config()

const app = express()
connectToDbAndListen(app)

// midleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())


// routes
app.use('/', userRoutes)


module.exports = app;