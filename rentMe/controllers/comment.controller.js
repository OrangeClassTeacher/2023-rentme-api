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
exports.createComment = exports.updateComment = exports.deleteComment = exports.getOneComment = exports.getAllComment = void 0;
const comment_1 = __importDefault(require("../models/comment"));
const getAllComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { itemId } = req.body;
    try {
        const result = yield comment_1.default.find({
            itemId: { $regex: itemId },
        })
            .sort({ createdAt: 1 })
            .limit(15);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getAllComment = getAllComment;
const getOneComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const result = yield comment_1.default.find({ _id });
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getOneComment = getOneComment;
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newObj = req.body;
    if (!newObj) {
        res.json({ status: false, message: "Medelle oruul" });
    }
    try {
        const result = yield comment_1.default.create(newObj);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.createComment = createComment;
const updateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    if (!_id) {
        res.json({ status: false, message: "Id not found" });
    }
    try {
        const result = yield comment_1.default.findByIdAndUpdate({ _id }, req.body);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.updateComment = updateComment;
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    if (!_id) {
        res.json({ status: false, message: "Id oruul" });
    }
    try {
        const result = yield comment_1.default.findByIdAndDelete({ _id });
        res.json({ status: true, message: "Amjilttai ustgalaa" });
    }
    catch (err) {
        res.json({ status: false, message: "User not found" });
    }
});
exports.deleteComment = deleteComment;
