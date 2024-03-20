/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  RealSearchResponse,
  RealItemResponse,
  RealCategoriesResponse,
} from "../types/originalInterfaces";
import { Author, BreadcrumbCategory, Item } from "../types/mappedInterfaces";

export function mapSearchResponseToNewStructure(
  response: RealSearchResponse | RealItemResponse,
) {
  //Define authors

  const author: Author = {
    name: "Sergio",
    lastname: "Penagos",
  };

  if ("results" in response) {
    //Get Categories
    const categories = response.filters.find(
      (filter) => filter.id === "category",
    );
    const categoryValues = categories
      ? categories.values.map((value: any) => value.name)
      : [];

    //Get Items
    const items: Item[] = response.results.map((result) => ({
      id: result.id,
      title: result.title,
      price: {
        currency: result.currency_id,
        amount: result.price,
        decimals: 0,
      },
      picture: result.thumbnail,
      condition: result.condition,
      free_shipping: result.shipping.free_shipping,
    }));

    return {
      author,
      categories: categoryValues,
      items,
    };
  } else {
    const item: Item = {
      id: response.id,
      title: response.title,
      price: {
        currency: response.currency_id,
        amount: response.price,
        decimals: 0,
      },
      picture: response.thumbnail,
      condition: response.condition,
      free_shipping: response.shipping.free_shipping,
      sold_quantity: response?.sold_quantity,
      description: response.descriptions.join("\n"),
    };

    return {
      author,
      item,
    };
  }
}

export function mapCategoriesResponseToNewStructure(
  response: RealCategoriesResponse,
) {
  const { id, name, picture, total_items_in_this_category, path_from_root } =
    response;

  const pathFromRootMapped: BreadcrumbCategory[] = path_from_root.map(
    (category: any) => ({
      id: category.id,
      name: category.name,
    }),
  );

  return {
    id,
    name,
    picture,
    totalItems: total_items_in_this_category,
    pathFromRoot: pathFromRootMapped,
  };
}
