import Category from "../models/Category";

export const getById = async (id: number) => {
  const category = await Category.findByPk(id);
  if (!category) {
    throw new Error(`Category with id:${id} not found`);
  }
  return category;
};
