import { ProductProps } from "../mockedData";

export const quantityPerProduct = (cartItems: ProductProps[]) => {
  const quantityPerItem = cartItems.reduce((acc: any, val) => {
    if (!acc[val.id])
      acc[val.id] = {
        quantity: 1,
      };
    else acc[val.id]["quantity"]++;
    return acc;
  }, {});

  return quantityPerItem;
};
