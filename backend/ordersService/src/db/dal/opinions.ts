import Opinion from "../models/Opinion";
export const getByProductId = async (id: number) => {
  const comments = await Opinion.findAll({
    where: {
      product_id: id,
    },
  });
  return comments;
};
