import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartInfo = () => {
  return (
    <Box style={{ display: "flex", flexDirection: "row" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "16px",
        }}
      >
        <Typography style={{ fontSize: "14px" }}>Saldo: R$: 250,00</Typography>
        <Typography style={{ color: "red", fontSize: "14px" }}>
          Carrinho: R$:150,00
        </Typography>
      </Box>
      <IconButton
        style={{ color: "white" }}
        aria-label="upload picture"
        component="label"
      >
        <ShoppingCartIcon />
      </IconButton>
    </Box>
  );
};

export default CartInfo;
