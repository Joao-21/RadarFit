import { useEffect } from "react";
import styles from "./styles.module.scss";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../../components/productCard";
import { productsListMocked } from "../../mockedData";
import { setProductsList } from "../../redux-store/store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";

const ProductsContainer = () => {
  const dispatch = useDispatch();

  const productsData = useSelector(
    (state: RootState) => state.product.productList
  );

  useEffect(() => {
    dispatch(setProductsList(productsListMocked));
  }, []);

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
          {productsData.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsContainer;
