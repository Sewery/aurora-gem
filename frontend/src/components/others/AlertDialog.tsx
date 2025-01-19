import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export interface DialogProps {
  title: string;
  open:boolean;
  content: string;
  onAgree: () => void;
  onDisagree: () => void;
}

export default function AlertDialog(props: DialogProps) {
  return (
    <Dialog
      open={props.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" className="flex justify-center">
        {props.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.content}
        </DialogContentText>
      </DialogContent>
      <DialogActions className="flex gap-2">
      <Button variant="outlined" onClick={props.onAgree} autoFocus>
          Yes
        </Button>
        <Button  onClick={props.onDisagree}>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}
