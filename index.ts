// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const cors = require("cors");
import express  , {Request , Response}from "express"
import dotenv from "dotenv";
import mongoose from "mongoose"
import cors from "cors"
import userRoute from "./routes/user.route"
import categoryRoute from "./routes/category.route";


const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const port : string = process.env.PORT || "";
const MONGO_DB_URL : string = process.env.MONGO_DB_URI || ""
// console.log(MONGO_DB_URL);

mongoose
  .connect(MONGO_DB_URL)
  .then(() => console.log(`Database connected`))
  .catch((err) => console.log(err));

app.use("/api" , userRoute)
app.use("/api" , categoryRoute)

app.listen(port, () => {
  console.log(`Server is running on ${port}.`);
});
