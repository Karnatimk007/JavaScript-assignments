import express from  "express"
import {ProductModel} from "../models/ProductModel.js"
//create mini express router
const Productapp=express.Router()

//create product
Productapp.post('/products',async(req,res)=>{
    //get product from req
    let newProduct=req.body
    //create product document
    let newProductDoc=new ProductModel(newProduct)
    //save product document in DB
    await newProductDoc.save()
    //send response to client
    res.status(200).json({
        message:"product created successfully",
        data:newProductDoc
    })
})
//Read all product
Productapp.get('/products',async(req,res)=>{
    //get product id
    let product=await ProductModel.find();
    res.status(200).json({message:"Product details",payload:product})
})
// get with id
Productapp.get('/products/:id',async(req,res)=>{
    //get objectid from uri params
    let givenId = req.params.id;
    //get product from DB
    let findProduct = await ProductModel.findById(givenId);
    //send response to client
    res.status(200).json({message:"product by id",payload:findProduct})
})

// update with id
Productapp.put('/products/:id',async(req,res)=>{
    // extract id
    let givenId = req.params.id;
    //get modified product from req
    let newProduct = req.body;
    //update product in DB
    let latestObj = await ProductModel.findByIdAndUpdate(givenId,
        {$set:{...newProduct}},
        {new:true,runValidators:true})
    //send response to client
    res.status(200).json({message:"updated the product",payload:latestObj})
})
//get product by pid
Productapp.get('/products/pid/:id',async(req,res)=>{
    //get pid from uri params
    let givenPID = req.params.id;
    console.log(givenPID)
    //get product from DB
    let findProduct = await ProductModel.find({pid:givenPID});

    //send response to client
    res.status(200).json({message:"product by pid",payload:findProduct})
})

export default Productapp

