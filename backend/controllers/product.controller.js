import Product from "../models/porduct.models.js";
import {Category} from "../models/Category.models.js"
import AsyncHandler from "../middlewares/asyncHandler.js";
import CustomeError from "../middlewares/Error.js";
import Success from "../middlewares/success.js";
import {v2 as cloudinary} from "cloudinary";
import ApiFilter from "../utils/ApiFilter.js";
import fs from "fs";

const AddProduct = AsyncHandler(async (req, res,next)=>{
    const data = req.body;
    if(!data.name || !data.price || !data.mrp || !data.quntity || !data.category)
        return next(new CustomeError("Enter valid data",401));

    Number(data.price)
    Number(data.mrp)
    Number(data.quntity)

    if(!req.files || req.files.length === 0)
        return next(new CustomeError("atlest one file is required",401));
    data.images = [];

    const categoryData = await Category.findOne({name:data.category});
    if(!categoryData)
        return next(new CustomeError("Enter valid category",401));
    data.category = categoryData;

    for(let file of req.files){
        let cloudfile = await cloudinary.uploader.upload(file.path).catch((err)=>{
            return next(new CustomeError(err.message,401));
        });
        fs.unlinkSync(file.path);
        data.images.push(cloudfile.url)
    }

    const product = new Product(data);
    product.save();
    res.json({data:data})
});

const GetProduct = AsyncHandler(async (req, res,next)=>{
    const id = req.params.id;
    if(!id)
        return next(new CustomeError("Enter valid id",401));
    
    const product = await Product.findById(id);

    if(!product)
        return next(new CustomeError("product not found",401))
    
    res.json({data:product});
});

const GetAllProduct = AsyncHandler(async (req, res,next)=>{
    const totalProduct = await Product.find().countDocuments();

    let tempProduct =  new ApiFilter(Product.find({}),req.query).search().sort().pagination(9);

    const products = await tempProduct.find;
    if(!products)
        return next(new CustomeError("products not found",401))
    res.json({totalproducts:totalProduct,products:products.length,data:products});
});

const DeleteProduct = AsyncHandler(async (req, res,next)=>{
    const id = req.params.id;

    const product = await Product.findByIdAndDelete(id);

    if(!product)
        return next(new CustomeError("product not found",401))

    res.json({message:"product deleted successfly"});
});

const UpdateProduct = AsyncHandler(async (req, res,next)=>{
    const id = req.params.id;
    const data = req.body;

    if(Object.keys(data).length === 0)
        next(new new CustomeError("alest one field is require",401));

    if(data.quntity)
        data.quntity = Number(data.quntity);

    if(req.files.length>=1){
        data.images = [];
        for(let file of req.files){
            let cloudfile = await cloudinary.uploader.upload(file.path).catch((err)=>{
                return next(new CustomeError(err.message,401));
            });
            fs.unlinkSync(file.path);
            data.images.push(cloudfile.url)
        }
    }

    const updatedProduct =  await Product.findByIdAndUpdate(id,data);
    
    if(!updatedProduct)
        return next(new CustomeError("something want wrong",401));

    const newData = await Product.findById(id); 
    res.json(new Success("successfuly updated data",201,newData));
});

export {
    AddProduct,
    GetProduct,
    GetAllProduct,
    DeleteProduct,
    UpdateProduct
}