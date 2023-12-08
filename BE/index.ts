import express, { Application } from "express";
import env from "dotenv";
import { mainApp } from "./mainApp";

env.config();

const app: Application = express();
mainApp(app);

const realPort = parseInt(process.env.PORT!);
const port: number = realPort;

const server = app.listen(process.env.PORT || port, () => {
  console.log("server listening on port", port);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("server is shutting down due to unhandle rejection", reason);
});

process.on("uncaughtException", (error: any) => {
  console.log("server is shutting down due to uncaught exception", error);

  server.close(() => {
    process.exit(1);
  });
});
