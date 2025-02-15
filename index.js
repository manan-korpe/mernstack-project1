import express from "express";
import fs from "fs";
import 'dotenv/config';
import cors from "cors";
import CookieParser from "cookie-parser";
import DBConnect from "./config/dbConect.js";
import {v2 as cloudinary} from "cloudinary"

//routes
import UserRoutes from "./Routes/user.routes.js"
import CategoryRoutes from "./Routes/category.routes.js";
import ProductRoutes from "./Routes/product.routes.js";
import CartRoutes from "./Routes/cart.routes.js";

const app = express();

//auto create static(public) folder is not created
if(!fs.existsSync("./public")){
    fs.mkdirSync("./public", {recursive:true})
};

//middlewares
app.use(express.static("public")) // for static file store and retrave
app.use(cors({origin:"*",credentials:true})); // for cors origin fontEnd connection
app.use(express.json());    //use for req data avilable  or visible
// app.use(express.urlencoded({extended:true}))
app.use(CookieParser()); // for handle cookies

//cloudinary configrate 
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

//routes or end-Points
app.use("/user",UserRoutes);
app.use("/category",CategoryRoutes);
app.use("/product",ProductRoutes);
app.use("/cart",CartRoutes);

// global Error handle middleware
app.use((err,req,res,next)=>{
    console.error(err.stack);
    if(err)
        res.status(err.statusCode || 500).json({success:false,message:err.message})
});

//server start
try{
    DBConnect();
    app.listen(3000,()=>{
        console.log("server run....! http://localhost:3000");
    })
}catch(err){
    console.log(err.message)
}

