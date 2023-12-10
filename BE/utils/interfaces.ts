import mongoose from "mongoose"

export interface iAuthData extends mongoose.Document {
    userName: string;
    email: string;
    password: string;
    phoneNumber: number;
    BVN: number;
    verified:boolean
    creditWallet:number,
    loan:number
    cart:Array<{}>,
    history:Array<{}>,
    token:string
  }