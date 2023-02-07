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
import styles from "./styles.module.scss";

interface CardInfoProps {
  product: ProductProps;
}

const ProductCard = ({ product }: CardInfoProps) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cartDetails.items);

  const handleAddProduct = () => {
    const payload = [...cartItems];
    payload.push(product);
    dispatch(setAddedProduct(payload));
  };

  const quantityOnCart = cartItems.reduce((acc: any, val) => {
    if (!acc[val.id])
      acc[val.id] = {
        quantity: 1,
      };
    else acc[val.id]["quantity"]++;
    return acc;
  }, {});

  return (
    <Card className={styles.card_container}>
      <CardMedia
        component="img"
        src={product.image}
        alt=""
        style={{
          height: "140px",
          width: "200px",
          objectFit: "contain",
        }}
      />
      <CardContent className={styles.card_content}>
        <Typography component="div" variant="h6">
          {product.name}: R${product.price}
        </Typography>
      </CardContent>
      <CardActions className={styles.card_actions}>
        <Typography>
          Qtd no carrinho:
          {quantityOnCart[product.id] !== undefined
            ? quantityOnCart[product.id].quantity
            : 0}
        </Typography>
        <Button
          style={{ color: "#484b78", background: "#dddeeb" }}
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
