import { useEffect } from "react";
import styles from "./styles.module.scss";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../../components/productCard";
import { productsListMocked } from "../../mockedData";
import { setProductsList } from "../../redux-store/store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";
import {
  setChangeSnackbarStatus,
  setChangeSuccessSnackbar,
} from "../../redux-store/store/slices/cartInfoSlice";
import { SnackBar } from "../../components/snackbar";

const ProductsContainer = () => {
  const dispatch = useDispatch();

  const productsData = useSelector(
    (state: RootState) => state.product.productList
  );

  const openSnackbar = useSelector(
    (state: RootState) => state.cartDetails.snackbarErrorStatus
  );

  const openSnackbarSuccess = useSelector(
    (state: RootState) => state.cartDetails.snackbarSuccessStatus
  );

  const handleToogleSnackBar = () => {
    dispatch(setChangeSnackbarStatus());
  };

  const handleToogleSnackBarSuccess = () => {
    dispatch(setChangeSuccessSnackbar());
  };

  useEffect(() => {
    dispatch(setProductsList(productsListMocked));
  }, []);

  return (
    <Box className={styles.products_container}>
      <Box className={styles.products_content}>
        <Grid container className={styles.title_container}>
          <Typography className={`${styles.typography} ${styles.title}`}>
            Use suas moedas RadarFit para trocar por produtos a sua escolha.
          </Typography>
          <Typography className={styles.typography}>
            Aproveite as oportunidades!
          </Typography>
        </Grid>
        <Box className={styles.card_container}>
          {productsData.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Box>
      </Box>
      <SnackBar
        open={openSnackbar}
        onClose={handleToogleSnackBar}
        type="error"
        message="Você não tem moedas suficientes para adicionar esse item!"
      />
      <SnackBar
        open={openSnackbarSuccess}
        onClose={handleToogleSnackBarSuccess}
        type="success"
        message="Troca realizada com sucesso!"
      />
    </Box>
  );
};

export default ProductsContainer;
