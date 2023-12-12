import { Document } from "mongoose";

interface iAuth {
  userName: string;
  email: string;
  password: string;
  phoneNo: string;
  BVN: string;
  token: string;
  verified: boolean;
  cart: {}[];
}

interface iProducts {
  title: string;
  inStock: number;
  cost: number;
  description: string;
  image: string;
  imageID: string;
}

<<<<<<< HEAD
interface iCart {
  title: string;
  inStock: number;
  cost: number;
  description: string;
  image: string;
  userID: string;
  imageID: string;
}

export interface iCartData extends iCart, Document {}
=======
export interface iWallet {
  amount : number;
  email : string;
  userID : string
}

export interface iAuthData extends iAuth, Document {}
>>>>>>> 77617f9e03d3b1f9e3e2eb6199e6861b87086fef
export interface iAuthData extends iAuth, Document {}
export interface iProductsData extends iProducts, Document {}
export interface iWalletData extends iWallet, Document {}
