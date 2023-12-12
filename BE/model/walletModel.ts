import mongoose, { model } from "mongoose";
import { iWalletData } from "../utils/interfaces";

const walletModel = new mongoose.Schema<iWalletData>(
  {
    email: {
      type: String,
    },
    amount: {
      type: Number,
    },
    userID: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iWalletData>("wallets", walletModel);
