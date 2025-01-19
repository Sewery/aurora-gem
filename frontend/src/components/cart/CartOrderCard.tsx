import { Container, Divider } from "@mui/material";
import OrderedProduct from "./interfaces/OrderedProduct";
export default function CartOrderCard({
  product,
}: {
  product: OrderedProduct;
}) {
  return <Container className="flex gap-4 m-2 items-center">
    <div><img className="w-32 h-32" src={product.image.url} alt="" /></div>
    <div className="flex flex-col">
        <div className="text-2xl font-bold">{product.name}</div>
        <Divider/>
        <div className="text-large">{product.shortDescription}</div>
    </div>
    <div>
        <div>{product.quantity} pieces</div>
    </div>
    <div className="text-large font-bold">
        <div >{product.price*product.quantity} zł</div>
    </div>
  </Container>;
}
