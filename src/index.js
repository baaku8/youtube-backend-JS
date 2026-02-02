import dotenv from 'dotenv'         //kuch bhi kaam start krne se pehle env variables load krlena.
dotenv.config({ path: './.env' })   
import connectDB from "./db/index.js"; 
import { app } from './app.js';  
// require('dotenv').config() 
connectDB()
.then(()=>{
    app.on("error",(error)=>{
       console.log("ERORR: ",error);
       throw error;
    })
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running in https://localhost:${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MongoDB connection Failure")
    throw error;
})
;          //database connected