import { Schema, Types, model } from "mongoose";
import { iAuthData } from "../utils/interfaces";

const authModel = new Schema<iAuthData>(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    BVN: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    verified: {
      default: false,
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default model<iAuthData>("food-flex-auths", authModel);
