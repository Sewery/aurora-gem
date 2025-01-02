import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDto from "./dto/ProductDto";
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDto>();
  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`).then((res) => {
      console.log(res.data);
      if (res && res.data.result) setProduct(res.data.result);
    });
  }, []);
  return <div>{JSON.stringify(product)}</div>;
}
