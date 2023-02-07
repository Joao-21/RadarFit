import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { store } from "../../redux-store/store";
import { Provider } from "react-redux";
import ProductsContainer from "../home";

describe("Products Container tests", () => {
  test("should render products information", () => {
    render(
      <Provider store={store}>
        <ProductsContainer />
      </Provider>
    );
    expect(screen.getByText("Caixa G JBL: R$ 150,00")).toBeInTheDocument();
  });

  test("should add item on cart", async () => {
    render(
      <Provider store={store}>
        <ProductsContainer />
      </Provider>
    );
    const buttonAdd = screen.getByTestId("cart-1");

    await waitFor(() => {
      fireEvent.click(buttonAdd);
    });

    const itemAddedOnCart = screen.getByText("Qtd no carrinho:1");
    expect(itemAddedOnCart).toBeInTheDocument();

    const buttonCart = screen.getByTestId("cartIcon");
    expect(buttonCart).toBeInTheDocument();
    fireEvent.click(buttonCart);

    const totalValue = await screen.findByText("Total troca: R$ 150,00");

    expect(totalValue).toBeInTheDocument();
  });
});
