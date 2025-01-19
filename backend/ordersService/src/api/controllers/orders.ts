import * as orderDal from "../../db/dal/order";
import { Order} from "../../db/models/Order";
import OrderDto from "../dto/OrderDto";
import * as ordersController from "./ordersDetails";
import OrderedProductsReq  from "../dto/OrderedProductsReq"
export const getByCustomerId = async (id: number):Promise<OrderDto[]> => {
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
  return ordersCustomer;
};
export const getByOrderId = async (id: number):Promise<OrderDto> => {
    const order:Order = await orderDal.getById(id);
    const [ordersDetails, totalPrice] = await ordersController.getByOrderId(order.order_id);
    return{
        orderId: order.order_id,
        orderDate: order.order_date.toDateString(),
        ordersDetails: ordersDetails,
        totalPrice: totalPrice,
        shipment: order.shipment,
      }
  };

  export const postOrder =async (req: OrderedProductsReq[], id: number)=> {
    orderDal.addOrderWithDetails(id,20,req)
    console.log(req)
  }
