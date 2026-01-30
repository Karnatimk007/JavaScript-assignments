import express from "express";
//create mini-express(separate route) APP
 export const UserAPP=express.Router();
let users=[];
    UserAPP.get('/users',(req,res)=>{
        //send users data in response
        res.status(200).json({message:"all users",payload:users});//message ,payload
        //status code 200 for success 
    })
    //post req handleing route(Create user)
     UserAPP.post('/users',(req,res)=>{
        //get user data from request body
        const user1=req.body;
        //to check user already exists or not 
        let index=users.findIndex((user)=>user.id===user1.id) 
        if(index!=-1){
            res.status(400).json({message:"user already exists"});
        }
        else{
            users.push(user1);
            res.status(200).json({message:"user created"});
        }
     })
    //put  req handling route (Update user)
     UserAPP.put('/users/id',(req,res)=>{
       //get modified user from req body
       const user1=req.body;
       //find the user with id exists in array
       let index=users.findIndex((user)=>user.id===user1.id);
       // if user not exists send res as "user not found"
       if(index===-1){
       return  res.status(404).json({message:"user not found"});
       }
       //update user
      let deleteduser=users.splice(index,1,user1);

       //send response
        res.status(200).json({message:"user updated"});
     })
     //read user by id
     UserAPP.get('/users/:id',(req,res)=>{
        //console.log(req.params);
       //get id from req params
       const id=Number(req.params.id);
       //find user with id
       let user=users.find((user)=>user.id===id);
       //if user not found send res as "user not found"
       if(user===undefined){
       return  res.status(404).json({message:"user not found"});
       }
       //send user data in response
       res.status(200).json({message:"user found",payload:user});//message ,payload
       //status code 200 for success 
     })
    //delete req (Delete user)
     UserAPP.delete('/users/:id',(req,res)=>{
       //get id from req params
       const id=Number(req.params.id);
       //find user with id
       let user=users.find((user)=>user.id===id);
       //if user not found send res as "user not found"
       if(!user){
       return  res.status(404).json({message:"user not found"});
       }
       //delete user
       console.log(users.indexOf(user))
       let deleteduser=users.splice(users.indexOf(user),1);
       //send response
       res.status(200).json({message:"user deleted",payload:deleteduser});
     })
