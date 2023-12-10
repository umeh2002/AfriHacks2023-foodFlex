import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import authModel from "../model/authModel";

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
