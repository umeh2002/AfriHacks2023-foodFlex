import cors from "cors";
import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";

export const mainApp = (app: Application) => {
  app.use(express.json());
  app.use(cors());
  app.set("view engine", "ejs");
  app.use(morgan("dev"));
  app.use(helmet());

  app.use("/", async (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "welcome to foodFlex APIs!!",
      });
    } catch (error: any) {
      return res.status(404).json({
        message: "error",
        data: error.message,
      });
    }
  });
};
