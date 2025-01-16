import {
    Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Rating,
} from "@mui/material";

export default function AddOpinionCard() {
  return (
    <Paper className="p-8 m-8 flex flex-col gap-4 min-w-96">
      <Rating name="no-value" value={null} />
      <FormControl>
        <InputLabel htmlFor="component-outlined">Opinion</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Opinion"
          multiline
          rows={4} 
        />
      </FormControl>
      <Button className="h-12 text-lg" variant="contained">Submit</Button>
    </Paper>
  );
}
