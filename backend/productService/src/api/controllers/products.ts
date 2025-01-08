import * as opinionsDal from "../../db/dal/opinions";
import * as productsDal from "../../db/dal/products";
import * as categoriesDal from "../../db/dal/categories";
import * as imagesDal from "../../db/dal/images";
import * as customerDal from "../../db/dal/customers";
import ProductDto from "../dto/ProductDto";
import Opinion from "../../db/models/Opinion";
import Image from "../../db/models/Image";
import Product from "src/db/models/Product";
import Category from "src/db/models/Category";
import Customer from "src/db/models/Customer";
export const getAll = async () => {
  let productsDto;
  try {
    const products = await productsDal.getAll();
    productsDto = await Promise.all(
      products.map(async (product) => {
        return await getDto(product);
      })
    );
  } catch (error) {
    console.error("Error occured in product controller:", error);
  }
  return productsDto;
};
export const getById = async (id: number) => {
  let productDto;
  try {
    const product = await productsDal.getById(id);
    productDto = await getDto(product);
  } catch (error) {
    console.error("Error occured in product controller:", error);
  }
  return productDto;
};
export const getByCategoryId = async (categoryId: number) => {
  let productsDto;
  try {
    const products = await productsDal.getByCategoryId(categoryId);
    productsDto = await Promise.all(
      products.map(async (product) => {
        return await getDto(product);
      })
    );
  } catch (error) {
    console.error("Error occured in product controller:", error);
  }
  return productsDto;
};
export const getByCategoryName = async (categoryName: string) => {
  let productsDto;
  try {
    const category = await categoriesDal.getByName(categoryName);
    const products = await productsDal.getByCategoryId(category.category_id);
    productsDto = await Promise.all(
      products.map(async (product) => {
        return await getDto(product);
      })
    );
  } catch (error) {
    console.error("Error occured in product controller:", error);
  }
  return productsDto;
};
const getDto = async (product: Product) => {
  const opinions = await opinionsDal.getByProductId(product.product_id);
  const images = await imagesDal.getByProductId(product.product_id);
  const category = await categoriesDal.getById(product.category_id);
  const productDto = await toProductDto(product, opinions, images, category);
  return productDto;
};
const toProductDto = async (
  product: Product,
  opinions: Opinion[],
  images: Image[],
  category: Category
): Promise<ProductDto> => {
  const opinionsDto = await Promise.all(
    opinions.map(async (v) => {
      const customer: Customer = await customerDal.getById(v.customer_id);
      return {
        opinionId: v.opinion_id,
        customerId: v.customer_id,
        customerName: `${customer.firstname} ${customer.lastname}`,
        content: v.content,
        stars: v.stars,
      };
    })
  );
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
