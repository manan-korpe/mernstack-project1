import multer from "multer";
import path from "path"

const multerConfig = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public");
    },
    filename:(req,file,cb)=>{
        console.log(file.originalname);
        cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname))
    }
});

const upload = multer({
    storage:multerConfig,
    limits:{
        fileSize:1024*1024*10124
    },
    fileFilter:(req,file,cb)=>{
        const fileType = /jpg|jpeg|png|gif/ ; 
        const extName = fileType.test(path.extname(file.originalname));
        const mimeType = fileType.test(file.mimetype);

        if(extName && mimeType){
            return cb(null,true);
        }else{
            return cb(new Error("Only images are allowed"),false)
        }
    }
});

export default upload;