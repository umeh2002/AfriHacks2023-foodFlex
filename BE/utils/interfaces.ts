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
export interface iAuthData extends iAuth, Document {}
export interface iProductsData extends iProducts, Document {}
