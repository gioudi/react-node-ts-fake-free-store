export interface ItemResult {
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
    differential_pricing: {};
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

export  interface SearchResponse {
    site_id: string;
    country_default_time_zone: string;
    query: string;
    paging: any; 
    results: ItemResult[];
    sort: any; 
    available_sorts: any[]; 
    filters: any[]; 
    available_filters: any[]; 
    pdp_tracking: any; 
}
