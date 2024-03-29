/* eslint-disable @typescript-eslint/no-explicit-any */
// Real response interfaces
export interface RealSiteResult {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number;
  sale_price: number | null;
  available_quantity: number;
  official_store_id: number;
  official_store_name: string;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  stop_time: string;
  seller: {
    id: number;
    nickname: string;
  };
  attributes: {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    attribute_group_id: string;
    attribute_group_name: string;
    value_struct: null;
    values: any[];
    source: number;
    value_type: string;
  }[];
  installments: {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
  };
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  promotions: any[];
  differential_pricing: object;
  inventory_id: null;
  shipping: {
    store_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    mode: string;
    tags: any[];
    benefits: null;
    promise: null;
  };
}

export interface RealSearchResponse {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: any;
  results: RealSiteResult[];
  sort: any;
  available_sorts: any[];
  filters: any[];
  available_filters: any[];
  pdp_tracking: any;
}

export interface Picture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

export interface SellerAddress {
  city: {
    id: string;
    name: string;
  };
  state: {
    id: string;
    name: string;
  };
  country: {
    id: string;
    name: string;
  };
  search_location: {
    neighborhood: {
      id: string;
      name: string;
    };
    city: {
      id: string;
      name: string;
    };
    state: {
      id: string;
      name: string;
    };
  };
  id: number;
}

export interface RealItemResponse {
  sold_quantity: number | undefined;
  id: string;
  site_id: string;
  title: string;
  seller_id: number;
  category_id: string;
  official_store_id: null;
  price: number;
  base_price: number;
  original_price: null;
  currency_id: string;
  initial_quantity: number;
  sale_terms: any[];
  buying_mode: string;
  listing_type_id: string;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  pictures: Picture[];
  video_id: null;
  descriptions: any[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: {
    mode: string;
    methods: any[];
    tags: string[];
    dimensions: null;
    local_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    store_pick_up: boolean;
  };
  international_delivery_mode: string;
  seller_address: SellerAddress;
  seller_contact: null;
  location: any;
  coverage_areas: any[];
  attributes: any[];
  listing_source: string;
  variations: any[];
  status: string;
  sub_status: string[];
  tags: string[];
  warranty: string;
  catalog_product_id: string;
  domain_id: string;
  parent_item_id: null;
  deal_ids: any[];
  automatic_relist: boolean;
  date_created: string;
  last_updated: string;
  health: null;
  catalog_listing: boolean;
}

export interface RealItemInfo {
  text: string;
  plain_text: string;
  last_updated: string;
  date_created: string;
  snapshot: {
    url: string;
    width: number;
    height: number;
    status: string;
  };
}

/* Response categories service */
export interface RealCategoriesResponse {
  id: string;
  name: string;
  picture: string;
  permalink: null | string;
  total_items_in_this_category: number;
  path_from_root: { id: string; name: string }[];
  children_categories: any[];
  attribute_types: string;
  settings: {
    adult_content: boolean;
    buying_allowed: boolean;
    buying_modes: string[];
    catalog_domain: string;
    coverage_areas: string;
    currencies: string[];
    fragile: boolean;
    immediate_payment: string;
    item_conditions: any[];
    items_reviews_allowed: boolean;
    listing_allowed: boolean;
    max_description_length: number;
    max_pictures_per_item: number;
    max_pictures_per_item_var: number;
    max_sub_title_length: number;
    max_title_length: number;
    max_variations_allowed: number;
    maximum_price: null | number;
    maximum_price_currency: string;
    minimum_price: number;
    minimum_price_currency: string;
    mirror_category: null;
    mirror_master_category: null;
    mirror_slave_categories: any[];
    price: string;
    reservation_allowed: string;
    restrictions: any[];
    rounded_address: boolean;
    seller_contact: string;
    shipping_options: any[];
    shipping_profile: string;
    show_contact_information: boolean;
    simple_shipping: string;
    stock: string;
    sub_vertical: string;
    subscribable: boolean;
    tags: any[];
    vertical: string;
    vip_subdomain: string;
    buyer_protection_programs: any[];
    status: string;
  };
  channels_settings: any[];
  meta_categ_id: null | string;
  attributable: boolean;
  date_created: string;
}
