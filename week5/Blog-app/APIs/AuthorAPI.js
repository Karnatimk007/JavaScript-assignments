import ex from 'express'
import UserTypeModel from '../Models/UserModel.js'
import ArticleTypeModel from '../Models/ArticleModel.js'
import {register,authenticateUser} from '../Services/authService.js'
import {CheckAuthor} from '../Middlewares/CheckAuthor.js'
import { verifyToken } from '../Middlewares/verifyToken.js'
const AuthorRouter=ex.Router()
//DRY principle-Don't Repeat Yourself
//Register author
AuthorRouter.post('/users',async(req,res)=>{
    const authorObj=req.body
    const author=await register({...authorObj,role:'AUTHOR'})
    res.status(201).json({message:"Author created",payload:author})
})
//authenticate author
AuthorRouter.post('/login',async(req,res)=>{
    //get user credentials from request body
    const userObj=req.body
    //authenticate user
    let {user,token}=await authenticateUser({...userObj,role:'AUTHOR'})
    //save token in cookie
    res.cookie('token',token,{httpOnly:true,sameSite:'lax',secure:false})
    //send response
    res.status(200).json({message:"User authenticated",user})
})
//create article(protected route)
AuthorRouter.post('/articles',verifyToken,async(req,res)=>{
    const articleObj=req.body 
    const article=new ArticleTypeModel(articleObj)
    await article.save()
    res.status(201).json({message:"Article created",article})
})
//edit article(protected route)
AuthorRouter.put('/articles/:articleid/:authorid',verifyToken,CheckAuthor, async (req, res) => {
  const articleid  = req.params.articleid;
  const authorid=req.params.authorid;
  const {title,content,category } = req.body

  let article = await ArticleTypeModel.findOne({
    _id: articleid,
    author: authorid
  })

  if (!article)
    return res.status(404).json({ message: "Article not found" })

  if (title) article.title = title
  if (content) article.content = content
  if (category) article.category = category

  await article.save()

  res.status(200).json({ message: "Article updated", article })
})
//read articles of author(protected route)
AuthorRouter.get('/articles/:id',verifyToken,CheckAuthor,async(req,res)=>{
    let authorid=req.params.id
    let articles=await ArticleTypeModel.find({author:authorid,isArticleActive:true}).populate("author")
    if(!articles) return res.status(404).json({message:"Articles not found"})//is this line 
    res.status(200).json({message:"Articles",articles})
})
//delete(soft delete) article
export default AuthorRouter