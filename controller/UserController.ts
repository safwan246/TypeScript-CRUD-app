
import { Products } from "../model/TodoSchema.js";
import type { Request,Response } from "express";
import type { ObjectId } from "mongoose";


///////////////////// get Product //////////////////////////////////

interface Product{
    
    
        ProductName:string;
        Description:string;
        Price: number;
        Quantity: number;
       
   }
type Message = {
    message:string | Product[]
    success:boolean
}

export async function getProduct(req:Request,res:Response<Message>):Promise<void> {
    try{
        
        const showTodo = await Products.find({})
        if(!showTodo){
             res.status(404).json({message:"something wrong",success:true})
             return;
        }
             res.status(200).json({message:showTodo ,success:true })
             return;
       
        } catch(err){
            console.log(err);
            
    }
    
}

/////////////////// Post Product //////////////////////////////////////

export async function postProduct(req:Request,res:Response):Promise<void> {
    try{

        const{ProductName,Description,Price,Quantity}=req.body;
        

        const find = await Products.findOne({ProductName})

        if(find){
            res.json({message:"this product already exists",success:false})
        }

        const newList = await Products.create({
            ProductName,
            Description,
            Price,
            Quantity
        })
       
         res.status(200).json({message:newList,success:true})
         return;
        
        

    }catch(err){
        console.log(err);
        res.status(404).json({message:'something error',success:false})
        return
        
    }
}

////////////////////////// Update Product /////////////////////////////////

type UseId = {
    id : string;
}


export async function putProduct(req:Request<UseId>,res:Response):Promise<void> {
    try{
     
        const id = req.params.id

        const newUpdate = await Products.findByIdAndUpdate(id,req.body)
        if(!newUpdate){
            res.status(404).json({message:"something error",success:false})
            return;
        }
            res.status(200).json({message:"updated successful",success:true})
            return;

    }catch(err){
        console.log(err);
        
    }
    
}



////////////////////////////////////////////// Delete Product ///////////////////////////////////////////////


export async function deleteProduct(req:Request<UseId>,res:Response):Promise<void>{
    try{
        const id=req.params.id

        const deletee = await Products.findByIdAndDelete(id)
        if(!deletee){
            res.status(404).json({message:"something error",success:false}) 
            return; 
        }
            res.status(200).json({message:"product deleted",success:true})
            return;

    }catch(err){
        console.log(err);
        
    }


}