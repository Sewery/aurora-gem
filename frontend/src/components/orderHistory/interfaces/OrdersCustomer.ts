import OrderDto from "./OrderDto";

export default interface OrdersCustomer {
    customerId:number,
    orders:OrderDto[]
}