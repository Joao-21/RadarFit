import { ProductProps } from "../../../mockedData";

export interface CartInfoProps {
  status: boolean;
  items: ProductProps[];
  snackbarErrorStatus: boolean;
  snackbarSuccessStatus: boolean;
}
