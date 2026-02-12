import express from "express"
import ProductModel from "../Models/ProductModel.js"
//create mini router
export const productRouter = express.Router()
//route to create product 
productRouter.post("/create",async(req,res)=>{
    //get product data from request body
   const productData = req.body
    //create product in database
    const product = new ProductModel(productData)
    await product.save()//
    res.status(201).json({message:"Product created successfully"})
})
//get all products
productRouter.get('/get',async(req,res)=>{
    const products = await ProductModel.find()
    res.status(200).json(products)
})
