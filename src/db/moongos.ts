import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config()

const uri ="mongodb://127.0.0.1:27017/myDBS"

export async function connectDBS(){
    try{
        await mongoose.connect(uri)
        console.log("db connected");
        
    }catch(err){
        console.log(err);
        
    }
}