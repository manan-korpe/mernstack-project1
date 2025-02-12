import express from "express";
import fs from "fs";
import 'dotenv/config';
import cors from "cors";
import CookieParser from "cookie-parser";
import DBConnect from "./config/dbConect.js";
import UserRoutes from "./Routes/user.routes.js"


const app = express();

if(!fs.existsSync("./public")){
    fs.mkdirSync("./public", {recursive:true})
};

app.use(express.static("public")) // for static file store and retrave
app.use(cors({origin:"*",credentials:true}));
app.use(express.json());    //use for req data avilable  or visible
app.use(CookieParser()); // for handle cookies

//routes or end-Points
app.use("/user",UserRoutes);


// middlewares
app.use((err,req,res,next)=>{
    console.error(err.stack);
    if(err)
        res.status(err.statusCode || 500).json({error:true,message:err.message})
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

