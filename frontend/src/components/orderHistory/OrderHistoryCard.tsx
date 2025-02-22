import { Divider, Paper } from "@mui/material";
import OrderDto from "./interfaces/OrderDto";
import CheckIcon from "@mui/icons-material/Check";
import authAPI from "../../helpers/authAPI";
import OrderDetailsDto from "./interfaces/OrderDetailsDto";
import { useEffect, useState } from "react";
import ProductDto from "../products/interfaces/ProductDto";

interface OrderedProduct {
  productId: number;
  price: number;
  name: string;
  shortDescription: string;
  quantity: number;
  image: {
    imageId: number;
    url: string;
    fileName: string;
  };
}
function mapToOrderedProduct(
  product: ProductDto,
  quantity: number
): OrderedProduct {
  return {
    productId: product.productId,
    price: product.price,
    name: product.name,
    shortDescription: product.shortDescription,
    quantity: quantity,
    image: {
      imageId: product.images[0].imageId,
      url: product.images[0].url,
      fileName: product.images[0].fileName,
    },
  };
}

function OrderProduct({ productOrder }: { productOrder: OrderDetailsDto }) {
  const [orderedProduct, setOrderedProduct] = useState<OrderedProduct>();
  useEffect(() => {
    authAPI
      .get(`http://localhost:3001/products/${productOrder.productId}`)
      .then((res) => {
        console.log(res.data);
        if (res && res.data.result)
          setOrderedProduct(
            mapToOrderedProduct(res.data.result, productOrder.quantity)
          );
      });
  }, [productOrder.productId, productOrder.quantity]);
  return (
    <>
      {orderedProduct ? (
        <div className="flex gap-4 m-2 items-center">
          <div>
            <img className="w-32 h-32" src={orderedProduct.image.url} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-bold">{orderedProduct.name}</div>
            <Divider />
            <div className="text-large">{orderedProduct.shortDescription}</div>
          </div>
          <div>
            <div>{orderedProduct.quantity} pieces</div>
          </div>
          <div className="text-large font-bold">
            <div>{orderedProduct.price * orderedProduct.quantity} zł</div>
          </div>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
}

export default function OrderHistoryCard({ order }: { order: OrderDto }) {
  return (
    <Paper className="flex flex-col">
      {/* Dane zamowienia */}
      <div className="flex items-center gap-4 m-1">
      <CheckIcon className="text-3xl"/>
        <div className="flex flex-col items-start">
          <div>Delivered</div>
          <div className="text-sm">Date of order: {order.orderDate}</div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col m-2">
        {order.ordersDetails.map((orderDetails) => (
          <div>
            <OrderProduct productOrder={orderDetails} />
            <Divider />
          </div>
        ))}
      </div>
      <Divider />
      <div className="flex gap-2 m-4 text-xl items-center justify-end">
        <div className="text-large">Summary:</div>
        <div className="font-bold">{order.totalPrice} zł</div>
        <div className="text-sm">with shipment </div>
        <div className="font-bold text-base">{order.totalPrice + order.shipment} zł</div>
      </div>
    </Paper>
  );
}
