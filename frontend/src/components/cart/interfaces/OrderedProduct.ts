
export default interface OrderedProduct {
  productId: number;
  price: number;
  name: string;
  shortDescription: string;
  quantity: number;
  image: {
    imageId: number;
    url: string;
    fileName: string;
  };
}