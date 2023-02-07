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
  setAddedProduct,
  setChangeSnackbarStatus,
} from "../../redux-store/store/slices/cartInfoSlice";
import { quantityPerProduct } from "../../utils";
import PrimaryButton from "../primaryButton";
import styles from "./styles.module.scss";

interface CardInfoProps {
  product: ProductProps;
}

const ProductCard = ({ product }: CardInfoProps) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cartDetails.items);
  const userCoins = useSelector((state: RootState) => state.user.coins);

  const quantityPerItem = quantityPerProduct(cartItems);

  const cartItemsSum = cartItems.reduce((acc, item) => {
    acc = acc + item.price;
    return acc;
  }, 0);

  const handleAddProduct = () => {
    if (cartItemsSum + product.price > userCoins) {
      dispatch(setChangeSnackbarStatus());
    } else {
      const payload = [...cartItems];
      payload.push(product);
      dispatch(setAddedProduct(payload));
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
          {product.name}: R${product.price}
        </Typography>
      </CardContent>
      <CardActions className={styles.card_actions}>
        <Typography>
          Qtd no carrinho:
          {quantityPerItem[product.id] !== undefined
            ? quantityPerItem[product.id].quantity
            : 0}
        </Typography>
        <PrimaryButton
          buttonName="Add Produto"
          handleClick={handleAddProduct}
        />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
