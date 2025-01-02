"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByProductId = void 0;
const Image_1 = __importDefault(require("../models/Image"));
const getByProductId = async (id) => {
    const products = await Image_1.default.findAll({
        where: {
            product_id: id,
        },
    });
    return products;
};
exports.getByProductId = getByProductId;
//# sourceMappingURL=images.js.map