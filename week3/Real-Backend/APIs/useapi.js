import express from "express"
import { UserModel } from "../models/UseModel.js"
//create mini express router
 const userapp = express.Router()
//test route
//user api routes

//create user
userapp.post("/users", async(req, res) => {
    //create user in DB
   let newUser=req.body
   //create new user document
   let newUserDoc=new UserModel(newUser)
   //save user document in DB
   await newUserDoc.save()
   //send response to client
   res.status(200).json({
    message:"user created successfully",
    data:newUserDoc
   })
})
//read user
userapp.get("/users", async(req, res) => {// model will give the collection
    //read users from DB
    let user=await UserModel.find()
    res.status(200).json({
        message:"users fetched successfully",
        data:user
    })
})
//read user by objectid
userapp.get("/users/:id", async(req, res) => {
    //get objectid from req
    let objectid=req.params.id //params for objectid
    //get user from DB
    let user=await UserModel.findById(objectid) //find by id
    res.status(200).json({
        message:"user fetched successfully",
        data:user
    })
})
//update user
userapp.put('/users/:id', async(req, res) => {
   //get objectid from uri params
   let objectid=req.params.id
   //get modified user from req
   let modifiedUser=req.body
   //update user in DB
   let updatedUser=await UserModel.findByIdAndUpdate(
    objectid,
    {$set:{...modifiedUser}},//set will update the user 
    {new:true,runValidators:true}) //runValidators:true will run the validators during update
   //new:true will return the updated user document
   //send response to client
   res.status(200).json({
       message:"user updated successfully",
       payload:updatedUser
   })
})
//delete user
userapp.delete('/users/:id',async(req,res)=>
{
    //get objectid from uri params
    let objectid=req.params.id
    //delete user from DB
    let deletedUser=await UserModel.findByIdAndDelete(objectid)
    //send response to client
    res.status(200).json({
        message:"user deleted successfully",
        payload:deletedUser
    })
})
export default userapp

