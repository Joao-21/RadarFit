import { ProductProps } from "../../../mockedData";
import { CartInfoProps } from "../types";

export const cartInfoInitialState: CartInfoProps = {
  status: false,
  items: [] as ProductProps[],
  snackbarErrorStatus: false,
  snackbarSuccessStatus: false,
};

export const productsListInitialState = {
  productList: [] as ProductProps[],
};

export const userInitialState = { coins: 600 };
