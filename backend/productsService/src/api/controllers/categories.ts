
import * as categoriesDal from "../../db/dal/categories";

export const getAll = async () => {
  let categories;
  try {
    categories = await categoriesDal.getAll();
  } catch (error) {
    console.error("Error occured in categories controller:", error);
  }
  return categories;
};
export const getByName = async (name: string) => {
  const formattedName: string =
    name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
  let category;
  try {
    category = await categoriesDal.getByName(formattedName);
  } catch (error) {
    console.error("Error occured in categories controller:", error);
  }

  return category;
};
