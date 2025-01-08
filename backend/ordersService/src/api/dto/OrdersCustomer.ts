import OrderDto from "./OrderDto";

export default interface OrdersCustomer {
    customerId:number,
    orders:OrderDto[]
}
export default interface OrderCustomer {
    customerId:number,
    order:OrderDto
}