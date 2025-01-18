import { Divider } from "@mui/material";
import OrdersCustomer from "./interfaces/OrdersCustomer";
import OrdersHistoryList from "./OrdersHistoryList";

const orderHistory: OrdersCustomer = {
    customerId: 1,
    orders: [
        {
            orderId: 101,
            orderDate: "2023-12-01",
            ordersDetails: [
                {
                    productId: 1,
                    quantity: 2,
                    price: 50,
                },
                {
                    productId: 2,
                    quantity: 1,
                    price: 100,
                },
            ],
            totalPrice: 200,
            shipment: 10,
        },
        {
            orderId: 102,
            orderDate: "2024-01-15",
            ordersDetails: [
                {
                    productId: 3,
                    quantity: 3,
                    price: 30,
                },
                {
                    productId: 4,
                    quantity: 2,
                    price: 40,
                },
            ],
            totalPrice: 210,
            shipment: 15,
        },
    ],
};
export default function OrderHistory(){
    return <div className = "m-2 flex flex-col gap-2">
        <div className="font-4xl">Your order history</div>
        <Divider/>
        <div>
            {orderHistory?(
                <OrdersHistoryList orders={orderHistory}/>
            ):<div className="font-2xl">No orders have been made yet by you</div>}
        </div>
    </div>
}