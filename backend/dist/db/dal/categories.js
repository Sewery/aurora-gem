"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = void 0;
const Category_1 = __importDefault(require("../models/Category"));
const getById = async (id) => {
    const category = await Category_1.default.findByPk(id);
    if (!category) {
        throw new Error(`Category with id:${id} not found`);
    }
    return category;
};
exports.getById = getById;
//# sourceMappingURL=categories.js.map