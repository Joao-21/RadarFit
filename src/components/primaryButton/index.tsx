import Button from "@mui/material/Button";
import styles from "./styles.module.scss";

interface ButtonProps {
  buttonName: string;
  handleClick: () => void;
}

const PrimaryButton = ({ buttonName, handleClick }: ButtonProps) => {
  return (
    <Button className={styles.button} variant="contained" onClick={handleClick}>
      {buttonName}
    </Button>
  );
};

export default PrimaryButton;
