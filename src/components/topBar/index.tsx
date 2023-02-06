import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.scss";
import CartInfo from "../cartInfo";

const TopAppBar = () => {
  return (
    <AppBar component="nav" position="static" className={styles.container}>
      <Typography className={styles.typography_title}>RadarFit</Typography>
      <CartInfo />
    </AppBar>
  );
};

export { TopAppBar };
