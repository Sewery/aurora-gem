import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Rating,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { OpinionDto, mapToOpinionDto } from "./dto/OpinionDto";
import authAPI from "../../../helpers/authAPI";

interface EditProps {
  opinion: OpinionDto;
  onClose: () => void;
}

export default function EditOpinionCard(props: EditProps) {
  const { id } = useParams();
  const [stars, setStars] = useState<number>(props.opinion.stars);
  const [content, setContent] = useState<string>(props.opinion.content);
  function onSubmitClick() {
    authAPI
      .patch(
        `http://localhost:3003/opinions/${props.opinion.opinionId}`,
        mapToOpinionDto(props.opinion.opinionId, stars, content, Number(id))
      )
      .then(() => props.onClose())
      .catch((error) => console.error(error));
  }
  return (
    <>
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
            defaultValue={content}
            multiline
            rows={4}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setContent(event.target.value);
            }}
          />
        </FormControl>
        <div className="felx m-1 gap2 items-center"></div>
        <Button
          className="h-12 text-lg"
          variant="contained"
          onClick={() => onSubmitClick()}
        >
          Submit
        </Button>
        <Button
          className="h-8 text-base"
          variant="outlined"
          onClick={() => props.onClose()}
        >
          Abort edit
        </Button>
      </Paper>
    </>
  );
}
