import { NextFunction, Request, Response } from "express"
import joi from "joi"
import { HTTP } from "../error/mainError"

export default (Schema:joi.ObjectSchema<any>)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        const {error} = Schema.validate(req.body)
        if(error){
            return res.status(HTTP.BAD_REQUEST).json({
                message:"Validator error",
                data:error.message
            })
        }else{
            next()
        }
    }
}