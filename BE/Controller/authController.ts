import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import authModel from "../model/authModel";
import {HTTP} from "../error/mainError"



export const signUserIn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const user = await authModel.findOne({ email });
    if (user) {
      const confirm = await bcrypt.compare(password, user.password);
      if (confirm) {
        if (user.verified && user.token === "") {
          const mainToken = jwt.sign(
            { id: user._id, email: user?.email },
            "realToken"
          );
          return res.status(HTTP.OK).json({
            message: `Welcome back`,
            data: mainToken,
          });
        } else {
          return res.status(HTTP.BAD_REQUEST).json({
            message: "please make sure you are verified",
          });
        }
      } else {
        return res.status(HTTP.BAD_REQUEST).json({
          message: "Incorrect password",
        });
      }
    } else {
      return res.status(HTTP.NOT_FOUND).json({
        message: "Email not found",
      });
    }
  } catch (error: any) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: "Error signing in user",
      data: error.message,
    });
  }
};

export const FindOneUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;
    const findOne = await authModel.findById(userID);
    return res.status(HTTP.OK).json({
      message: "User found successfully",
      data: findOne,
    });
  } catch (error: any) {
    return res.status(HTTP.NOT_FOUND).json({
      message: "Error finding user",
      data: error.message,
    });
  }
};

export const registerUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {userName,email,password,BVN,phoneNumber} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password,salt)
    const token = jwt.sign({hashed},"token")

    const newUser = await authModel.create({
        userName,
        email,
        password:hashed,
        BVN,
        phoneNumber,
        token
    })
    return res.status(HTTP.CREATED).json({
        message:"User has been registered"
    })
  } catch (error: any) {
    return res.status(HTTP.NOT_FOUND).json({
      message: "Error finding user",
      data: error.message,
    });
  }
};

export const FindAllUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const findAll = await authModel.find();
    return res.status(HTTP.OK).json({
      message: "Users found successfully",
      data: findAll,
    });
  } catch (error: any) {
    return res.status(HTTP.NOT_FOUND).json({
      message: "Error finding all user",
      data: error.message,
    });
  }
};
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {userID} = req.params

    const removeUser = await authModel.findByIdAndDelete(userID)
    return res.status(HTTP.OK).json({
      message: "Users found successfully",
      data: removeUser,
    });
  } catch (error: any) {
    return res.status(HTTP.NOT_FOUND).json({
      message: "Error finding all user",
      data: error.message,
    });
  }
};

export const verifyUser = async(req:Request,res:Response):Promise<Response>=>{
    try {
        const {userID} = req.params
        const user = await authModel.findById(userID)
        if(user?.verified === false && user.token !== ""){
            const updateVerify = await authModel.findByIdAndUpdate(
                userID,
                {
                    token:"",
                    verified:true
                },
                {new:true}
            )
            return res.status(HTTP.CREATED).json({
                message: "User has been verified",
                data: updateVerify,
              });
        }else{
            return res.status(HTTP.NOT_FOUND).json({
                message: "Error finding user",
              });
        }
    } catch (error) {
        return res.status(HTTP.NOT_FOUND).json({
            message: "Error verifying user",
          });
    }
}