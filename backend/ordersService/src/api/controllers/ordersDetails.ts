import * as orderDetailsDal from "../../db/dal/orderDetails";
import OrderDetailsDto from "../dto/OrderDetailsDto";
export const getByOrderId = async (orderId: number):Promise<[OrderDetailsDto[], number]> => {
    const ordersDetails = await orderDetailsDal.getById(orderId);
    let totalPrice:number = 0
    const ordersDetailsDto = ordersDetails.map((v)=>{
        totalPrice+=v.price
        return {
            productId:v.product_id,
            quantity:v.quantity,
            price:v.price,
        }
    })
    return [ordersDetailsDto,totalPrice];
  };