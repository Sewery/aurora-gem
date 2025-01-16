import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Rating,
} from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import OpinionDto from "./dto/OpinionDto";
function mapToOpinionDto(
  cutomerId: number,
  stars: number,
  content: string,
  productId: number
): OpinionDto {
  return {
    opinionId: null,
    customerId: cutomerId,
    customerName: null,
    content: content,
    stars: stars,
    productId: productId,
  };
}
export default function AddOpinionCard() {
  const { id } = useParams();
  const customerId = 1;
  const [stars, setStars] = useState<number>(0);
  const [content, setContent] = useState<string>("");
  const [opinionAdded,setOpinionAdded] = useState<boolean>(false)

  const userOpinion = useCallback(async()=>{
      axios.get(`http://localhost:3003/opinions/customer/${id}`)
      .then((res)=>{
        const opinions:OpinionDto[]=res.data.result
        setOpinionAdded(opinions.some((op)=>  op.productId === parseInt(id!)))
      })
  },[customerId,id])
  useEffect(() => {
    userOpinion();
  }, [userOpinion]);
  function onSubmitClick() {
    axios
    .post(`http://localhost:3003/opinions/`,mapToOpinionDto(customerId,stars,content,Number(id)))
    .then((res)=>{
      setStars(res.data.result.stars)
      setContent(res.data.result.content)
    });
    setOpinionAdded(true)
  }
  return <>
  {opinionAdded==false?(
    <Paper className="p-8 m-8 flex flex-col gap-4 min-w-96">
      <Rating
        name="stars opinion"
        value={stars}
        onChange={(_, val) => setStars(val ? val : 0)}
      />
      <FormControl>
        <InputLabel htmlFor="component-outlined">Opinion</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Opinion"
          multiline
          rows={4}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setContent(event.target.value);
          }}
        />
      </FormControl>
      <Button className="h-12 text-lg" variant="contained" onClick={()=>onSubmitClick()}>
        Submit
      </Button>
    </Paper>
  ):<div className="text-2xl m-4">You added your opinion</div>}
  </>;
}
