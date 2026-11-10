import { ProductCategory } from "../../types/Product";

type SortValue = 'default' | 'priceHigher' | 'priceLower' | 'rating';

type FilterValue = ProductCategory | 'default'

export {
    SortValue, FilterValue
}