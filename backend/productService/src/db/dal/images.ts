import Images from "../models/Image";
export const getByProductId = async (id: number) => {
  const products = await Images.findAll({
    where: {
      product_id: id,
    },
  });
  return products;
};
