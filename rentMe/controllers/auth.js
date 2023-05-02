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
exports.logIn = exports.signUp = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const http_errors_1 = __importDefault(require("http-errors"));
const bcrypt_1 = __importDefault(require("bcrypt"));
//CREATE AN USER
const signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, phone, password: rawPassword, rePassword, } = req.body;
    try {
        if (!firstName)
            throw (0, http_errors_1.default)(400, "Хэрэглэгчийн нэр заавал шаардлагатай.");
        if (!lastName)
            throw (0, http_errors_1.default)(400, "Хэрэглэгчийн оврг заавал шаардлагатай.");
        if (!email)
            throw (0, http_errors_1.default)(400, "Хэрэглэгчийн и-мэйл заавал шаардлагатай.");
        if (!phone)
            throw (0, http_errors_1.default)(400, "Хэрэглэгчийн утас заавал шаардлагатай.");
        if (!rawPassword)
            throw (0, http_errors_1.default)(400, "Хэрэглэгчийн нууц үг заавал шаардлагатай.");
        if (rawPassword !== rePassword)
            throw (0, http_errors_1.default)(400, "Нууц үг таарахгүй байна.");
        const passwordChecker = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
        if (!passwordChecker.test(rawPassword))
            throw (0, http_errors_1.default)(400, "Нууц үг шаардлага хангахгүй байна.");
        const emailChecker = new RegExp(/[^\s@]+@[^\s@]+\.[^\s@]+/gi, "gm");
        if (!emailChecker.test(email))
            throw (0, http_errors_1.default)(400, "И-мэйл хаяг буруу байна.");
        const phoneChecker = new RegExp("^[89]\\d{7}$");
        if (!phoneChecker.test(phone))
            throw (0, http_errors_1.default)(400, "Утасны дугаар буруу байна.");
        const isEmailExist = yield user_model_1.default.findOne({ email });
        if (isEmailExist)
            throw (0, http_errors_1.default)(400, `${email} хаягтай хэрэглэгч бүртгэлтэй байна.`);
        const isPhoneExist = yield user_model_1.default.findOne({ phone });
        if (isPhoneExist)
            throw (0, http_errors_1.default)(400, `${phone} утастай хэрэглэгч бүртгэлтэй байна.`);
        const hashedPassword = yield bcrypt_1.default.hash(rawPassword, 12);
        const newUser = yield user_model_1.default.create({
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword,
        });
        res.status(201).json({ message: "Амжилттай бүртгэгдлээ" });
    }
    catch (error) {
        next(error);
    }
});
exports.signUp = signUp;
const logIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        if (!email)
            throw (0, http_errors_1.default)(400, "Нэвтрэхийн тулд и-мэйл заавал шаардлагатай.");
        if (!password)
            throw (0, http_errors_1.default)(400, "Нэвтрэхийн тулд нууц үг заавал шаардлагатай.");
        res.status(200).json({ message: "Амжилттай нэвтэрлээ" });
    }
    catch (error) {
        next(error);
    }
});
exports.logIn = logIn;
