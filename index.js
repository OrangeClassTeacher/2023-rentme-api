const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on ${port}.`);
});
