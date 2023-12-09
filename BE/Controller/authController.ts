import bcrypt from "bcrypt"
import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import authModel from "../model/authModel"
import { HTTP } from "../error/mainError"

export const registerUser = async(req:Request,res:Response):Promise<Response>=>{
try {
    const {userName,email,password,phoneNumber,BVN} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password,salt)
    const token = jwt.sign({hashed},"secretToken")
    const NGN = ("+234")
    const newUser = await authModel.create({
        userName,
        email,
        password:hashed,
        phoneNumber:NGN.concat(phoneNumber),
        BVN,
        token
    }) 

    return res.status(HTTP.CREATED).json({
        message:"User created",
        data:newUser
    })
} catch (error:any) {
    return res.status(HTTP.BAD_REQUEST).json({
        message:"Couldn't create user",
        data: error.message
    })
}
}