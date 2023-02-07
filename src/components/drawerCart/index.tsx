import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";
import { cartItemsSum, formatMoney, quantityPerProduct } from "../../utils";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import PrimaryButton from "../primaryButton";
import styles from "./styles.module.scss";
import { setHandleAddedItems } from "../../redux-store/store/slices/cartInfoSlice";

const DrawerCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cartDetails.items);

  const filteredCartItems = [...new Set(cartItems)];

  const quantityPerItem = quantityPerProduct(cartItems);

  const sumTotalItems = cartItemsSum(cartItems);

  const handleDeleteItem = (id: number) => {
    const indexToRemove = cartItems.findIndex((item) => item.id === id);
    const cartItemsCopy = [...cartItems];
    cartItemsCopy.splice(indexToRemove, 1);

    dispatch(setHandleAddedItems(cartItemsCopy));
  };

  const handleFinishBuy = () => {};

  return (
    <Box sx={{ width: 280 }} className={styles.container}>
      <Box className={styles.title_container}>
        <Typography className={styles.title_typo}>
          Aqui estão seus produtos
          <Typography className={styles.typo_radar}>RadarFit.</Typography>
        </Typography>
      </Box>
      <Divider />
      <Box style={{ height: "84%" }}>
        {filteredCartItems.length === 0 ? (
          <Box className={styles.not_found_container}>
            Não possui item adicionado!
          </Box>
        ) : (
          filteredCartItems.map((item) => (
            <Box className={styles.info_container} key={item.id}>
              <Typography>
                {quantityPerItem[item.id] !== undefined &&
                  quantityPerItem[item.id].quantity}
              </Typography>
              <Typography>{item.name}</Typography>
              <Typography>
                {formatMoney(item.price * quantityPerItem[item.id].quantity)}
              </Typography>
              <Box>
                <IconButton
                  style={{ color: "#484b78" }}
                  aria-label="delete"
                  component="label"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          ))
        )}
        {filteredCartItems.length !== 0 && (
          <Box className={styles.button_container}>
            <Typography>Total troca: {formatMoney(sumTotalItems)}</Typography>
            <PrimaryButton
              buttonName="Finalizar Troca"
              handleClick={handleFinishBuy}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DrawerCart;
