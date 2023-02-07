import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ProductProps } from "../../mockedData";
import { RootState } from "../../redux-store/store";
import {
  setHandleAddedItems,
  setChangeSnackbarStatus,
} from "../../redux-store/store/slices/cartInfoSlice";
import { cartItemsSum, formatMoney, quantityPerProduct } from "../../utils";
import styles from "./styles.module.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";

interface CardInfoProps {
  product: ProductProps;
}

const ProductCard = ({ product }: CardInfoProps) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cartDetails.items);
  const userCoins = useSelector((state: RootState) => state.user.coins);

  const quantityPerItem = quantityPerProduct(cartItems);

  const sumTotalItems = cartItemsSum(cartItems);

  const handleAddProduct = () => {
    if (sumTotalItems + product.price > userCoins) {
      dispatch(setChangeSnackbarStatus());
    } else {
      const payload = [...cartItems];
      payload.push(product);
      dispatch(setHandleAddedItems(payload));
    }
  };

  return (
    <Card className={styles.card_container}>
      <CardMedia
        component="img"
        src={product.image}
        alt=""
        className={styles.card_media}
      />
      <CardContent className={styles.card_content}>
        <Typography component="div" variant="h6">
          {product.name}: {formatMoney(product.price)}
        </Typography>
      </CardContent>
      <CardActions className={styles.card_actions}>
        <Typography>
          Qtd no carrinho:
          {quantityPerItem[product.id] !== undefined
            ? quantityPerItem[product.id].quantity
            : 0}
        </Typography>
        <IconButton
          style={{ color: "#484b78" }}
          aria-label="delete"
          component="label"
          onClick={handleAddProduct}
          data-testid={`cart-${product.id}`}
        >
          <AddCircleIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
