// create http server

// Import express module
import express from 'express'; 
import { UserAPP } from './APIs/UserAPI.js';
import { productAPP } from './APIs/ProductAPI.js';
// Create server
const app = express();

// //Create a custom middleware
// function middleware1(req,res,next){
//     //sends req
//     // console.log("middleware1")
//     res.json({message:"res from middleware"})
//     // forwarding req to next middleware
//     next();
// }
// function middleware2(req,res,next){
//     //sends req
//     // console.log("middleware2")
//     res.json({message:"res from middleware"})
//     // forwarding req to next middleware
//     next();
// }
// //to execute for every incoming req
// app.use(middleware1)
// //app.use(middleware2)

// Assign port number
app.listen(3000, () => console.log('HTTP server listening on port 3000...'));
//Create API( req handlers -route )
//-------------------------------------
//body parsing middleware
app.use(express.json());
//--------------------------- ----------
//forward req to user app and product app
app.use('/user-api',UserAPP);
app.use('/product-api',productAPP);