"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = exports.getAll = void 0;
const opinionsDal = __importStar(require("../../db/dal/opinions"));
const productsDal = __importStar(require("../../db/dal/products"));
const categoriesDal = __importStar(require("../../db/dal/categories"));
const imagesDal = __importStar(require("../../db/dal/images"));
const getAll = async () => {
    const products = await productsDal.getAll();
    const result = await Promise.all(products.map(async (product) => {
        return await getDto(product);
    }));
    return result;
};
exports.getAll = getAll;
const getById = async (id) => {
    const product = await productsDal.getById(id);
    const productDto = await getDto(product);
    return productDto;
};
exports.getById = getById;
const getDto = async (product) => {
    const opinions = await opinionsDal.getByProductId(product.product_id);
    const images = await imagesDal.getByProductId(product.product_id);
    const category = await categoriesDal.getById(product.category_id);
    return toProductDto(product, opinions, images, category);
};
const toProductDto = (product, opinions, images, category) => {
    const opinionsDto = opinions.map((v) => {
        return {
            opinionId: v.opinion_id,
            customerId: v.customer_id,
            content: v.content,
            stars: v.stars,
        };
    });
    const imagesDto = images.map((v) => {
        return {
            imageId: v.image_id,
            url: v.url,
            fileName: v.file_name,
        };
    });
    return {
        productId: product.product_id,
        price: product.price,
        name: product.name,
        shortDescription: product.short_description,
        availableQuantity: product.available_quantity,
        category: {
            categoryId: category.category_id,
            name: category.name,
        },
        opinons: opinionsDto,
        images: imagesDto,
    };
};
//# sourceMappingURL=products.js.map