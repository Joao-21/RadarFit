import { Alert, AlertColor, Snackbar } from "@mui/material";

interface SnackBarProps {
  open: boolean;
  onClose: () => void;
  type: AlertColor;
  message: string;
}

const SnackBar = ({ open, onClose, type, message }: SnackBarProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  );
};

export { SnackBar };
