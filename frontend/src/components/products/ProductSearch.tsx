import { useEffect, useState } from "react";
import ProductDto from "./interfaces/ProductDto";
import ProductCard from "./ProductCard";
import authAPI from "../../helpers/authAPI";
import { useParams } from "react-router-dom";



export default function ProductSearch() {
    const { searchQuery } = useParams();
    const [products, setProducts] = useState<ProductDto[]>();
    useEffect(() => {
      authAPI.get(`http://localhost:3001/products/search/${searchQuery}`).then((res) => {
        if (res && res.data.result) setProducts(res.data.result);
      });
    }, []);
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
  