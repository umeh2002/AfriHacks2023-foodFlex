import mongoose, { Schema } from "mongoose";
import { iAuthData } from "../utils/interfaces";

export const authModel: Schema<iAuthData> = new mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    unique:true,
    // minlength: 11,
    maxlength: 11,
  },
  BVN: {
    type: Number,
    unique:true,
    minlength: 11,
    maxlength: 11,
  },
  verified:{
    type:Boolean,
    default:false
  }
},{timestamps:true});

export default mongoose.model<iAuthData>("auths", authModel);
