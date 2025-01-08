import { useEffect, useState } from "react";

import ProductDto from "./dto/ProductDto";
import ProductCard from "./ProductCard";
import authAPI from "../../helpers/authAPI";
import { useParams } from "react-router-dom";

export default function ProductList() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState<ProductDto[]>();
  useEffect(() => {
    authAPI.get(`products/category/${categoryName}`).then((res) => {
      if (res && res.data.result) setProducts(res.data.result);
    });
  }, [categoryName]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products ? (
        products.map((p, index) => {
          return (
            <div key={index}>
                <ProductCard product={p} />
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
