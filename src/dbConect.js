import mongoose from "mongoose";

const dbConnect = async () =>{
    await mongoose.connect(`${process.env.DB_STRING}`);
}

export default dbConnect;