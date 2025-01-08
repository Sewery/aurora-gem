import {Order} from "../models/Order";

export const getAll= async () => {
  const orders = await Order.findAll();
  if (!orders) {
    throw new Error(`Orders not found`);
  }
  return orders;
};


export const getById = async (id: number) => {
  const order = await Order.findByPk(id);
  if (!order) {
    throw new Error(`Order with id:${id} not found`);
  }
  return order;
};


export const getByCustomerId = async (id: number) => {
    const order = await Order.findAll({where: {
        customer_id: id
    }});
    if (!order) {
      throw new Error(`Orders with customers id:${id} not found`);
    }
    return order;
  };