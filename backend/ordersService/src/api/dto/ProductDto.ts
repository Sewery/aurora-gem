import CategoryDto from "./CategoryDto";
import ImageDto from "./ImageDto";
import OpinionDto from "./OpinionDto";
export default interface ProductDto {
  productId: number;
  price: number;
  name: string;
  shortDescription: string;
  availableQuantity: number;
  category: CategoryDto;
  opinons: OpinionDto[];
  images: ImageDto[];
}
