import ex from 'express'
import ArticleTypeModel from '../Models/ArticleModel.js'
import UserTypeModel from '../Models/UserModel.js'
import {register,authenticateUser} from '../Services/authService.js'
import { verifyToken } from '../Middlewares/verifyToken.js'
const UserRouter=ex.Router()
//Register user
UserRouter.post('/users',async(req,res)=>{
    const UserObj=req.body
    const user=await register({...UserObj,role:'USER'})
    res.status(201).json({message:"User created",user})
})
//Autheticate user

//read all articles(protected route)
UserRouter.get('/articles',verifyToken,async(req,res)=>{
    let articles = await ArticleTypeModel.find()
    res.send({message:"Articles",articles})
})
//Add comment to an article(protected route)
UserRouter.post('/articles/:id',verifyToken,async(req,res)=>{
    let article = await ArticleTypeModel.findById(req.params.id)
    if(!article){
        return res.status(404).json({message:"Article not found"})
    }
    article.comments.push(req.body)
    await article.save()
    res.status(201).json({message:"Comment added",article})
})
export default UserRouter