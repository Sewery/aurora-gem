import ProductDto from "./interfaces/ProductDto";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function ProductCard({ product }: { product: ProductDto }) {
  return (
    <div className=" bg-white rounded-lg shadow-lg p-4 flex flex-col items-center w-64 h-88">
      <Link to={`/products/${product.productId}`} className="w-full no-underline text-slate-950">
        <div className="border-1 border-blue-500 overflow-hidden shadow-md mb-4 rounded-lg">
          <img
            className=" w-full h-48 object-cover rounded-lg transition ease-in-out delay-150 hover:scale-110"
            src={product.images[0].url}
            alt={product.name}
            loading="lazy"
          />
        </div>
        <div className=" text-lg font-bold mt-2 text-center h-12 te">
          {product.name}
        </div>
      </Link>
      <div className="text-lg font-semibold text-gray-600 mt-1 italic">
        {product.price} $
      </div>
    </div>
  );
}
