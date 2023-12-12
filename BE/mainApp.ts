import cors from "cors";
import { Application, NextFunction, Request, Response, json } from "express";
import helmet from "helmet";
import morgan from "morgan";
import auth from "./router/authRouter";
import products from "./router/productsRouter";
import carts from "./router/cartRouter";
import wallet from "./router/walletRouter";
import { HTTP, mainError } from "./error/mainError";
import { errorHandling } from "./error/errorHandling";

export const appConfig = (app: Application) => {
  app.use(json()).use(cors()).use(helmet()).use(morgan("dev"));
  app.set("view engine", "ejs");
  app.use("/api", auth, products, carts, wallet);

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "Food Flex APIs 🍑🍍🍇",
      });
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  });

  app
    .all("*", (req: Request, res: Response, next: NextFunction) => {
      new mainError({
        name: `This is an API Route Error`,
        status: HTTP.BAD,
        success: false,
        message: `This is happening as a result of invalid route being this: ${req.originalUrl}`,
      });
    })
    .use(errorHandling);
};
