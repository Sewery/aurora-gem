"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByProductId = void 0;
const Opinion_1 = __importDefault(require("../models/Opinion"));
const getByProductId = async (id) => {
    const comments = await Opinion_1.default.findAll({
        where: {
            product_id: id,
        },
    });
    return comments;
};
exports.getByProductId = getByProductId;
//# sourceMappingURL=opinions.js.map