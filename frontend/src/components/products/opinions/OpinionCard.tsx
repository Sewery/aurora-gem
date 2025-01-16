import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import OpinionDto from "./dto/OpinionDto";
import EditIcon from "@mui/icons-material/Edit";
import { red } from "@mui/material/colors";
import ClearIcon from "@mui/icons-material/Clear";
export default function OpinionCard({ opinion }: { opinion: OpinionDto }) {
  return (
    <Card sx={{ minWidth: 500 }}>
      <CardHeader
        className="flex justify-start items-center pb-0"
        avatar={
          <Avatar sx={{ bgcolor: red[200] }} aria-label="avatar">
            {opinion.customerName?.charAt(0)}
          </Avatar>
        }
        action={
          <Box>
            <Tooltip title="Edit">
              <IconButton aria-label="edit">
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton aria-label="delete">
                <ClearIcon />
              </IconButton>
            </Tooltip>
          </Box>
        }
        title={
          <div className="flex">
            <Typography className="text-base font-bold" component="span">
              {opinion.customerName}
            </Typography>
          </div>
        }
      />
      <CardContent className="flex justify-start">
        <Rating className="" name="simple-controlled" value={opinion.stars} />
      </CardContent>
      <CardContent className="flex justify-start">
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {opinion.content}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
