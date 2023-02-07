import Typography from "@mui/material/Typography";
import { IconButton, SwipeableDrawer } from "@mui/material";
import { Box } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { setChangeCartDetailsStatus } from "../../redux-store/store/slices/cartInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import DrawerCart from "../drawerCart";
import { RootState } from "../../redux-store/store";

const CartInfo = () => {
  const dispatch = useDispatch();

  const openCartDetails = () => {
    dispatch(setChangeCartDetailsStatus());
  };

  const cartDetailsStatus = useSelector(
    (state: RootState) => state.cartDetails.status
  );

  const userCoins = useSelector((state: RootState) => state.user.coins);

  const cartItems = useSelector((state: RootState) => state.cartDetails.items);

  const cartItemsSum = cartItems.reduce((acc, item) => {
    acc = acc + item.price;
    return acc;
  }, 0);
  console.log("cartItemsSum", cartItemsSum);
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
        <Typography style={{ fontSize: "14px" }}>
          Saldo: R$: {userCoins}
        </Typography>
        <Typography style={{ color: "red", fontSize: "14px" }}>
          Carrinho: R$: {cartItemsSum}
        </Typography>
      </Box>
      <IconButton
        style={{ color: "white" }}
        aria-label="upload picture"
        component="label"
        onClick={openCartDetails}
      >
        <ShoppingCartIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={cartDetailsStatus}
        onClose={openCartDetails}
        onOpen={openCartDetails}
      >
        <Box sx={{ width: 250 }}>
          <DrawerCart />
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default CartInfo;
