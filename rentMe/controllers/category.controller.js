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
exports.createCategory = exports.updateCategory = exports.deleteCategory = exports.getOne = exports.getAll = void 0;
const category_1 = __importDefault(require("../models/category"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_1.default.find({});
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
        const result = yield category_1.default.findById({ _id });
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getOne = getOne;
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newObj = req.body;
    try {
        console.log(req.body);
        if (newObj) {
            const result = yield category_1.default.create(newObj);
            res.json({ status: true, result });
        }
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.createCategory = createCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const result = yield category_1.default.findByIdAndUpdate({ _id }, req.body);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const result = yield category_1.default.findByIdAndDelete({ _id });
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.deleteCategory = deleteCategory;
