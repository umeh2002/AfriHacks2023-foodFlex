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
    min: 11,
    max: 11,
  },
  BVN: {
    type: Number,
    min: 11,
    max: 11,
  },
});

export default mongoose.model<iAuthData>("auths", authModel);
