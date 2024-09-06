import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import { corsMiddleware } from "./cors.middleware.js";
import { sessionMiddleware } from "./session.middleware.js";

export const initMiddleware = (app) => {
  app.use(cors(corsMiddleware()));
  app.use(sessionMiddleware);
  app.use(express.json());
  app.use(cookieParser());
  app.use(morgan("dev"));
};
