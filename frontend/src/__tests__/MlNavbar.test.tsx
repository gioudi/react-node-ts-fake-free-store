import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import MlNavbar from "../components/MlNavbar";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([]);

describe("Navbar component", () => {
  test("renders Navbar component", () => {
    const store = mockStore({
      sites: { loading: false, data: [] },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <MlNavbar />
        </MemoryRouter>
      </Provider>,
    );

    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText("Nunca dejes de buscar");
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByRole("button");
    expect(searchButton).toBeInTheDocument();
  });
});
