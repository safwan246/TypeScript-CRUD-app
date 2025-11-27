import {Document, model, Schema} from "mongoose";

export interface Todo extends Document{
    ProductName?:string;
    Description?:string;
    Price?:number;
    Quantity?:number;


}

const TodoSchema = new Schema<Todo>(
    {
        ProductName:{
            type:String,
            required:true
        },
        Description:{
            type:String,
            required:true,

        },
        Price:{
            type:Number,
            requires:true,
            
        },
        Quantity:{
            type:Number,
            required:true,
        }

    },
    {timestamps:true}
);
export const Products =model<Todo>("Products",TodoSchema)