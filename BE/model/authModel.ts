import mongoose from "mongoose";

interface iAuth {
  userName: string;
  email: string;
  password: string;
  phoneNumber: number;
  BVN: number;
}

export interface iAuthData extends iAuth, mongoose.Document {}
