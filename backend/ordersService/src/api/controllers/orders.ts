import * as orderDal from "../../db/dal/order";
import { Order} from "../../db/models/Order";
import OrderDto from "../dto/OrderDto";
import * as ordersController from "./ordersDetails";
export const getByCustomerId = async (id: number) => {
  const orders:Order[] = await orderDal.getByCustomerId(id);
  const ordersCustomer: OrderDto[] = await Promise.all(
    orders.map(async (ord:Order) => {
      const [ordersDetails, totalPrice] = await ordersController.getByOrderId(ord.order_id);
      return {
        orderId: ord.order_id,
        orderDate: ord.order_date.toDateString(),
        ordersDetails: ordersDetails,
        totalPrice: totalPrice,
        shipment: ord.shipment,
      };
    })
  );
  return {
    customerId: id,
    orders: ordersCustomer,
  };
};
export const getByOrderId = async (id: number) => {
    const order:Order = await orderDal.getById(id);
    const [ordersDetails, totalPrice] = await ordersController.getByOrderId(order.order_id);
    return {
      customerId: id,
      order: {
        orderId: order.order_id,
        orderDate: order.order_date.toDateString(),
        ordersDetails: ordersDetails,
        totalPrice: totalPrice,
        shipment: order.shipment,
      }
    };
  };
