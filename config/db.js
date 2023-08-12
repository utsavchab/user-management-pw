const mongoose = require("mongoose")

const connectToDbAndListen = async (app) => {
    try{
        const PORT = process.env.PORT
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected to : ", conn.connection.host)
        app.listen(PORT, () => {
            console.log("Server running live at port: ", PORT)
        })
    }catch(err){
        console.error("Error: ", err)
    }
}

module.exports = connectToDbAndListen;