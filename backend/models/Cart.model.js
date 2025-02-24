import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', 
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1, 
    },
    price: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
      default: function () {
        return this.price * this.quantity;  
      }
    }
  });

const cartSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [cartItemSchema],
    totalPrice: {
      type: Number,
      default: 0,
    }
  },{timestamp:true});

cartSchema.pre('save', function (next) {
    this.totalPrice = this.items.reduce((total, item) => {
        console.log
        return total + item.total
    }, 0);
    next();
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart