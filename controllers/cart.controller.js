import CustomeError from "../middlewares/Error.js";
import AsyncHandler from "../middlewares/asyncHandler.js";
import Success from "../middlewares/success.js";

//models
import Cart from "../models/Cart.model.js";
import User from "../models/User.models.js";
import Product from "../models/porduct.models.js";

const GetCart = AsyncHandler( async(req,res,next)=>{
    if(!req.cart)
        return next(new CustomeError("cart not found",401));

    res.json(new Success("get cart",201,req.cart))
});

const AddToCart = AsyncHandler(async(req,res,next)=>{
    //req.cart is cart got from db
    //req.params.id is product id 

    if(!req.params.id)
        return next(new CustomeError("Enter valid data",401));

    const product = await Product.findById(req.params.id);

    if(!product)
        return next(new CustomeError("Product not found",401));

    const newAddProduct = {
        productId:product,
        quantity:1,
        price:Number(product.price),
    }

    req.cart.items.push(newAddProduct)
    await req.cart.save();

    const UpdatedCart = await Cart.findById(req.cart._id);  //geting updated cart 

    if(!UpdatedCart)
        return next(new CustomeError("Cart not update",401));

    res.json(new Success("product added successfuly in cart",201,UpdatedCart))

});

const UpdateCart = AsyncHandler(async(req,res,next)=>{
    const {quntity} = req.body;

    if(!req.params.id || !quntity)
        return next(new CustomeError("Enter valid data",401));

    const product = await Product.findById(req.params.id);

    if(!product)
        return next(new CustomeError("Product not found",401));

    req.cart.items.forEach((item)=>{
        let tempQtycheck = item.quantity + quntity;
        if(String(item.productId) == String(product._id)){
            if(tempQtycheck>product.quntity)
                throw next(new CustomeError("Quntity is to much",401))
            item.quantity = tempQtycheck;
        }

    });

    await req.cart.save();
    const UpdatedCart = await Cart.findById(req.cart._id);  //geting updated cart 

    if(!UpdatedCart)
        return next(new CustomeError("Cart not update",401));

    res.json(new Success("updated successfuly",201,UpdatedCart));
});

const DeleteCartproduct = AsyncHandler(async(req,res,next)=>{
    if(!req.params.id)
        return next(new CustomeError("Enter valid data",401));

    const updatedItems = req.cart.items.filter((item)=>String(item.productId) != String(req.params.id));

    req.cart.items = updatedItems;
    await req.cart.save();

    const UpdatedCart = await Cart.findById(req.cart._id);  //geting updated cart 

    if(!UpdatedCart)
        return next(new CustomeError("Cart not update",401));

    res.json(new Success("product deleted successfuly in cart",201,UpdatedCart))
});
export {
    GetCart,
    AddToCart,
    UpdateCart,
    DeleteCartproduct,
}