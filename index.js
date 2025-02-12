import express from "express";
import 'dotenv/config';
import cors from "cors";
import CookieParser from "cookie-parser";
import DBConnect from "./src/dbConect.js";
import UserRoutes from "./Routes/user.routes.js"
// import upload from "./middlewares/multer.middleware.js";
import fs from "fs";
// import cloudinary from "./middlewares/cloudinary.js"

const app = express();

//check public folder created or not 
if(!fs.existsSync("./public")){
    fs.mkdirSync("./public", {recursive:true})
};

app.use(express.static("public")) // for static file store and retrave
app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(express.json());    //use for req data avilable  or visible
app.use(CookieParser()); // for handle cookies

//routes or end-Points
app.use("/user",UserRoutes);


//middlewares
app.use((err,req,res,next)=>{
    console.error(err.stack);
    if(err)
        res.status(err.statusCode || 500).json({error:true,message:err.message})
});

// app.post("/public",upload.single("image"),(req,res)=>{
//     if(!req.file){
//         return res.status(400).json({error:"nof file found"});
//     }
//     // console.log(req.file)
//     return res.json({mesage:"file submited",file:req.file})
// })

// app.post("/cloudinary",upload.single("image"),(req,res)=>{
    
//     cloudinary.v2.uploader.upload(req.file.path,{
//         transformation: [
//             { width: 300, height: 300, crop: "fill" }  // Resize the image to 300x300
//           ]
//     },(err,result)=>{
//         if(err){
//             res.json({error:err.message})
//         }else{
//             res.status(200).json({data:result});
//         }
//     })
// });

//server start
try{
    DBConnect();
    app.listen(3000,()=>{
        console.log("server run....! http://localhost:3000");
    })
}catch(err){
    console.log(err.message)
}

