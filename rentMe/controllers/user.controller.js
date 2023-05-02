"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.createUser = exports.updateUser = exports.deleteUser = exports.getOne = exports.getAll = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_model_1.default.find({});
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const result = yield user_model_1.default.findById({ _id });
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getOne = getOne;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newObj = req.body;
    try {
        if (newObj) {
            const hashedPass = yield bcrypt_1.default.hash(newObj.password, 10);
            const newObj2 = Object.assign(Object.assign({}, newObj), { password: hashedPass });
            const result = yield user_model_1.default.create(newObj2);
            res.json({ status: true, result });
        }
        else {
            console.log("err");
        }
    }
    catch (err) {
        res.json({ status: false, err });
    }
});
exports.createUser = createUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res
            .status(500)
            .send({ status: false, message: "Medeelelee buren oruulna uu" });
        return;
    }
    const user = yield user_model_1.default.findOne({ email });
    if (user && (yield bcrypt_1.default.compare(password, user.password))) {
        const token1 = process.env.TOKEN_SECRET_KEY || "";
        const token = jsonwebtoken_1.default.sign({ user: user }, token1, {
            expiresIn: "24h",
        });
        res
            .status(200)
            .send({ status: true, data: user, message: "Success", token });
        return;
    }
    else {
        res.status(400).send({
            status: false,
            message: "user oldsongui ee, nuuts ug taarahgui bna",
        });
        return;
    }
});
exports.login = login;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const result = yield user_model_1.default.findByIdAndUpdate({ _id }, req.body);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const result = yield user_model_1.default.findByIdAndDelete({ _id });
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.deleteUser = deleteUser;
