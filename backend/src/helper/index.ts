import { RealSearchResponse, RealItemResponse } from "../types/originalInterfaces";
import { Author, Item } from "../types/mappedInterfaces";

export function mapSearchResponseToNewStructure(
  response: RealSearchResponse | RealItemResponse
) {
  //Define authors

  //const authorName = response.results[0]?.attributes.find(attr => attr)?.values[0]?.name || 'Unknown';
  const author: Author = {
    name: "Sergio",
    lastname: "Penagos",
  };

  
  if ("results" in response) {
    //Get Categories
    const categories = response.filters.find(
      (filter) => filter.id === "category"
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
