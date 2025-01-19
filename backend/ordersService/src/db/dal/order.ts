import OrderedProductsReq from "src/api/dto/OrderedProductsReq";
import {Order, OrderDetails} from "../models/Order";
import {updateQuantity} from "./products"

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
  
export const addOrderWithDetails = async (
    customerId: number,
    shipment: number,
    orderDetails: OrderedProductsReq[]
  ) => {
    try {
       // Validate orderDetails input
    if (!Array.isArray(orderDetails) || orderDetails.length === 0) {
      throw new Error('Invalid or empty orderDetails array');
    }
      // Create a new order with the current date
      const newOrder = await Order.create(
        {
          order_date: new Date(),
          customer_id:customerId,
          shipment,
        },
      );
      const orderDetailsWithOrderId = orderDetails.map((detail) => ({
        order_id: newOrder.order_id,
        product_id: detail.productId,
        quantity: detail.quantity,
        price:detail.price,
      }));
  
      await OrderDetails.bulkCreate(orderDetailsWithOrderId);
  
      await Promise.all(orderDetails.map(async (p) => updateQuantity(p.quantity, p.productId)))
      
      console.log('Order and details added successfully.');
    } catch (error) {
      console.error('Error adding order with details:', error);
    }
  }

