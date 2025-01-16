import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import authAPI from "../../helpers/authAPI";
import ProductDto from "./dto/ProductDto";
import OpinionList from "./opinions/OpinionList";
import { Box, Button, Container, Divider, Paper } from "@mui/material";
import AddOpinionCard from "./opinions/AddOpinionCard";
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDto>();
  useEffect(() => {
    authAPI.get(`products/${id}`).then((res) => {
      console.log(res.data);
      if (res && res.data.result) setProduct(res.data.result);
    });
  }, [id]);
  return (
    <Paper className="flex flex-col items-center justify-center w-fit max-w-full p-16">
      <Paper className="flex items-center p-8 min-h-96 justify-center  w-fit max-w-full">
        <Box className="m-4 border rounded-md border-slate-700 shadow-lg overflow-hidden">
          <img  className="w-96 h-96 object-cover rounded-md" src={product?.images[0].url} alt={product?.name} />
        </Box>
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-3xl font-bold m-4">{product?.name}</div>
            <div className="text-xl font-bold italic m-2">{product?.price} zł</div>
            <div>
              <Button variant='outlined'>Add to cart</Button>
              <div className="m-2">Zostalo jeszcze: <span className="font-bold">{product?.availableQuantity}</span></div>
            </div>
          </div>
          <Divider/>
          <div>
            <div>{product?.shortDescription}</div>
          </div>
        </div>
      </Paper>
      <Divider className="m-4 " />
      <div className="flex flex-col items-center justify-center">
        <AddOpinionCard />
        <OpinionList />
      </div>
    </Paper>
  );
}
