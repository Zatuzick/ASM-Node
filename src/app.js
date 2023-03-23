import express from "express";
import productRouter from "../src/router/product";
import mongoose from "mongoose";
const app = express();

app.use(express.json());

app.use("/api", productRouter);

mongoose.connect("mongodb://localhost:27017/ASM_Node");


export const viteNodeApp = app;