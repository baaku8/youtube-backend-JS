import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app= express();

//cors and cookie parser are configured after the creation of app, type of a middleware
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))
//agar data json file mae aarha
app.use(express.json({
    limit:"16kb",

}))
//agar url se data aa rha
app.use(express.urlencoded({
    extended:true,
    limit:"16kb",
}))
app.use(express.static("Public"));
app.use(cookieParser());

export {app}