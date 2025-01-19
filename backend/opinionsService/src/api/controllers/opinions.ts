import * as opinionsDal from "../../db/dal/opinions";
import * as customerDal from "../../db/dal/customers";
import OpinionDto from "../dto/OpinionDto"
import Customer from "../../db/models/Customer";
export const getByProductId = async (id: number) => {
  let opinionsDto;
  try {
    const opinions = await opinionsDal.getByProductId(id);
    opinionsDto = await Promise.all(
      opinions.map(async (v) => {
        const customer: Customer | null = await customerDal.getById(v.customer_id);
        if (!customer) {
          console.warn(`Customer not found for ID: ${v.customer_id}`);
          return null;
        }
        return {
          opinionId: v.opinion_id ?? null,
          customerName: `${customer.firstname} ${customer.lastname}`,
          content: v.content,
          stars: v.stars,
          productId: v.product_id,
        };
      })
    );
  } catch (error) {
    console.error("Error occured in opinion controller:", error);
  }
  return opinionsDto;
};
export const getByCustomerId = async (id: number) => {
  let opinionsDto;
  try {
    const customer: Customer = await customerDal.getById(id);
    const opinions = await opinionsDal.getByCustomerId(id);
    opinionsDto = opinions.map((v) => {
      return {
        opinionId: v.opinion_id,
        customerName: `${customer.firstname} ${customer.lastname}`,
        content: v.content,
        stars: v.stars,
        productId: v.product_id,
      };
    });
  } catch (error) {
    console.error("Error occured in opinion controller:", error);
  }
  return opinionsDto;
};
export const getById = async (id: number) => {
  let opinionDto;
  try {
    const opinion = await opinionsDal.getById(id);
    const customer: Customer = await customerDal.getById(opinion.customer_id);
    opinionDto = {
      opinionId: opinion.opinion_id,
      customerId: opinion.customer_id,
      customerName: `${customer.firstname} ${customer.lastname}`,
      content: opinion.content,
      stars: opinion.stars,
      productId: opinion.product_id,
    };
  } catch (error) {
    console.error("Error occured in opinion controller:", error);
  }
  return opinionDto;
};
export const addOpinion = async (requestDto: OpinionDto,customerId:number) => {
  console.log(requestDto)
  let result
  try {
    result = await opinionsDal.addOpinion(requestDto,customerId);
  } catch (error) {
    console.error("Error occured in opinion controller:", error);
  }
  return result;
};
export const updateOpinion = async (requestDto: OpinionDto) => {
  let result
  try {
    result = opinionsDal.updateOpinion(requestDto);
  } catch (error) {
    console.error("Error occured in opinion controller:", error);
  }
  return result
};
export const deleteOpinion = async (id: number) => {
  try {
    opinionsDal.deleteOpinion(id);
  } catch (error) {
    console.error("Error occured in opinion controller:", error);
  }
};