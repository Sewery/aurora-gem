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
export const updateQuantity = async (quantity:number,productId:number) =>{
  const product = await getById(productId)
  product.available_quantity =   product.available_quantity -quantity;
  await product.save();
}