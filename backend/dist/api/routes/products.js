"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_1 = require("../../api/controllers/products");
exports.productsRouter = (0, express_1.Router)();
exports.productsRouter.get("/", async (_, res) => {
    const result = await (0, products_1.getAll)();
    res.status(200).json({ result });
});
exports.productsRouter.get("/:id", async (req, res) => {
    const productId = parseInt(req.params.id);
    const result = await (0, products_1.getById)(productId);
    res.status(200).json({ result });
});
//# sourceMappingURL=products.js.map