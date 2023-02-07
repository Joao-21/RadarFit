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

export const formatMoney = (value: number) => {
  const formatedValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return formatedValue;
};

export const cartItemsSum = (cartItems: ProductProps[]) => {
  const sumItems = cartItems.reduce((acc, item) => {
    acc = acc + item.price;
    return acc;
  }, 0);
  return sumItems;
};
