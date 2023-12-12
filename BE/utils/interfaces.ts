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

interface iProducts {
  title: string;
  inStock: number;
  cost: number;
  description: string;
  image: string;
  imageID: string;
}

export interface iWallet {
  amount : number;
  email : string;
  userID : string
}

export interface iAuthData extends iAuth, Document {}
export interface iAuthData extends iAuth, Document {}
export interface iProductsData extends iProducts, Document {}
export interface iWalletData extends iWallet, Document {}
