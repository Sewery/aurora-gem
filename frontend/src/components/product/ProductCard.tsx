import ProductDto from "./dto/ProductDto";
import "./product.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function ProductCard({ product }: { product: ProductDto }) {
  return (
    <div className="card-product-list">
      <Link to={`/products/${product.productId}`}>
        <img
          className="img-product-list"
          src={product.images[0].url}
          alt={product.name}
          loading="lazy"
        />
        <div className="name-product-list">{product.name}</div>
      </Link>
      <div className="name-product-price">{product.price}zł</div>
      <Button variant="contained">Add to card</Button>
    </div>
  );
}
