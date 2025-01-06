import { useEffect, useState } from "react";

import ProductDto from "./dto/ProductDto";
import ProductCard from "./ProductCard";
import authAPI from "../../helpers/authAPI";

export default function ProductList({onCurrProductsChange}:{onCurrProductsChange:()=>ProductDto[]|undefined}) {
  const productList = onCurrProductsChange()
  return (
    <div >
      {productList ? (
        productList.map((p, index) => {
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
