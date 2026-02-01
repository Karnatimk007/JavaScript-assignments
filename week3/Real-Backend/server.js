import express from "express"
import userapp from "./APIs/useapi.js"
import Productapp from "./APIs/ProductAPI.js"
import { connect } from "mongoose"
const app = express()//express application
app.use(express.json())//middleware to parse json data
const port = 4000
async function connectDB(){
    try{
        let db=await connect('mongodb://localhost:27017/suntek')
    console.log("Connected to MongoDB")
    //the url is a connection string from mongodb to connect to the database 
    app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
    }
    catch(err){
        console.log("error in connecting to MongoDB", err)
    }
}
connectDB()
app.use("/user-api", userapp)
app.use("/product-api",Productapp)
//error handling middleware
//default error handling middleware
app.use((err,req,res,next)=>{
    // console.log(err)
    res.status(500).json({//500 status code is for internal server error
        message:"Something went wrong",
        error:err
    })
})
