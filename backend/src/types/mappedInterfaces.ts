/* eslint-disable @typescript-eslint/no-explicit-any */
// Mapped interfaces to FrontEnd

export interface Author {
  name: string;
  lastname: string;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
}

export interface SearchResponse {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface ItemResponse {
  author: Author;
  item: Item;
}

export interface BreadcrumbCategory {
  id: string;
  name: string;
}

export interface BreadcrumbData {
  author: Author;
  id: string;
  name: string;
  picture: string;
  totalItems: number;
  pathFromRoot: BreadcrumbCategory[];
}

export interface ItemDescription {
  text: string;
  plain_text: string;
  last_updated: string;
  date_created: string;
  snapshot: any;
}
export interface ItemDescriptionResponse {
  item: ItemDescription;
  author: Author;
}
