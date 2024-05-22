// require('dotenv').config({path: './env'})
import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

// Method 1:
dotenv.config({
    path: './env',
});

connectDB();



/*
Method 2:  
const app = express();
(async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (err)=> {
            console.log(err);
            throw err;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listinging on port ${process.env.PORT}`);
        })
    }catch(err){
        console.log(err);
        throw err;
    }
})()

*/