"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.getById = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const getById = async (id) => {
    const product = await Product_1.default.findByPk(id);
    if (!product) {
        throw new Error("not found");
    }
    return product;
};
exports.getById = getById;
const getAll = async () => {
    const products = await Product_1.default.findAll();
    return products;
};
exports.getAll = getAll;
//# sourceMappingURL=products.js.map