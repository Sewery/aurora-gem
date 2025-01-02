"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("./products");
const router = (0, express_1.Router)();
router.use("/products", products_1.productsRouter);
exports.default = router;
//# sourceMappingURL=index.js.map