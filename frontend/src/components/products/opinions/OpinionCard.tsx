import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import { OpinionDto } from "./dto/OpinionDto";
import EditIcon from "@mui/icons-material/Edit";
import { red } from "@mui/material/colors";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import EditOpinionCard from "./EditOpinionCard";
import AlertDialog from "../../others/AlertDialog";
import userAuthenticated from "../../../helpers/userAuthenticated";
import isUserAdmin from "../../../helpers/isUserAdmin";

interface OpinionCallbacks {
  onChange: (opinionId: number) => void;
  onDelete: () => void;
}

export default function OpinionCard({
  opinion,
  callbacks,
  userOpinion,
}: {
  opinion: OpinionDto;
  callbacks: OpinionCallbacks;
  userOpinion: boolean;
}) {
  const [isEdited, setIsEdited] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const onEditClick = () => {
    setIsEdited(true);
  };
  const onCloseClick = () => {
    setIsEdited(false);
  };
  return (
    <>
      <AlertDialog
        title="Delete opinion"
        open={isAlertOpen}
        content="Are you sure you want to delete this opinion"
        onAgree={() => {
          callbacks.onDelete();
          setIsAlertOpen(false);
        }}
        onDisagree={() => setIsAlertOpen(false)}
      />
      {isEdited ? (
        <EditOpinionCard opinion={opinion} onClose={onCloseClick} />
      ) : (
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
                {userAuthenticated() && userOpinion && (
                  <Tooltip title="Edit">
                    <IconButton aria-label="edit" onClick={onEditClick}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                )}

                {userAuthenticated() && (userOpinion || isUserAdmin()) && (
                  <Tooltip title="Delete">
                    <IconButton
                      aria-label="delete"
                      onClick={() => setIsAlertOpen(true)}
                    >
                      <ClearIcon />
                    </IconButton>
                  </Tooltip>
                )}
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
            <Rating
              className=""
              name="simple-controlled"
              value={opinion.stars}
            />
          </CardContent>
          <CardContent className="flex justify-start">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {opinion.content}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
