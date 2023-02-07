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
import { setAddedProduct } from "../../redux-store/store/slices/cartInfoSlice";
import { quantityOnCart } from "../../utils";
import styles from "./styles.module.scss";

interface CardInfoProps {
  product: ProductProps;
}

const ProductCard = ({ product }: CardInfoProps) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cartDetails.items);

  const quantityPerItem = quantityOnCart(cartItems);

  const handleAddProduct = () => {
    const payload = [...cartItems];
    payload.push(product);
    dispatch(setAddedProduct(payload));
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
        <Button
          className={styles.button}
          variant="contained"
          onClick={handleAddProduct}
        >
          Add Produto
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
