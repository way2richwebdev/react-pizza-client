import { Product } from "../../types/Product";
import { FilterValue, SortValue } from "./types";

const getFilteredCatalog = (catalog: Product[], filterValue: FilterValue) => {
    return filterValue === 'default' 
    ? 
    catalog
    :
    catalog.filter((el) => el.category === filterValue)
};

  const getSortedCatalog = (catalog: Product[], sortValue: SortValue, filterValue: FilterValue) => {
    return sortValue === 'default'
    ?    
    getFilteredCatalog(catalog, filterValue)
    :
    catalog
  };

export {
    getFilteredCatalog, getSortedCatalog
}