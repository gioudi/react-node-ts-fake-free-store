import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Item } from "../types/apiTypes";
import { render, screen } from "@testing-library/react";
import MlCard from "../components/MlCard";

const mockItem: Item = {
  id: "12345",
  title: "Example Item",
  price: {
    amount: 100,
    currency: "USD",
    decimals: 0,
  },
  picture: "example.jpg",
  condition: "new",
  free_shipping: true,
};

test("renders card component with list of items", () => {
  render(
    <MemoryRouter>
      <MlCard payload={mockItem} />
    </MemoryRouter>,
  );

  const linkElement = screen.getByRole("link");
  expect(linkElement).toBeInTheDocument();

  const imageElement = screen.getByAltText(mockItem.title);
  expect(imageElement).toBeInTheDocument();

  const priceElement = screen.getByText("$100");
  expect(priceElement).toBeInTheDocument();

  const titleElement = screen.getByText(mockItem.title);
  expect(titleElement).toBeInTheDocument();

  const shippingElement = screen.getByAltText("shipping");
  expect(shippingElement).toBeInTheDocument();
});
