import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ProductProps } from "../../mockedData";
import styles from "./styles.module.scss";

interface CardInfoProps {
  product: ProductProps;
}

const ProductCard = ({ product }: CardInfoProps) => {
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
        <Button
          style={{ color: "#484b78", background: "#dddeeb" }}
          variant="contained"
          onClick={() => console.log("ea")}
        >
          Add Produto
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
