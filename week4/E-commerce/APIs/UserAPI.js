import express from "express";
import usermodel from "../Models/UserModel.js";
import productmodel from "../Models/ProductModel.js"
import { hash } from "bcryptjs";
//create mini router
export const userRouter = express.Router()

//create user API
userRouter.post('/user',async(req,res)=>{
  
    const userData = req.body;
    await new usermodel(userData).validate() //checking validation before hashing
    
    // check if user already exists
    const existingUser = await usermodel.findOne({ email: userData.email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    // hash password
    const hashedPassword = await hash(userData.password, 10);
    userData.password = hashedPassword;
    // create user
    const user = new usermodel(userData);
    await user.save({validateBeforeSave:false});//bypassing validation
    res.status(201).json({ message: "User created successfully" });

})
// userRouter.put( "/user/userid/:userid/productid/:productid",async (req, res) => {
//         //get userid and productid from url parameters
//       const { userid, productid } = req.params; //{ userid:'',productid:''}
//       //check user
//       const user1 = await usermodel.findById(userid)
//       if(!user1){
//         return res.status(404).json({message:"User not found"})
//       }
//       //check product
//       const product = await productmodel.findById(productid)
//       if(!product){
//         return res.status(404).json({message:"Product not found"})
//       }
//       //update user cart
//       const user = await usermodel.findByIdAndUpdate(
//         userid,
//         {
//           $push: {
//             cart: { product:productid },//pushing product id into cart array
//           }
//         },
//         { new: true }//return updated user
//       ).populate("cart.product")
//       //send response
//       res.status(200).json({
//         message: "Product added to cart successfully",
//         cart: user.cart,
//       });
//   }
// );
userRouter.put('/user/userid/:userid/productid/:productid',async(req,res)=>{
   const {userid,productid} =req.params
   //check the user present or not
   let user = await usermodel.findById(userid);
   if(!user) 
   {
    return res.status(404).json({message:"user not found"});
   }
   //check product valid
   const product = await productmodel.findById(productid);
   if(!product) 
   {
    return res.status(404).json({message:"product not found"})
   }
   //check product present in the cart or not
   // try incrementing quantity
    let updatedUser = await usermodel.findOneAndUpdate(
      { _id: userid, "cart.product": productid },
      { $inc: { "cart.$.quantity":1 } },
      { new: true }
    )

    // if product not in cart, push it
    if (!updatedUser) {
      updatedUser = await usermodel.findByIdAndUpdate(
        userid,
        {
          $push: {
            cart: {
              product: productid,
              quantity: 1
            }
          }
        },
        { new: true }
      )
    }
  res.status(200).json({message:"Product added to cart successfully" ,cart:updatedUser.cart}) 
})
userRouter.get('/user/:userid',async(req,res)=>{
    const user = await usermodel.findById(req.params.userid).populate("cart.product")
    //for populate to work we need to add ref in schema
    //populate is used to get data from another collection
    res.status(200).json({message:"User found successfully",user})
})

