import {OrderDetails} from "../models/Order";

export const getAll= async () => {
  const ordersDetails = await OrderDetails.findAll();
  if (!ordersDetails) {
    throw new Error(`Order Details not found`);
  }
  return ordersDetails;
};


export const getById = async (orderId: number) => {
  const orderDetails = await OrderDetails.findAll({
    where:{order_id:orderId}}
  );
  if (!orderDetails) {
    throw new Error(`Order Details with orderId:${orderId} not found`);
  }
  return orderDetails;
};
