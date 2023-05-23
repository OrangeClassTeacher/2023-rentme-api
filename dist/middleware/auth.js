"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
//hui
dotenv_1.default.config();
const key1 = process.env.TOKEN_SECRET_KEY || "";
const auth = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    console.log("Hi middleware");
    if (!token) {
        return res.status(403).json({
            success: false,
            message: "Хэрэглэгчийн token оруулах шаардлагатай.",
        });
    }
    console.log({ key1 });
    try {
        const decoded = jsonwebtoken_1.default.verify(token, key1);
        console.log(decoded);
        // req.user = decoded;
    }
    catch (err) {
        console.log(err);
        return res.status(401).json({
            success: false,
            message: "Хэрэглэгчийн token буруу, эсвэл идэвхигүй байна.",
        });
    }
    return next();
};
exports.auth = auth;
