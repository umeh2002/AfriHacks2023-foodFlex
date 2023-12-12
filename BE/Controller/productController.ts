import { Request, Response } from "express";
import productsModel from "../model/productsModel";
import { uploadStream } from "../utils/uploadStream";

export const createProducts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title, inStock, cost, description } = req.body;
    const { public_id, secure_url }: any = await uploadStream(req);
    const products = await productsModel.create({
      title,
      inStock,
      cost,
      description,
      image: secure_url,
      imageID: public_id,
    });

    return res.status(201).json({
      message: "Created Products",
      data: products,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const viewAllProducts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const products = await productsModel.find();

    return res.status(200).json({
      message: "View All Products",
      data: products,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const viewOneProducts = async (req: Request, res: Response) => {
  try {
    const { productsID } = req.params;

    const products = await productsModel.findById(productsID);

    return res.status(200).json({
      message: "View One Product",
      data: products,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProducts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productsID } = req.params;

    const products = await productsModel.findByIdAndDelete(productsID);

    return res.status(202).json({
      message: "Deleted Products",
      data: products,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
