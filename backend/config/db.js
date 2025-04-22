import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ruchitsheth:dcba4321@cluster0.aptd4ob.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}