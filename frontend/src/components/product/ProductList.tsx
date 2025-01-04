import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProductDto from "./dto/ProductDto";
import ProductCard from "./ProductCard";
import authAPI from "../../helpers/authAPI";

export default function ProductList() {
  const [productList, setProductList] = useState<ProductDto[]>();
  useEffect(() => {
    authAPI.get("products/").then((res) => {
      console.log(res.data);
      if (res && res.data.result) setProductList(res.data.result);
    });

  }, []);
  return (
    <div >
      {productList ? (
        productList.map((p, index) => {
          return (
            <div key={index}>
              <Link to={`/products/${p.productId}`}>
                <ProductCard product={p} />
              </Link>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
