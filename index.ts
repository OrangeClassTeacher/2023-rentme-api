// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const cors = require("cors");
import express  , {Request , Response}from "express"
import dotenv from "dotenv";
import mongoose from "mongoose"
import cors from "cors"
import userRoute from "./routes/user.route"


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port : string = process.env.PORT || "";
const MONGO_DB_URL : string = process.env.MONGO_DB_URL || ""
// console.log(MONGO_DB_URL);

mongoose
  .connect(MONGO_DB_URL)
  .then(() => console.log(`Database connected`))
  .catch((err) => console.log(err));

app.use("/api" , userRoute)

app.listen(port, () => {
  console.log(`Server is running on ${port}.`);
});
