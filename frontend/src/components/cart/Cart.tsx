import { useEffect, useState } from "react";
import CartOrdersList from "./CartOrdersList";
import authAPI from "../../helpers/authAPI";
import ProductDto from "../products/dto/ProductDto";
import OrderedProduct from "./interfaces/OrderedProduct";
import { Alert, Button } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import CheckIcon from "@mui/icons-material/Check";

interface OrderedProductsReq {
  productId: number;
  quantity: number;
  price: number;
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

async function fetchProducts(ids: [number, number][]) {
  const products = await Promise.all(
    ids.map(async ([id, quantity]) => {
      try {
        const res = await authAPI.get(`http://localhost:3001/products/${id}`);
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
async function postOrderedProducts(orderReq: OrderedProductsReq[]) {
  console.log(orderReq);
  await authAPI.post(`http://localhost:3002/orders/`, orderReq);
}

interface AlertInfo {
  showSuccess: boolean;
  showInfo: boolean;
  showError: boolean;
  message: string;
}
export default function Cart() {
  const [selectedProducts, setSelectedProducts] = useState<OrderedProduct[]>();
  const [totalPrice, setTotalPrice] = useState<number>();
  const [totalQuantity, setTotalQuantity] = useState<number>();
  const [showAlert, setShowAlert] = useState<AlertInfo>({
    showSuccess: false,
    showInfo: false,
    showError: false,
    message:""
  });
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
      setSelectedProducts(await fetchProducts(keys));
    };
    fetchCartItems();
  }, []);
  useEffect(() => {
    if (selectedProducts) {
      console.log(selectedProducts);
      const sum = (a: number[]) => eval(a.join("+"));
      const _totalPrice: number = sum(
        selectedProducts.map((val) => val.price * val.quantity)
      );
      const _totalQuantity = sum(selectedProducts.map((val) => val.quantity));
      setTotalPrice(_totalPrice);
      setTotalQuantity(_totalQuantity);
    }
  }, [selectedProducts]);

  async function handleOnClickMakeOrder() {
    const emptyCart = () => {
      const cartKeys = Object.keys(localStorage).filter((key) =>
        key.startsWith("cart-item-")
      );
      cartKeys.forEach((key) => localStorage.removeItem(key));
    };
    try {
      if (selectedProducts) {
        const req: OrderedProductsReq[] = selectedProducts.map((p) => ({
          productId: p.productId,
          quantity: p.quantity,
          price: p.price,
        }));

        await postOrderedProducts(req);
        emptyCart();
        setSelectedProducts([]);

        setShowAlert({
          showSuccess: true,
          showInfo: false,
          showError: false,
          message: "You successfully made an order!",
        });
      }
    } catch (error) {
      console.error("Error while making an order:", error);
      setShowAlert({
        showSuccess: false,
        showInfo: false,
        showError: true,
        message: "Failed to make the order. Please try again.",
      });
    }
  }
  const hasProducts =
    selectedProducts &&
    selectedProducts.length > 0 &&
    totalPrice &&
    totalQuantity;

  return (
    <div>
      {showAlert.showSuccess && (
        <Alert
          variant="outlined"
          severity="success"
          onClose={() => setShowAlert({ ...showAlert, showSuccess: false })}
          icon={<CheckIcon fontSize="inherit" />}
        >
          {showAlert.message}
        </Alert>
      )}
      {showAlert.showError && (
        <Alert
          variant="outlined"
          severity="error"
          onClose={() => setShowAlert({ ...showAlert, showError: false })}
        >
          {showAlert.message}
        </Alert>
      )}
      {hasProducts ? (
        <div className="flex gap-5 items-center">
          <div>
            <CartOrdersList products={selectedProducts} />
          </div>
          <div>
            <div>Number of items: {totalQuantity}</div>
            <div>Cost of shipment: {Math.max(totalPrice / 10, 20)}</div>
            <div>
              Total Price:{" "}
              <p className="text-xl font-bold">
                {totalPrice + Math.max(totalPrice / 10, 20)} zł
              </p>
            </div>
            <div>
              <Button
                variant="contained"
                onClick={() => handleOnClickMakeOrder()}
              >
                Make order
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-10 text-3xl">
          <p>No products in cart</p>
          <SentimentDissatisfiedIcon className="text-9xl" />
        </div>
      )}
    </div>
  );
}
