import Product from "../models/Product";

export const getById = async (id: number) => {
  const product = await Product.findByPk(id);
  if (!product) {
    throw new Error("not found");
  }
  return product;
};
export const getAll = async () => {
  const products = await Product.findAll();
  return products;
};
export const getByCategoryId = async (id: number) => {
  const products = await Product.findAll({ where: { category_id: id } });
  if (!products) {
    throw new Error(`Products from category id: ${id} not found`);
  }
  return products;
};
