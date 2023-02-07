import Typography from "@mui/material/Typography";
import { IconButton, SwipeableDrawer } from "@mui/material";
import { Box } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { setChangeCartDetailsStatus } from "../../redux-store/store/slices/cartInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import DrawerCart from "../drawerCart";
import { RootState } from "../../redux-store/store";
import styles from "./styles.module.scss";
import { cartItemsSum, formatMoney } from "../../utils";

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

  const sumTotalItems = cartItemsSum(cartItems);

  return (
    <Box className={styles.box_container}>
      <Box className={styles.box_content}>
        <Typography className={styles.typography}>
          Saldo: {formatMoney(userCoins)}
        </Typography>
        <Typography className={styles.typography}>
          Carrinho: {formatMoney(sumTotalItems)}
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
        <DrawerCart />
      </SwipeableDrawer>
    </Box>
  );
};

export default CartInfo;
