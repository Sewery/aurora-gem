import ProductDto from "./dto/ProductDto";
import "./product.css";
export default function ProductCard({ product }: { product: ProductDto }) {
  return (
    <div className="card-product-list">
      <img
        className="img-product-list"
        src={product.images[0].url}
        alt={product.name}
      />
      <div className="name-product-list">{product.name}</div>
      <div className="name-product-price">{product.price}zł</div>
    </div>
  );
}
