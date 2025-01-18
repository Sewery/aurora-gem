import OrderDetailsDto from "./OrderDetailsDto";

export default interface OrderDto {
    orderId:number,
    orderDate:string,
    ordersDetails:OrderDetailsDto[]
    totalPrice:number
    shipment:number,
  }