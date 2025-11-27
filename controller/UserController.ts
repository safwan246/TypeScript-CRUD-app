import { Products } from "../model/TodoSchema.js";
import type { Request,Response } from "express";


///////////////////// get Todo //////////////////////////////////

export async function getProduct(req:Request,res:Response):Promise<void> {
    try{
        const showTodo = await Products.find({})
        if(!showTodo){
            res.status(404).json({message:"something wrong",success:true})
        }
            res.status(200).json({message:showTodo,success:true })
       
        } catch(err){
            console.log(err);
            
    }
    
}

/////////////////// Post Todo //////////////////////////////////////

export async function postProduct(req:Request,res:Response): Promise<void> {
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
        
        

    }catch(err){
        console.log(err);
        res.status(404).json({message:'something error',success:false})
        
    }
}

////////////////////////// Update Todo /////////////////////////////////


 interface UseParams {
            id : string;
        }

export async function putProduct(req:Request<UseParams>,res:Response):Promise<void> {
    try{
     
        const id = req.params.id

        const newUpdate = await Products.findByIdAndUpdate(id,req.body)
        if(!newUpdate){
            res.status(404).json({message:"something error",success:false})
        }
            res.status(200).json({message:newUpdate,success:true})

    }catch(err){
        console.log(err);
        
    }
    
}



////////////////////////////////////////////// Delete Product ///////////////////////////////////////////////


export async function deleteProduct(req:Request<UseParams>,res:Response):Promise<void>{
    try{
        const id=req.params.id

        const deletee = await Products.findByIdAndDelete(id)
        if(!deletee){
           res.status(404).json({message:"something error",success:false})  
        }
           res.status(200).json({message:"product deleted",success:true})

    }catch(err){
        console.log(err);
        
    }


}