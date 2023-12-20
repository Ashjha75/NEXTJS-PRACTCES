import mongoose from "mongoose";

let isConnected = false;
export const connectDb = async () => {
    mongoose.set('strictQuery', true);
    if (!process.env.DATABASE_URL) {
        console.log("Missing Database Url")
        return
    }
    if (isConnected) {
        console.log("Already Connected To Database..")
        return
    }
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        isConnected = true;
        console.log("Connected Successfully...")
    } catch (error: any) {
        console.log(error)
    }

}

