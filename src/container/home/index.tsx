import { Box } from "@mui/material";
import { TopAppBar } from "../../components/topBar";
import ProductsContainer from "../products";
import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <Box className={styles.container}>
      <TopAppBar />
      <ProductsContainer />
    </Box>
  );
};

export default HomePage;
