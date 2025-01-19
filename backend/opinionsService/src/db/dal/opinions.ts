import OpinionDto from "src/api/dto/OpinionDto";
import Opinion from "../models/Opinion";
export const getByProductId = async (id: number) => {
  const opinions = await Opinion.findAll({
    where: {
      product_id: id,
    },
  });
  if(!opinions)
    throw Error(`Opinions with product id ${id} not found`)
  return opinions;
};
export const getByCustomerId = async (id: number) => {
  const opinions = await Opinion.findAll({
    where: {
      customer_id: id,
    },
  });
  if(!opinions)
    throw Error(`Opinions with customer id ${id} not found`)
  return opinions;
};
export const getById = async (id: number) => {
  const opinion = await Opinion.findByPk(id)
  if(!opinion)
    throw Error(`Opinion with id ${id} not found`)
  return opinion;
};
export const addOpinion = async (reqDto:OpinionDto,customerId:number) =>{
  const opinion = await Opinion.create({
    customer_id: customerId,
    content: reqDto.content,
    stars: reqDto.stars,
    product_id: reqDto.productId,
  });
  return opinion;
};
export const updateOpinion = async (reqDto:OpinionDto) => {
  if(!reqDto.opinionId)
    throw Error(`Opinion id is null`)
  const opinion: Opinion|null =await getById(reqDto.opinionId)
  if(!opinion)
    throw Error(`Opinion with id ${reqDto.opinionId} not found`)
  await Opinion.update({
    stars: reqDto.stars,
    content: reqDto.content,
  },
  {
    where: {
      opinion_id: reqDto.opinionId, // Specify the condition to find the opinion
    },
  });
  return opinion;
};
export const deleteOpinion = async (id:number) => {
  await Opinion.destroy({
    where: {
      opinion_id: id,
    },
  });
  return;
};