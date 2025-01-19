import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Rating,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {OpinionDto,mapToOpinionDto} from "./dto/OpinionDto";
import authAPI from "../../../helpers/authAPI";
import userAuthenticated from "../../../helpers/userAuthenticated";

export default function AddOpinionCard() {
  const { id } = useParams();
  const [stars, setStars] = useState<number>(0);
  const [content, setContent] = useState<string>("");
  const [opinionAdded,setOpinionAdded] = useState<boolean>(false)

  const userOpinion = useCallback(async()=>{
    if(userAuthenticated()){
      await authAPI.get(`http://localhost:3003/opinions/customer/`)
      .then((res)=>{
        const opinions:OpinionDto[]=res.data.result
        setOpinionAdded(opinions.some((op)=>  op.productId === parseInt(id!)))
      })
      .catch(err=>{
        console.error(err)
    })
    }
    
  },[id])
  useEffect(() => {
    userOpinion();
  }, [userOpinion]);
  function onSubmitClick() {
    const opinion = mapToOpinionDto(null,stars,content,Number(id))
    console.log(opinion)
    authAPI
    .post(`http://localhost:3003/opinions/`,opinion)
    .catch((error)=> console.log(error))
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
