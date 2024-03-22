/* eslint-disable react/react-in-jsx-scope */
import MlBreadcrumb from "../components/MlBreadcrumb";
import { render, screen } from "@testing-library/react";

describe("MlBreadCrumb component", () => {
  test("renders loading state", () => {
    const loadingCategory = {
      loading: true,
      error: "",
      categories: [{ id: "First", name: "Name" }],
    };

    render(<MlBreadcrumb payload={loadingCategory} />);

    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
  });

  test("renders error state", () => {
    const errorCategory = {
      loading: false,
      error: "Error message",
      categories: [{ id: "First", name: "Name" }],
    };

    render(<MlBreadcrumb payload={errorCategory} />);

    const errorElement = screen.getByText("Error: Error message");
    expect(errorElement).toBeInTheDocument();
  });

  test("renders categories", () => {
    const categories = [
      { id: "1", name: "Category 1" },
      { id: "2", name: "Category 2" },
    ];

    const categoryData = {
      loading: false,
      error: "",
      categories,
    };

    render(<MlBreadcrumb payload={categoryData} />);

    const categoryElements = screen.getAllByRole("listitem");
    expect(categoryElements).toHaveLength(2);

    categories.forEach((category) => {
      const categoryElement = screen.getByText(category.name);
      expect(categoryElement).toBeInTheDocument();
    });
  });
});
