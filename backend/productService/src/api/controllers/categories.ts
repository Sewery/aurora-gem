
import * as categoriesDal from "../../db/dal/categories";

export const getAll = async () => {
    const categories = await categoriesDal.getAll();
    return categories;
  };