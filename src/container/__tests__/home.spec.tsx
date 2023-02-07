import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { store } from "../../redux-store/store";
import { Provider } from "react-redux";
import HomePage from "../home";

describe("Home Page tests", () => {
  test("should render app bar and products container", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    expect(screen.getByText("RadarFit")).toBeInTheDocument();
    expect(screen.getByText("Aproveite as oportunidades!")).toBeInTheDocument();
  });

  test("should open cart details", async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const buttonCart = screen.getByTestId("cartIcon");
    expect(buttonCart).toBeInTheDocument();

    fireEvent.click(buttonCart);

    const messageCart = screen.findByText("Aqui estão seus produtos");
    expect(await messageCart).toBeInTheDocument();
  });
});
