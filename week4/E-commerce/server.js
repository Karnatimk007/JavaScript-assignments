import express from "express"
import { connect } from "mongoose"
import {userRouter} from "./APIs/UserAPI.js"
import {productRouter} from "./APIs/ProductAPI.js"
//create HTTP server
const app = express()//create express app
//connect to mongodb DB
async function connectDB() {
    try{
    let db=await connect("mongodb://localhost:27017/suntek")
    console.log("Connected to MongoDB")
    app.listen(1433, () => {
    console.log("Server is running on port 1433")
})
    }
    catch(error){
        console.log(error)
    }
}
connectDB()
//use body parser middleware
app.use(express.json())

//forward req to specific API
app.use("/user-api",userRouter)
app.use("/product-api",productRouter)

//error handling middleware
app.use((err,req,res,next)=>{
    res.status(500).json({message:err.message})
})



