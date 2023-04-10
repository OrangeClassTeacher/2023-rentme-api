"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const cors = require("cors");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
dotenv_1.default.config();
const port = process.env.PORT || "";
const MONGO_DB_URL = process.env.MONGO_DB_URL || "";
// console.log(MONGO_DB_URL);
mongoose_1.default
    .connect(MONGO_DB_URL)
    .then(() => console.log(`Database connected`))
    .catch((err) => console.log(err));
app.use("/api", user_route_1.default);
app.listen(port, () => {
    console.log(`Server is running on ${port}.`);
});
