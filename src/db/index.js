import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//whenever we are connecting database,we need to keep these 2 things in mind:
//there might be some problems in connecting the database, so we always enclose them with try-catch.
//database is assumed to be in another continent, so it's always recommended to use async-await to make the code asynchronous.

const connectDB= async ()=>{
     try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGO_DB}/${DB_NAME}`)
        console.log(`MongoDB connected in the host: ${connectionInstance.connection.host} `)
     } catch (error) {
        // console.log(process.env.MONGO_DB)
        console.log("MongoDB connection Failed: ",error);
        
        process.exit(1);
     }
}

export default connectDB;