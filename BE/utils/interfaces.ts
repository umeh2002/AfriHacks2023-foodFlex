import { Document } from "mongoose";

interface iAuth {
  userName: string;
  email: string;
  password: string;
  phoneNo: string;
  BVN: string;
  token: string;
  verified: boolean;
}

export interface iWallet {
  amount : number;
  email : string;
  userID : string
}

export interface iAuthData extends iAuth, Document {}

export interface iWalletData extends iWallet, Document {}
