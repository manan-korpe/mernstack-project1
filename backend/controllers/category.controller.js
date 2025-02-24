import {Category} from "../models/Category.models.js";
import CustomeError from "../middlewares/Error.js";
import asyncHandler from "../middlewares/asyncHandler.js";

//category 
const AddCategory = asyncHandler( async(req,res,next)=>{
    const {category} = req.body;
    
    if(!category)
        return next(new CustomeError("Enter valid  data ",400));

    const cat = new Category({name:category});
    await cat.save();
    res.json({message:"data stored in db"});
});

const UpdateCategory = asyncHandler( async(req,res,next)=>{
    const id = req.params.id;
    const {category} = req.body;

    if(!category){
        return next(new CustomeError("enter valid data",401));
    }

    const cat = await Category.findByIdAndUpdate(id,{name:category});

    console.log(cat)
    res.json({data:"data founded"})
});

const GetAllCategory = asyncHandler( async(req,res,next)=>{
    const cat = await Category.find({});
    res.json({success:true,data:cat})
});

const DeleteCategory = asyncHandler( async(req,res,next)=>{
    const {category} = req.body;
    if(!category)
       return next(new CustomeError("Enter category",400));

    const cat = await Category.findOneAndDelete({name:category});

    console.log(cat)
    if(!cat){
       return next(new CustomeError("Enter valid category",400));
    }
        
    res.json({success:true,data:cat,message:`${category} deleted success fully`})
});

export {
    AddCategory,
    GetAllCategory,
    UpdateCategory,
    DeleteCategory
}