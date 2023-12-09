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
  },
  token:{
    type:String,
  },
  loan:{
    type:Number
  },
  creditWallet:{
    type:Number
  },
  cart:{
    type:[String]
  },
  history:[{
    type:mongoose.Types.ObjectId,
    rref:"history"
  }]
},{timestamps:true});

export default mongoose.model<iAuthData>("auths", authModel);
