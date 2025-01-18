import { Divider } from "@mui/material";
import CartOrderCard from "./CartOrderCard";
import OrderedProduct from "./interfaces/OrderedProduct";

export default function CartOrdersList({
  products,
}: {
    products: OrderedProduct[];
}) {
  return (
    <div>
      <div className="flex flex-col">
        {products.map((dto, index) => {
          return (
            <div key={index}>
              <CartOrderCard product={dto} />
              <Divider/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
