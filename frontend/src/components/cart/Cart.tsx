import { useEffect, useState } from "react";
import CartOrdersList from "./CartOrdersList";
import authAPI from "../../helpers/authAPI";
import ProductDto from "../products/dto/ProductDto";
import OrderedProduct from "./interfaces/OrderedProduct";
import { Button } from "@mui/material";

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

async function fetchProducts(ids: [number, number][]) {
  const products = await Promise.all(
    ids.map(async ([id, quantity]) => {
      try {
        const res = await authAPI.get(`products/${id}`);
        if (res && res.data.result) {
          return mapToOrderedProduct(res.data.result, quantity);
        }
      } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
      }
      return null;
    })
  );
  return products.filter((order) => order != null) as OrderedProduct[];
}

export default function Cart() {
  const [orderedProducts, setOrderedProducts] = useState<OrderedProduct[]>();
  const [totalPrice, setTotalPrice] = useState<number>();
  const [totalQuantity, setTotalQuantity] = useState<number>();
  useEffect(() => {
    const fetchCartItems = async () => {
      const keys: [number, number][] = Object.keys(localStorage)
        .filter((key) => key.startsWith("cart-item-"))
        .map((id) => {
          if (id)
            return [Number(id.substring(10)), Number(localStorage.getItem(id))];
          return null;
        })
        .filter((item): item is [number, number] => item != null);
      setOrderedProducts(await fetchProducts(keys));
    };
    fetchCartItems();
  }, []);
  useEffect(() => {
    if(orderedProducts){
        const sum = (a: number[]) => eval(a.join('+'));
        const _totalPrice:number = sum(orderedProducts.map((val)=>val.price*val.quantity))
        const _totalQuantity = sum(orderedProducts.map((val)=>val.quantity))
        setTotalPrice(_totalPrice)
        setTotalQuantity(_totalQuantity)
    }
  }, [orderedProducts]);
  return (
    <div>{orderedProducts && orderedProducts.length!==0?(
    <div className="flex gap-5 items-center">
      <div>
        <CartOrdersList products={orderedProducts}/>
      </div>
      <div>
        <div>Number of items: {totalQuantity}</div>
        <div>Total Price: <p className="text-xl font-bold">{totalPrice} zł</p></div>
        <div>
          <Button variant="contained">Make order</Button>
        </div>
      </div>
    </div>):(<span className="mt-10 text-x3l">No products in cart</span>)}
    </div>
  );
}
