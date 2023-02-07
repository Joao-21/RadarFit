import styles from "./styles.module.scss";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../../components/productCard";
import { productsList } from "../../mockedData";

const ProductsContainer = () => {
  return (
    <Box className={styles.cart_container}>
      <Box style={{ width: "100%", padding: "16px", overflow: "auto" }}>
        <Grid container style={{ display: "grid", justifyContent: "center" }}>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "18px",
            }}
          >
            Use suas moedas RadarFit para trocar por produtos a sua escolha.
          </Typography>
          <Typography style={{ display: "flex", justifyContent: "center" }}>
            Aproveite as oportunidades!
          </Typography>
        </Grid>
        <Box className={styles.card_container}>
          {productsList.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsContainer;
