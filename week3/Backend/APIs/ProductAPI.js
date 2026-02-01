//Products 
import express from "express";
//create min -express(separate route) APP
//PRODUCT API:
// GET http://localhost:3000/products
// GET http://localhost:3000/products/<id>
// GET http://localhost:3000/products/<brand>
// POST http://localhost:3000/products
// PUT http://localhost:3000/products/<id>
// DELETE http://localhost:3000/products/<id>
export const productAPP=express.Router();
    let products=[]
   productAPP.get('/products',(req,res)=>{
    // console.log(products)
    res.status(200).json({message:"all products",payload:products});
   })
   productAPP.post( '/products',(req,res)=>{
    let newproduct=req.body;
    products.push(newproduct);
    res.status(200).json({message:"product added"})
   })

   productAPP.put('/products/id',(req,res)=>
{
    let modifiedproduct=req.body
    let index=products.findIndex((product)=>product.id===modifiedproduct.id)
    if(index!=-1)
    {
        products[index]=modifiedproduct
        res.status(200).json({message:"product updated"})
    }
    else{
        return  res.status(404).json({message:"product not found"})
    }
})
productAPP.get('/products/:id',(req,res)=>{
    let id=Number(req.params.id)
    let product=products.find((product)=>product.id===id)
    if(product===undefined)
    {
        return res.status(404).json({message:"product not found"})
    }
    res.status(200).json({message:"product found",payload:product})
})
productAPP.get('/products-brand/:brand',(req,res)=>{
    let brand=req.params.brand
    let product=products.find((product)=>product.brand===brand)
    if(product===undefined)
    {
        return res.status(404).json({message:"product not found"})
    }
    res.status(200).json({message:"product found",payload:product})
})
productAPP.delete('/products/:id',(req,res)=>{
    let id=Number(req.params.id)
    let product=products.find((product)=>product.id===id)
    if(product===undefined)
    {
        return res.status(404).json({message:"product not found"})
    }
    products.splice(products.indexOf(product),1)
    res.status(200).json({message:"product deleted",payload:product})
})
