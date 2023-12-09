import { NextFunction, Request, Response } from "express";
import { HTTP, mainError } from "./mainError";

const errorPrep = (res: Response, err: mainError) => {
  res.status(HTTP.BAD_REQUEST).json({
    name: err.name,
    message: err.message,
    status: err.status,
    success: err.success,
    stack: err.stack,
    err,
  });
};

export const errorHandler = (
  res: Response,
  err: mainError
) => {
  errorPrep(res, err);
};
