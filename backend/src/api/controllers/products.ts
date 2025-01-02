import * as opinionsDal from "../../db/dal/opinions";
import * as productsDal from "../../db/dal/products";
import * as categoriesDal from "../../db/dal/categories";
import * as imagesDal from "../../db/dal/images";
import ProductDto from "../dto/ProductDto";
import Opinion from "../../db/models/Opinion";
import Image from "../../db/models/Image";
import Product from "src/db/models/Product";
import Category from "src/db/models/Category";
export const getAll = async () => {
  const products = await productsDal.getAll();
  const result = await Promise.all(
    products.map(async (product) => {
      return await getDto(product);
    })
  );
  return result;
};
export const getById = async (id: number) => {
  const product = await productsDal.getById(id);
  const productDto = await getDto(product);
  return productDto;
};
const getDto = async (product: Product) => {
  const opinions = await opinionsDal.getByProductId(product.product_id);
  const images = await imagesDal.getByProductId(product.product_id);
  const category = await categoriesDal.getById(product.category_id);
  return toProductDto(product, opinions, images, category);
};
const toProductDto = (
  product: Product,
  opinions: Opinion[],
  images: Image[],
  category: Category
): ProductDto => {
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
