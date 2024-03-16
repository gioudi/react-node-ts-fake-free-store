import { SearchResponse } from "../types/searchInterfaces";
import { Author, Item } from "../types/siteInterfaces";

export function mapSearchResponseToNewStructure(response: SearchResponse){
    //Define authors

    const authorName = response.results[0]?.attributes.find(attr => attr)?.values[0]?.name || 'Unknown';
    const author: Author = {
        name: authorName,
        lastname: ''
    }

    //Get Categories
    const categories = response.filters.find((filter)=> filter.id === 'category');
    const categoryValues = categories ? categories.values.map((value:any)=> value.name) : []

    
    //Get Items
    const items: Item[] = response.results.map((result)=> ({
        id: result.id,
        title: result.title,
        price: {
            currency: result.currency_id,
            amount: result.price,
            decimals: 0
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping
    }))

    return {
        author,
        categories: categoryValues,
        items
    }
}

