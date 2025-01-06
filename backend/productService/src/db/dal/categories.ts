import Category from "../models/Category";

export const getAll= async () => {
  const categories = await Category.findAll();
  if (!categories) {
    throw new Error(`Categories not found`);
  }
  return categories;
};


export const getById = async (id: number) => {
  const category = await Category.findByPk(id);
  if (!category) {
    throw new Error(`Category with id:${id} not found`);
  }
  return category;
};
